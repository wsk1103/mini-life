package com.wsk.life.springdata.entity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author: wsk1103
 * @date: 18-1-15 下午9:11
 * @description: JAVA8
 */
@Entity
@Table(name = "wangyisinger", schema = "movie", catalog = "")
public class WangyisingerEntity {
    private int id;
    private int singerid;
    private String songname;
    private int songid;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "singerid")
    public int getSingerid() {
        return singerid;
    }

    public void setSingerid(int singerid) {
        this.singerid = singerid;
    }

    @Basic
    @Column(name = "songname")
    public String getSongname() {
        return songname;
    }

    public void setSongname(String songname) {
        this.songname = songname;
    }

    @Basic
    @Column(name = "songid")
    public int getSongid() {
        return songid;
    }

    public void setSongid(int songid) {
        this.songid = songid;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WangyisingerEntity that = (WangyisingerEntity) o;
        return id == that.id &&
                singerid == that.singerid &&
                songid == that.songid &&
                Objects.equals(songname, that.songname);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, singerid, songname, songid);
    }
}
