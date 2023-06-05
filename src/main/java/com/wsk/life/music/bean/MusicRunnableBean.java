package com.wsk.life.music.bean;

import com.wsk.life.music.entity.WangYiEntity;
import com.wsk.life.springdata.entity.WangyimusicEntity;
import lombok.Data;
import org.springframework.stereotype.Component;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/1/20  18:09
 */
@Component
@Data
public class MusicRunnableBean {
    private WangYiEntity entity;
    private WangyimusicEntity musicEntity;
    private String fileName;
}
