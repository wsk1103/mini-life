package com.wsk.life.bean;

import java.io.Serializable;

/**
 * Created by wsk1103 on 2017/6/5.
 */
public class CriticCommentBean implements Serializable {
    private int id;
    private int uid;
    private String name;
    private String avatar;
    private String critic;
    private int good;
    private int pid;
    private String time;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getCritic() {
        return critic;
    }

    public void setCritic(String critic) {
        this.critic = critic;
    }

    public int getGood() {
        return good;
    }

    public void setGood(int good) {
        this.good = good;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }
}
