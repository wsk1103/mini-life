package com.wsk.life.pojo;

import java.io.Serializable;
import java.util.Date;

public class MyFriends  implements Serializable {
    private Integer id;

    private Date addtime;

    private Integer fid;

    private Integer uid;

    private Date modified;

    private Short allow;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getAddtime() {
        return addtime==null?null: (Date) addtime.clone();
    }

    public void setAddtime(Date addtime) {
        this.addtime = addtime==null?null: (Date) addtime.clone();
    }

    public Integer getFid() {
        return fid;
    }

    public void setFid(Integer fid) {
        this.fid = fid;
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
}