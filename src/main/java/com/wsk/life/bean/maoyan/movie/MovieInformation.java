package com.wsk.life.bean.maoyan.movie;

import com.wsk.life.bean.maoyan.Control;

/**
 * Created by wsk1103 on 2017/10/24.
 */
@lombok.Data
//电影详情
public class MovieInformation {
    private Control control;
    private int status;
    private Data data;
}
