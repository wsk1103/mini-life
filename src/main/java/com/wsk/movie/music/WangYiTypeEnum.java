package com.wsk.movie.music;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/18  21:53
 */
public class WangYiTypeEnum {
    public static final String SINGLE = "1";//单曲
    public static final String ALBUM = "10";//专辑
    public static final String SINGER = "100";//歌手
    public static final String SONG_SHEET = "1000";//歌单
    public static final String GET_URL = "http://music.163.com/api/search/get/";
    public static final String GET_MUSIC = "http://music.163.com/weapi/song/enhance/player/url?csrf_token=";
    public static final StringBuilder FIRST_PARAM_START = new StringBuilder("{\"ids\":\"[");
    public static final String FIRST_PARAM_END = "]\",\"br\":128000,\"csrf_token\":\"\"}";
}
