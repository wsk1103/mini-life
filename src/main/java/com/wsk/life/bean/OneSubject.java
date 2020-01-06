package com.wsk.life.bean;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by wsk1103 on 2017/10/22.
 * 豆瓣-单个电影具体信息
 */
@Data
public class OneSubject implements Serializable {
    private Rating rating;
    private int reviews_count;
    private int wish_count;
    private String douban_site;
    private String year;
    private HashMap<String,String> images;
    private String alt;
    private String id;
    private String mobile_url;
    private String title;
    private String do_count;
    private String share_url;
    private String seasons_count;
    private String schedule_url;
    private String episodes_count;
    private ArrayList<String> countries;
    private ArrayList<String> genres;
    private int collect_count;
    private ArrayList<Casts> casts;
    private String current_season;
    private String original_title;
    private String summary;
    private String subtype;
    private ArrayList<Directors> directors;
    private int comment_count;
    private int rating_count;
    private ArrayList<String> aka;
}
