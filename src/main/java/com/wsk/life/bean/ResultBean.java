package com.wsk.life.bean;

import com.wsk.life.tool.Tool;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by wsk1103 on 2017/6/10.
 */
public class ResultBean {
    private String title;
    private String tag;
    private String act;
    private String year;
    private String  rating;
    private String area;
    private String dir;
    private String desc;
    private String cover;
    private String vdo_status;
    private HashMap<String,String> playlinks;
    private ArrayList<HashMap<String, String>> video_rec;
    private ArrayList<HashMap<String,String>> act_s;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getAct() {
        return act;
    }

    public void setAct(String act) {
        this.act = act;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getDir() {
        return dir;
    }

    public void setDir(String dir) {
        this.dir = dir;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public String getVdo_status() {
        return vdo_status;
    }

    public void setVdo_status(String vdo_status) {
        this.vdo_status = vdo_status;
    }

    public HashMap getPlaylinks() {
        return (playlinks.equals("")) ? new HashMap() : playlinks;
    }

    public void setPlaylinks(HashMap playlinks) {
        this.playlinks = playlinks.equals("")?new HashMap():playlinks;
    }

    public ArrayList<HashMap<String,String>> getVideo_rec() {
        return video_rec;
    }

    public void setVideo_rec(ArrayList<HashMap<String,String>> video_rec) {
        this.video_rec = video_rec;
    }

    public ArrayList<HashMap<String,String>> getAct_s() {
        return act_s;
    }

    public void setAct_s(ArrayList<HashMap<String,String>> act_s) {
        this.act_s = act_s;
    }

    public String  getRating() {
        return Tool.getInstance().isNullOrEmpty(rating)?"未知":rating;
    }

    public void setRating(String rating) {
        this.rating = Tool.getInstance().isNullOrEmpty(rating)?"未知":rating;
    }
}
