package com.wsk.life.bean.maoyan.cinema;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by wsk1103 on 2017/10/24.
 */
@lombok.Data
public class Data {
    private ArrayList<Dates> dates;
    private CurrentMovie currentMovie;
    private CinemaDetailModel cinemaDetailModel;
    private ArrayList<Movies> movies;
    private HashMap<String, ArrayList<HashMap>> DateShow;
}
