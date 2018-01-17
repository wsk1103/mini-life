package com.wsk.movie.music.service;

import com.wsk.movie.music.entity.ResponseEntity;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午7:37
 * @description: JAVA8
 */
public interface WangYiService {
    //获取url
    ResponseEntity getMusicUrl(String name, String type);
}
