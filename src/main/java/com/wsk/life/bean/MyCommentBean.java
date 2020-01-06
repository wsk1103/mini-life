package com.wsk.life.bean;

import com.wsk.life.pojo.CommentCritic;

import java.io.Serializable;
import java.util.List;

/**
 * Created by wsk1103 on 2017/6/8.
 */
public class MyCommentBean implements Serializable {
    private int pid;
    private int fid;
    private int cid;
    private String publishTime;
    private String avatar;
    private int isprivate;
    private int friend;
    private String name;
    private String comment;
    private String critic;
    private String title;
    private String commentTime;
    private String picture;
    private String thumbnails;
//    private int collection;
//    private int good;
//    private int comment;
    private List<CommentCritic> list;

//    public int getCollection() {
//        return collection;
//    }
//
//    public void setCollection(int collection) {
//        this.collection = collection;
//    }
//
//    public int getGood() {
//        return good;
//    }
//
//    public void setGood(int good) {
//        this.good = good;
//    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public int getFid() {
        return fid;
    }

    public void setFid(int fid) {
        this.fid = fid;
    }

    public String getPublishTime() {
        return publishTime;
    }

    public void setPublishTime(String publishTime) {
        this.publishTime = publishTime;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public int getIsprivate() {
        return isprivate;
    }

    public void setIsprivate(int isprivate) {
        this.isprivate = isprivate;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCritic() {
        return critic;
    }

    public void setCritic(String critic) {
        this.critic = critic;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getThumbnails() {
        return thumbnails;
    }

    public void setThumbnails(String thumbnails) {
        this.thumbnails = thumbnails;
    }

    public List<CommentCritic> getList() {
        return list;
    }

    public void setList(List<CommentCritic> list) {
        this.list = list;
    }

    public String getCommentTime() {
        return commentTime;
    }

    public void setCommentTime(String commentTime) {
        this.commentTime = commentTime;
    }

    public int getFriend() {
        return friend;
    }

    public void setFriend(int friend) {
        this.friend = friend;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }
}
