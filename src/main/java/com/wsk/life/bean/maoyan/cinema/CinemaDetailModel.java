package com.wsk.life.bean.maoyan.cinema;

import lombok.Data;

import java.util.ArrayList;

/**
 * Created by wsk1103 on 2017/10/24.
 */
@Data
public class CinemaDetailModel {
    private String addr;
    private String nm;
    private String ct;
    private double price;
    private String note;
    private ArrayList<FeatureTags> featureTags;
    private String area;
    private ArrayList<String> tel;
    private String id;
    private double s;
}
