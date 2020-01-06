package com.wsk.life.bean;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by wsk1103 on 2017/10/21.
 * 豆瓣搜索
 */
@Data
public class Subjects implements Serializable {
private Rating rating;
private ArrayList<String> genres;
private String title;
private ArrayList<Casts> casts;
private int collect_count;
private String original_title;
private String subtype;
private ArrayList<Directors> directors;
private String year;
private HashMap<String,String> images;
private String alt;
private String id;
}
