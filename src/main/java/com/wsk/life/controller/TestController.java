package com.wsk.life.controller;

import com.wsk.life.redis.IRedisService;
import com.wsk.life.redis.IRedisUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2017/12/31  18:00
 */
@Controller
public class TestController {
    @Autowired
    IRedisService service;
    @Autowired
    IRedisUtils utils;

//    @RequestMapping(value = "/")
//    @ResponseBody
//    public String go(@Param("name") String name, @Param("password") String password) {
//        service.set("121", "11111");
////        RedisUtils utils = new RedisUtils();
////        utils.set(name, password);
//        utils.set(name, password);
//        System.out.println(utils.get(name));
//        List list = new ArrayList();
//        list.add("2");
//        list.add("3");
//        list.add(password);
//        service.setList(name, list);
//        return "home";
//    }
}
