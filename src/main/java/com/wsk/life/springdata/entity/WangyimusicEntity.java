package com.wsk.life.springdata.entity;

import javax.persistence.*;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/1/21  18:59
 */
@Entity
@Table(name = "wangyimusic", schema = "movie", catalog = "")
public class WangyimusicEntity {
    private int id;
    private int songid;
    private String name;
    private String singerid;
    private Integer albumid;
    private String alias;
    private String url;
    private String picurl;
    private Integer status;

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

    @Basic
    @Column(name = "picurl")
    public String getPicurl() {
        return picurl;
    }

    public void setPicurl(String picurl) {
        this.picurl = picurl;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        WangyimusicEntity entity = (WangyimusicEntity) o;

        if (id != entity.id) return false;
        if (songid != entity.songid) return false;
        if (name != null ? !name.equals(entity.name) : entity.name != null) return false;
        if (singerid != null ? !singerid.equals(entity.singerid) : entity.singerid != null) return false;
        if (albumid != null ? !albumid.equals(entity.albumid) : entity.albumid != null) return false;
        if (alias != null ? !alias.equals(entity.alias) : entity.alias != null) return false;
        if (url != null ? !url.equals(entity.url) : entity.url != null) return false;
        if (picurl != null ? !picurl.equals(entity.picurl) : entity.picurl != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + songid;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (singerid != null ? singerid.hashCode() : 0);
        result = 31 * result + (albumid != null ? albumid.hashCode() : 0);
        result = 31 * result + (alias != null ? alias.hashCode() : 0);
        result = 31 * result + (url != null ? url.hashCode() : 0);
        result = 31 * result + (picurl != null ? picurl.hashCode() : 0);
        return result;
    }

    @Basic
    @Column(name = "status")
    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
}
