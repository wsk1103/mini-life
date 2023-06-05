package com.wsk.life.springdata.admin.entity;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/4/4  17:07
 */
@Entity
@Table(name = "adminaction", schema = "movie", catalog = "")
public class AdminactionEntity {
    private int id;
    private int aid;
    private Timestamp modified;
    private String action;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "aid")
    public int getAid() {
        return aid;
    }

    public void setAid(int aid) {
        this.aid = aid;
    }

    @Basic
    @Column(name = "modified")
    public Timestamp getModified() {
        return modified;
    }

    public void setModified(Timestamp modified) {
        this.modified = modified;
    }

    @Basic
    @Column(name = "action")
    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AdminactionEntity that = (AdminactionEntity) o;

        if (id != that.id) return false;
        if (aid != that.aid) return false;
        if (modified != null ? !modified.equals(that.modified) : that.modified != null) return false;
        if (action != null ? !action.equals(that.action) : that.action != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + aid;
        result = 31 * result + (modified != null ? modified.hashCode() : 0);
        result = 31 * result + (action != null ? action.hashCode() : 0);
        return result;
    }
}
