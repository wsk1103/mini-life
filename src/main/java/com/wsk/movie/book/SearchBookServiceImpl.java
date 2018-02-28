package com.wsk.movie.book;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.wsk.movie.book.entity.BookEntity;
import com.wsk.movie.book.service.BookRepository;
import com.wsk.movie.book.service.SearchBookService;
import com.wsk.movie.music.HttpUnits;
import com.wsk.movie.redis.IRedisUtils;
import com.wsk.movie.tool.Time;
import com.wsk.movie.tool.Tool;
import org.hibernate.exception.DataException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
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
                    result.add(Tool.getInstance().jsonToBean(o.toString(), BookEntity.class));
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
                model = Tool.getInstance().jsonToBean(o.toString(), BookEntity.class);
            } catch (Exception e) {
                e.printStackTrace();
                continue;
            }
            String id = model.getId();
            if (Tool.getInstance().isNullOrEmpty(id)) {
                continue;
            }
//            if (object.containsKey("id")){
//                id = object.getString("id");
//                model.setId(id);
//            } else {
//                continue;
//            }
//            if (object.containsKey("author")) {
//                JSONArray authors = JSONArray.parseArray(object.getString("author"));
//                StringBuilder author = new StringBuilder();
//                for (int i = 0; i < authors.size(); i++) {
//                    Object o_author = authors.get(i);
//                    author.append(o_author.toString());
//                    if (i >= authors.size() - 1) {
//                        break;
//                    }
//                    author.append(",");
//                }
//                model.setAuthor(author.toString());
//            }
//            if (object.containsKey("pubdate"))
//            model.setPubdate(object.getString("pubdate"));
//            if (object.containsKey("origin_title"))
//            model.setOriginTitle(object.getString("origin_title"));
//            if (object.containsKey("image"))
//            model.setImage(object.getString("image"));
//            if (object.containsKey("binding"))
//            model.setBinding(object.getString("binding"));
//            if (object.containsKey("translator")) {
//                JSONArray translators = JSONArray.parseArray(object.getString("translator"));
//                StringBuilder translator = new StringBuilder();
//                for (int i = 0; i < translators.size(); i++) {
//                    Object otranslator = translators.get(i);
//                    translator.append(otranslator.toString());
//                    if (i >= translators.size() - 1) {
//                        break;
//                    }
//                    translator.append(",");
//                }
//                model.setTranslator(translator.toString());
//            }
//            if (object.containsKey("catalog"))
//            model.setCatalog(object.getString("catalog"));
//            if (object.containsKey("pages"))
//            model.setPages(object.getString("pages"));
//            if (object.containsKey("publisher"))
//            model.setPublisher(object.getString("publisher"));
//            if (object.containsKey("isbn10"))
//            model.setIsbn10(object.getString("isbn10"));
//            if (object.containsKey("isbn13"))
//            model.setIsbn13(object.getString("isbn13"));
//            String title;
//            if (object.containsKey("title")) {
//                title = object.getString("title");
//                model.setTitle(title);
//            } else {
//                continue;
//            }
//            if (object.containsKey("author_intro"))
//            model.setAuthorIntro(object.getString("author_intro"));
//            if (object.containsKey("summary"))
//            model.setSummary(object.getString("summary"));
//            if (object.containsKey("price"))
//            model.setPrice(object.getString("price"));
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
        redisUtils.hset("book", name, Tool.getInstance().toJson(result), Time.ONE_DAY);
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
