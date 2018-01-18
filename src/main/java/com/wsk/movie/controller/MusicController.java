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

    @RequestMapping(value = "/music/{id}")
    @ResponseBody
    public BaseEntity searchByName(@Param("name") String name, @PathVariable String id) {
//        switch (id) {
//            case SINGLE:
//
//        }
        return service.getMusicUrl(name, id);
    }
}
