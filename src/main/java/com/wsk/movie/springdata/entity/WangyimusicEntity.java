package com.wsk.movie.springdata.entity;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午10:19
 * @description: JAVA8
 */
@Entity
@Table(name = "wangyimusic", schema = "movie")
public class WangyimusicEntity {
    private int id;
    private int songid;
    private String name;
    private String singerid;
    private Integer albumid;
    private String alias;
    private String url;

    @Id
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "songid")
    public int getSongid() {
        return songid;
    }

    public void setSongid(int songid) {
        this.songid = songid;
    }

    @Basic
    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Basic
    @Column(name = "singerid")
    public String getSingerid() {
        return singerid;
    }

    public void setSingerid(String singerid) {
        this.singerid = singerid;
    }

    @Basic
    @Column(name = "albumid")
    public Integer getAlbumid() {
        return albumid;
    }

    public void setAlbumid(Integer albumid) {
        this.albumid = albumid;
    }

    @Basic
    @Column(name = "alias")
    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    @Basic
    @Column(name = "url")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        WangyimusicEntity that = (WangyimusicEntity) o;
        return id == that.id &&
                songid == that.songid &&
                Objects.equals(name, that.name) &&
                Objects.equals(singerid, that.singerid) &&
                Objects.equals(albumid, that.albumid) &&
                Objects.equals(alias, that.alias) &&
                Objects.equals(url, that.url);
    }

    @Override
    public int hashCode() {

        return Objects.hash(id, songid, name, singerid, albumid, alias, url);
    }
}
