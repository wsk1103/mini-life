package com.wsk.life.music.entity;

import lombok.Data;

import java.io.Serializable;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午8:17
 * @description: JAVA8,回显的网易云音乐类
 */
@Data
public class WangYiEntity implements Serializable{
    private long id;//id
    private long songid;//歌曲id-对于网易云
    private String songname;//歌曲名
    private String singerid;//歌手id
    private String singername;//歌手名
    private long albumid;//专辑id
    private String albumname;//专辑名
    private String publishtime;//发布时间戳
    private String alias;
    private String url;//地址
    private String picurl;//图片地址
}
