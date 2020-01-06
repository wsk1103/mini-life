package com.wsk.life.bean;

import java.io.Serializable;
import java.util.List;

/**
 * Created by wsk1103 on 2017/6/12.
 */
public class MessageBean implements Serializable {
    private Integer id;

    private Integer uid;

    private Integer fid;

    private List<Content> contents;

//    private List<String>  modified;
//
//    private List<String> message;

    private Integer onread;
    private String name;

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

//    public List<String> getModified() {
//        return modified;
//    }
//
//    public void setModified(List<String> modified) {
//        this.modified = modified;
//    }
//
//    public List<String> getMessage() {
//        return message;
//    }
//
//    public void setMessage(List<String> message) {
//        this.message = message;
//    }

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

    public List<Content> getContents() {
        return contents;
    }

    public void setContents(List<Content> contents) {
        this.contents = contents;
    }

}
