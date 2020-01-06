package com.wsk.life.music.entity;

import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

/**
 * @author: wsk1103
 * @date: 18-1-15 下午11:18
 * @description: JAVA8
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class WangYiResponseEntity extends BaseEntity {
    private List<WangYiEntity> data;
}
