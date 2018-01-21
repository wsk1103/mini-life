package com.wsk.movie.music.bean;

import lombok.Data;

/**
 * @DESCRIPTION :网易评论，热门评论和最新评论
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/21  14:10
 */
@Data
public class WangYiCommentsBean {
    private WangYiUserBean user;
    private String time;
    private String content;
}
