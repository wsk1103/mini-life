package com.wsk.movie.music.entity;

import lombok.Data;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/22  20:42
 */
@Data
public class WangYiUrlEntity extends BaseEntity {
    private String url;
    private long song_id;
}
