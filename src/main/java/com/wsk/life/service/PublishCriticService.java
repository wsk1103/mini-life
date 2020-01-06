package com.wsk.life.service;

import com.wsk.life.pojo.PublishCritic;

import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/1.
 */
public interface PublishCriticService {
    //insert
    int insertObject(PublishCritic t);

    //update
    int updateObject(PublishCritic t);

    //select
    PublishCritic getObjectById(int id);

    //delete(The delete operation actually updates allow to 0)
    int deleteObject(PublishCritic t);

    public List<PublishCritic> getAllForeach(Map<String, Object> map);

    List<PublishCritic> getPublishCriticByUid(Map<String, Integer> map);

    List<PublishCritic> getHotCritic(int start);

    List<PublishCritic> selectByTitle(Map map);

    int getUserCounts(int uid);

    PublishCritic selectByIdAndUid(Map<String, Integer> map);

    PublishCritic selectByIdAndAllow(Map<String, Integer> map);
}
