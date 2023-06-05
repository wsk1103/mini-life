package com.wsk.life.music.entity;

import com.wsk.life.music.bean.WangYiAllCommentBean;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/1/21  14:21
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class WangYiCommentResponseEntity extends BaseEntity {
    private long songid;
    private WangYiAllCommentBean data;
}
