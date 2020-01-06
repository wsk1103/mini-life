package com.wsk.life.bean.maoyan.cinemas;

import lombok.Data;

import java.io.Serializable;

/**
 * Created by wsk1103 on 2017/10/29.
 */
@Data
public class Information implements Serializable {
    private String brd;
    private String dis;
    private String nm;
    private double sellPrice;
    private String addr;
    private String area;
    private String id;
}
