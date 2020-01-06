package com.wsk.life.pojo;

import java.io.Serializable;
import java.util.Date;

public class UserPassword  implements Serializable {
    private Integer id;

    private String password;

    private Date modified;

    private Short allow;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
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