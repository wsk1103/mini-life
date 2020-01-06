package com.wsk.life.pojo;

import java.io.Serializable;
import java.util.Date;

public class ForumContent  implements Serializable {
    private Integer id;

    private Integer fid;

    private Date time;

    private Integer uid;

    private Date modified;

    private Short allow;

    private Integer mid;

    private String content;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
    }

    public Date getTime() {
        return time==null?null: (Date) time.clone();
    }

    public void setTime(Date time) {
        this.time = time==null?null: (Date) time.clone();
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

    public Integer getMid() {
        return mid;
    }

    public void setMid(Integer mid) {
        this.mid = mid;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}