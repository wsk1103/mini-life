package com.wsk.life.music.bean;

import lombok.Data;

import java.io.Serializable;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午2:04
 * @description: JAVA8,网易云音乐实体
 */
@Data
public class WangYiBean implements Serializable {
    private WangYiResult result;
    private int code;
}
