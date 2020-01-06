package com.wsk.life.bean;

import java.io.Serializable;

/**
 * Created by wsk1103 on 2017/5/18.
 */
public class UserPublish implements Serializable {
    private int uid;
    private int pid;
    private String avatar;
    private String name;
    private String time;
    private String critic;
    private String title;
    private String picture;
    private String thumbnails;
    private int friend;
    private int collectionCounts;
    private int isPrivate;
    private int commentCounts;
    private int goodCounts;
    private int good;
    private int collection;

    public int getPid() {
        return pid;
    }

    public void setPid(int pid) {
        this.pid = pid;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String  getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
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

    public int getCollectionCounts() {
        return collectionCounts;
    }

    public void setCollectionCounts(int collectionCounts) {
        this.collectionCounts = collectionCounts;
    }

    public int getCommentCounts() {
        return commentCounts;
    }

    public void setCommentCounts(int commentCounts) {
        this.commentCounts = commentCounts;
    }

    public int getGoodCounts() {
        return goodCounts;
    }

    public void setGoodCounts(int goodCounts) {
        this.goodCounts = goodCounts;
    }

    public int getUid() {
        return uid;
    }

    public void setUid(int uid) {
        this.uid = uid;
    }

    public String getThumbnails() {
        return thumbnails;
    }

    public void setThumbnails(String thumbnails) {
        this.thumbnails = thumbnails;
    }

    public int getIsPrivate() {
        return isPrivate;
    }

    public void setIsPrivate(int isPrivate) {
        this.isPrivate = isPrivate;
    }

    public int getFriend() {
        return friend;
    }

    public void setFriend(int friend) {
        this.friend = friend;
    }

    public int getGood() {
        return good;
    }

    public void setGood(int good) {
        this.good = good;
    }

    public int getCollection() {
        return collection;
    }

    public void setCollection(int collection) {
        this.collection = collection;
    }
}
