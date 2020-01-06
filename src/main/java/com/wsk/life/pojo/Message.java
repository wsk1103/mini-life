package com.wsk.life.pojo;

import java.util.Date;

public class Message {
    private Integer id;

    private Integer uid;

    private Integer fid;

    private Date modified;

    private String message;

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

    public Date getModified() {
        return modified;
    }

    public void setModified(Date modified) {
        this.modified = modified;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message == null ? null : message.trim();
    }

    public Integer getOnread() {
        return onread;
    }

    public void setOnread(Integer onread) {
        this.onread = onread;
    }
}