package com.wsk.movie.controller;

import com.wsk.movie.music.entity.BaseEntity;
import com.wsk.movie.music.service.WangYiService;
import lombok.Data;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午10:00
 * @description: JAVA8
 */
@Controller
@Data
public class MusicController {

    @Autowired
    private WangYiService service;

    @RequestMapping(value = "/search/music/{id}")
    @ResponseBody
    public BaseEntity searchByName(@Param("name") String name, @PathVariable String id) {
//        switch (id) {
//            case SINGLE:
//
//        }
        return service.getMusic(name, id);
    }

    @RequestMapping(value = "/delRedis")
    @ResponseBody
    public String delRedis(@Param("name") String name) {
        return service.delRedis(name) ? "true" : "false";
    }

    //获取评论-根据名字
    @RequestMapping(value = "/search/music/comments")
    @ResponseBody
    public BaseEntity getMusicComments(@Param("name") String name) {
        return service.getMusicComments(name);
    }

    //获取评论-根据id
    @RequestMapping(value = "/search/music/comments/id")
    @ResponseBody
    public BaseEntity getMusicComments(@Param("id") long id) {
        return service.getMusicComments(id);
    }

    //获取评论-根据id
    @RequestMapping(value = "/search/music/hot/{type}")
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

    //根据歌曲id获得url

}
