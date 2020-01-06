package com.wsk.life.bean.maoyan.cinema;

import lombok.Data;

/**
 * Created by wsk1103 on 2017/10/24.
 */
@Data
public class CurrentMovie {
    private String nm;
    private boolean isShowing;
    private String img;
    private double sc;
    private int preferential;
    private String ver;
    private String id;
}
