package com.wsk.life.service;

import com.wsk.life.pojo.CollectionCritic;

import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/18.
 */
public interface CollectionCriticService {
    int deleteByPrimaryKey(Integer id);

    int insert(CollectionCritic record);

    int insertSelective(CollectionCritic record);

    CollectionCritic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CollectionCritic record);

    int updateByPrimaryKey(CollectionCritic record);

    int getCounts(int pid);

    int getUserCounts(int uid);

    List<CollectionCritic> selectByUid(Map<String, Integer> map);

    CollectionCritic selectCollection(Map<String, Integer> map);

    CollectionCritic selectCollectionAndAllow(Map<String, Integer> map);
}
