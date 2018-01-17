package com.wsk.movie.music.entity;

import lombok.Data;

import java.util.List;

/**
 * @author: wsk1103
 * @date: 18-1-15 下午11:18
 * @description: JAVA8
 */
@Data
public class ResponseEntity {
    private int code;
    private String msg;
    private List data;
}
