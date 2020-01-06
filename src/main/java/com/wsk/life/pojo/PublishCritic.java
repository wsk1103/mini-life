package com.wsk.life.pojo;

import java.io.Serializable;
import java.util.Date;

public class PublishCritic  implements Serializable {
    private Integer id;

    private Integer good;

    private Integer isprivate;

    private String picture;

    private Date time;

    private String title;

    private Integer uid;

    private Date modified;

    private Short allow;

    private String critic;

    private String thumbnails;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getGood() {
        return good;
    }

    public void setGood(Integer good) {
        this.good = good;
    }

    public Integer getIsprivate() {
        return isprivate;
    }

    public void setIsprivate(Integer isprivate) {
        this.isprivate = isprivate;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture == null ? null : picture.trim();
    }

    public Date getTime() {
        return time==null?null: (Date) time.clone();
    }

    public void setTime(Date time) {
        this.time = time==null?null: (Date) time.clone();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Date getModified() {
        return modified==null?null: (Date) modified.clone();
    }

    public void setModified(Date modified) {
        this.modified = modified==null?null: (Date) modified.clone();
    }

    public Short getAllow() {
        return allow;
    }

    public void setAllow(Short allow) {
        this.allow = allow;
    }

    public String getCritic() {
        return critic;
    }

    public void setCritic(String critic) {
        this.critic = critic == null ? null : critic.trim();
    }

    public String getThumbnails() {
        return thumbnails;
    }

    public void setThumbnails(String thumbnails) {
        this.thumbnails = thumbnails;
    }
}