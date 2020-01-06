package com.wsk.life.bean;

import java.io.Serializable;

/**
 * Created by wsk1103 on 2017/6/12.
 */
public class MessageOne implements Serializable {
    private Integer id;

    private Integer uid;

    private Integer fid;

    private String  modified;

    private String  message;

    private Integer onread;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUid() {
        return uid;
    }

    public void setUid(Integer uid) {
        this.uid = uid;
    }

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
    }

    public String getModified() {
        return modified;
    }

    public void setModified(String modified) {
        this.modified = modified;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getOnread() {
        return onread;
    }

    public void setOnread(Integer onread) {
        this.onread = onread;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    private String name;
}
