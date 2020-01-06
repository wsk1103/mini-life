package com.wsk.life.pojo;

import java.io.Serializable;
import java.util.Date;

public class GoodCritic  implements Serializable {
    private Integer id;

    private Integer pid;

    private Date time;

    private Integer uid;

    private Date modified;

    private Short allow;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getPid() {
        return pid;
    }

    public void setPid(Integer pid) {
        this.pid = pid;
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
}