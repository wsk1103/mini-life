package com.wsk.life.pojo;

import java.io.Serializable;
import java.util.Date;

public class UserInformation  implements Serializable {

    private static final long serialVersionUID = 55426316542955265L;

    private Integer id;

    private String address;

    private String autograph;

    private Date birthday;

    private Date buildtime;

    private String label;

    private String name;

    private String phone;

    private String sex;

    private Date modified;

    private String avatar;

    private Integer allowed;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getAutograph() {
        return autograph;
    }

    public void setAutograph(String autograph) {
        this.autograph = autograph == null ? null : autograph.trim();
    }

    public Date getBirthday() {
        return birthday==null?null: (Date) birthday.clone();
    }

    public void setBirthday(Date birthday) {
        this.birthday = birthday ==null?null: (Date) birthday.clone();
    }

    public Date getBuildtime() {
        return buildtime;
    }

    public void setBuildtime(Date buildtime) {
        this.buildtime = buildtime;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label == null ? null : label.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public Date getModified() {
        return modified==null?null: (Date) modified.clone();
    }

    public void setModified(Date modified) {
        this.modified = modified==null?null: (Date) modified.clone();
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar == null ? null : avatar.trim();
    }

    public Integer getAllowed() {
        return allowed;
    }

    public void setAllowed(Integer allowed) {
        this.allowed = allowed;
    }
}