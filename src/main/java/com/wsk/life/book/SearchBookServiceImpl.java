package com.wsk.life.book;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.wsk.life.book.entity.BookEntity;
import com.wsk.life.book.service.BookRepository;
import com.wsk.life.book.service.SearchBookService;
import com.wsk.life.music.HttpUnits;
import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.tool.JSONUtil;
import com.wsk.life.tool.Time;
import com.wsk.life.tool.Tool;
import org.hibernate.exception.DataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/2/15  15:00
 */
@Component
public class SearchBookServiceImpl implements SearchBookService {
    private static final String URL = "https://api.douban.com/v2/book/search?";

    private final BookRepository bookRepository;
    private final IRedisUtils redisUtils;

    @Autowired
    public SearchBookServiceImpl(BookRepository bookRepository, IRedisUtils redisUtils) {
        this.bookRepository = bookRepository;
        this.redisUtils = redisUtils;
    }

    @Override
    public List<BookEntity> searchBookByName(String name) {
        if (Tool.getInstance().isNullOrEmpty(name)) {
            return null;
        }
        List<BookEntity> result = new ArrayList<>();
        //从redis中获取
        String books = redisUtils.hget("book", name);
        if (Tool.getInstance().isNotNull(books)) {
            JSONArray array = JSONArray.parseArray(books);
            for (Object o : array) {
                try {
                    result.add(JSONUtil.toBean(o.toString(), BookEntity.class));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            return result;
        }
        //redis 中没有，从豆瓣获取
        String myUrl = URL + "q=" + name;
        String json;
        try {
            json  = HttpUnits.urlToString(myUrl).text();
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
        //将
        JSONObject object = (JSONObject) JSONObject.parse(json);
        JSONArray array = JSONArray.parseArray(object.getString("books"));
        for (Object o : array) {
            object = (JSONObject) o;
            BookEntity model;
            try {
                model =JSONUtil.toBean(o.toString(), BookEntity.class);
            } catch (Exception e) {
                e.printStackTrace();
                continue;
            }
            String id = model.getId();
            if (Tool.getInstance().isNullOrEmpty(id)) {
                continue;
            }
            //获取评分，
            if (object.containsKey("rating")) {
                object = object.getJSONObject("rating");
                if (object.containsKey("average"))
                model.setAverage(object.getString("average"));
            }
            //如果数据库没有，则保存到数据库
            if (Tool.getInstance().isNullOrEmpty(bookRepository.findOne(id))) {
                try {
                    bookRepository.save(model);
                } catch (DataException e) {
                    e.printStackTrace();
                    continue;
                }
            }
            result.add(model);
        }
        //保存到缓存，
        /*
          类型为 hash,存储格式为 book   -    name    -    与之相关的书籍
          保存一天
         */
        redisUtils.hset("book", name, JSONUtil.toJson(result), Time.ONE_DAY);
        return result;
    }

    @Override
    public List<BookEntity> randBook() {
        return bookRepository.randBook();
    }

    @Override
    public BookEntity findById(long id) {
        return bookRepository.findOne(id + "");
    }

    public static void main(String[] args) {
//        SearchBookService service = new SearchBookServiceImpl();
//        service.searchBookByName("小王子");
    }
}
