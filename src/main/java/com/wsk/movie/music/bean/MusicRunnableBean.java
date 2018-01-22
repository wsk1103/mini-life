package com.wsk.movie.music.bean;

import com.wsk.movie.music.entity.WangYiEntity;
import com.wsk.movie.springdata.entity.WangyimusicEntity;
import lombok.Data;
import org.springframework.stereotype.Component;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/20  18:09
 */
@Component
@Data
public class MusicRunnableBean {
    private WangYiEntity entity;
    private WangyimusicEntity musicEntity;
    private String fileName;
}
