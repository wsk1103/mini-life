package com.wsk.life.springdata.entity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author: wsk1103
 * @date: 18-1-15 下午9:11
 * @description: JAVA8
 */
@Entity
@Table(name = "wangyialbum", schema = "movie", catalog = "")
public class WangyialbumEntity {
    private int id;
    private int albumid;
    private String albumname;
    private Long publishtime;
    private String picid;
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
    @Column(name = "albumid")
    public int getAlbumid() {
        return albumid;
    }

    public void setAlbumid(int albumid) {
        this.albumid = albumid;
    }

    @Basic
    @Column(name = "albumname")
    public String getAlbumname() {
        return albumname;
    }

    public void setAlbumname(String albumname) {
        this.albumname = albumname;
    }

    @Basic
    @Column(name = "publishtime")
    public Long getPublishtime() {
        return publishtime;
    }

    public void setPublishtime(Long publishtime) {
        this.publishtime = publishtime;
    }

    @Basic
    @Column(name = "picid")
    public String getPicid() {
        return picid;
    }

    public void setPicid(String picid) {
        this.picid = picid;
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
        WangyialbumEntity that = (WangyialbumEntity) o;
        return id == that.id &&
                albumid == that.albumid &&
                songid == that.songid &&
                Objects.equals(albumname, that.albumname) &&
                Objects.equals(publishtime, that.publishtime) &&
                Objects.equals(picid, that.picid);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, albumid, albumname, publishtime, picid, songid);
    }
}
