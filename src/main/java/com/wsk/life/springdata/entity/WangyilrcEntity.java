package com.wsk.life.springdata.entity;

import javax.persistence.*;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/5/1  17:48
 */
@Entity
@Table(name = "wangyilrc", schema = "movie", catalog = "")
public class WangyilrcEntity {
    private int id;
    private String lrc;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "lrc")
    public String getLrc() {
        return lrc;
    }

    public void setLrc(String lrc) {
        this.lrc = lrc;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        WangyilrcEntity that = (WangyilrcEntity) o;

        if (id != that.id) return false;
        if (lrc != null ? !lrc.equals(that.lrc) : that.lrc != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (lrc != null ? lrc.hashCode() : 0);
        return result;
    }
}
