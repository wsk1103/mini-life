package com.wsk.movie.music.entity;

import com.wsk.movie.music.bean.WangYiAllCommentBean;
import lombok.Data;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/21  14:21
 */
@Data
public class WangYiCommentResponseEntity extends BaseEntity {
    private long songid;
    private WangYiAllCommentBean data;
}
