package com.wsk.life.service;

import com.wsk.life.pojo.GoodCritic;

import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/18.
 */
public interface GoodCriticService {
    int deleteByPrimaryKey(Integer id);

    int insert(GoodCritic record);

    int insertSelective(GoodCritic record);

    GoodCritic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(GoodCritic record);

    int updateByPrimaryKey(GoodCritic record);

    int getCounts(int pid);

    int getUserCounts(int uid);

    List<GoodCritic> selectByUid(Map<String, Integer> map);

    GoodCritic selectGood(Map<String, Integer> map);

    GoodCritic selectGoodAndAllow(Map<String, Integer> map);
}
