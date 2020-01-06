package com.wsk.life.free.controller.music;

import com.wsk.life.music.entity.BaseEntity;
import com.wsk.life.music.entity.WangYiResponseEntity;
import com.wsk.life.music.service.WangYiService;
import com.wsk.life.pojo.UserInformation;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午10:00
 * @description: JAVA8 ，公开的api
 */
@Controller
@RequestMapping(value = "/search/music")
public class SearchMusicController {

    private final WangYiService service;

    @Autowired
    public SearchMusicController(WangYiService service) {
        this.service = service;
    }

    @RequestMapping(value = "/{id}")
    @ResponseBody
    public BaseEntity searchByName(@Param("name") String name, @PathVariable String id) {
        return service.getMusic(name, id);
    }

    @RequestMapping(value = "/delRedis")
    @ResponseBody
    public String delRedis(@Param("name") String name) {
        return service.delRedis(name) ? "true" : "false";
    }

    @RequestMapping(value = "/delRedisUrl")
    @ResponseBody
    public String delRedisUrl(@Param("url") String url) {
        return service.delRedisUrl(url) ? "true" : "false";
    }

    /**
     * 获取评论-根据名字
     *
     * @param name
     * @return
     */
    @RequestMapping(value = "/comments")
    @ResponseBody
    public BaseEntity getMusicComments(@Param("name") String name) {
        return service.getMusicComments(name);
    }

    /**
     * 获取评论-根据id
     * @param id 歌曲ID
     * @return 相应的歌曲
     */
    @RequestMapping(value = "/comments/id")
    @ResponseBody
    public BaseEntity getMusicComments(@Param("id") long id) {
        return service.getMusicComments(id);
    }

    /**
     * 获取音乐更加类型
     * @param type 热门类型
     * @return 所有相应歌曲
     */
    @RequestMapping(value = "/hot/{type}")
    @ResponseBody
    public BaseEntity getHotMusic(@PathVariable("type") int type) {
        switch (type) {
            case 1:
                //云音乐热歌榜
                return service.getHotMusic();
            case 2:
                //云音乐飙升榜
                return service.getHottingMusic();
            case 3:
                //云音乐新歌榜
                return service.getNewMusic();
            default:
                throw new RuntimeException("?");
        }
    }

    /**
     * 根据歌曲id获得url
     * @param id 歌曲id
     * @return 所有相应歌曲
     */
    @RequestMapping(value = "/url/{id}")
    @ResponseBody
    public BaseEntity getMusicUrlById(@PathVariable("id") long id) {
        return service.getMusicUrlById(id);
    }

    /**
     * 免费音乐开发接口
     *
     * @param type  音乐类型
     * @param model 传递给界面的模型，类似一个map
     * @return 返回的页面的地址
     */
    @RequestMapping(value = "/free/hot/{type}")
    public String hot(@PathVariable("type") String type, Model model) {
        WangYiResponseEntity entity;
        String title;
        switch (type) {
            case "2":
                //云音乐飙升榜-2
                entity = (WangYiResponseEntity) service.getHottingMusic();
                title = "音乐飙升榜";
                break;
            case "1":
                //云音乐热歌榜-1
                entity = (WangYiResponseEntity) service.getHotMusic();
                title = "音乐热歌榜";
                break;
            default: // 云音乐新歌榜-3
                entity = (WangYiResponseEntity) service.getNewMusic();
                title = "音乐新歌榜";
                break;
        }
        model.addAttribute("entity", entity.getData());
        model.addAttribute("action", 6);
        model.addAttribute("userInformation", new UserInformation());
        model.addAttribute("username", "");
        model.addAttribute("autograph", "");
        model.addAttribute("title", title);
        return "music/freeHot";
    }
}
