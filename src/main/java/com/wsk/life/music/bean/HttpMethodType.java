package com.wsk.life.music.bean;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午6:49
 * @description: JAVA8
 */
public enum HttpMethodType {

    POST, GET;

    @Override
    public String toString() {
        switch (this) {
            case GET:
                return "get";
            case POST:
                return "post";
            default:
                return "unknow";
        }
    }
}
