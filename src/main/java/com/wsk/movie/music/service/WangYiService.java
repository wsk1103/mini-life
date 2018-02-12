package com.wsk.movie.music.service;

import com.wsk.movie.music.entity.BaseEntity;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午7:37
 * @description: JAVA8
 */
public interface WangYiService {
    //获取url
    BaseEntity getMusic(String name, String type);

    boolean delRedis(String name);

    boolean delRedisUrl(String url);

    BaseEntity getMusicComments(String name);

    BaseEntity getMusicComments(long song_id);

    //云音乐飙升榜
    BaseEntity getHottingMusic();

    //云音乐热歌榜
    BaseEntity getHotMusic();

    //云音乐新歌榜
    BaseEntity getNewMusic();

    //根据歌曲id获得url
    BaseEntity getMusicUrlById(long song_id);
}
