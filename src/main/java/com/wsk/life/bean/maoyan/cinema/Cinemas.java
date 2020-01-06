package com.wsk.life.bean.maoyan.cinema;

import com.wsk.life.bean.maoyan.Control;

import java.io.Serializable;

/**
 * Created by wsk1103 on 2017/10/24.
 */
//当个影院的信息
@lombok.Data
public class Cinemas implements Serializable {
    private Control control;
    private int status;
    private Data data;
}
