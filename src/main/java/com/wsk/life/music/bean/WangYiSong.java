package com.wsk.life.music.bean;

import lombok.Data;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午2:38
 * @description: JAVA8,网易云音乐歌曲
 */
@Data
public class WangYiSong {
    private long id;//id
    private String name;//名字
    private WangYiArtists[] artists;//歌手
    private WangYiAlbum album;//专辑
    private String[] alias;//包括
    private long publishTime;//发布时间
}
