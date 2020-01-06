package com.wsk.life.bean.celebrity;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by wsk1103 on 2017/10/22.
 */
@Data
public class CelebrityBean implements Serializable {
    private String mobile_url;
    private ArrayList<String> aka_en;
    private String name;
    private ArrayList<Work> works;
    private String gender;
    private HashMap<String, String> avatars;
    private String id;
    private ArrayList<String> aka;
    private String name_en;
    private String born_place;
    private String alt;
}
