package com.wsk.life.bean;

import java.io.Serializable;

/**
 * Created by wsk1103 on 2017/6/9.
 */
public class MyCollectionBean extends UserPublish implements Serializable {
    private String collectionTime;

    public String getCollectionTime() {
        return collectionTime;
    }

    public void setCollectionTime(String collectionTime) {
        this.collectionTime = collectionTime;
    }
}
