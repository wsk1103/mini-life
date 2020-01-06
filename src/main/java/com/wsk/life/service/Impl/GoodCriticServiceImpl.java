package com.wsk.life.service.Impl;

import com.wsk.life.dao.GoodCriticMapper;
import com.wsk.life.pojo.GoodCritic;
import com.wsk.life.service.GoodCriticService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/18.
 */
@Service
public class GoodCriticServiceImpl implements GoodCriticService{
    @Resource
    private GoodCriticMapper goodCriticMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(GoodCritic record) {
        return goodCriticMapper.insert(record);
    }

    @Override
    public int insertSelective(GoodCritic record) {
        return goodCriticMapper.insertSelective(record);
    }

    @Override
    public GoodCritic selectByPrimaryKey(Integer id) {
        return goodCriticMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(GoodCritic record) {
        return goodCriticMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(GoodCritic record) {
        return goodCriticMapper.updateByPrimaryKey(record);
    }

    @Override
    public int getCounts(int pid) {
        return goodCriticMapper.getCounts(pid);
    }

    @Override
    public int getUserCounts(int uid) {
        return goodCriticMapper.getUserCounts(uid);
    }

    @Override
    public List<GoodCritic> selectByUid(Map<String, Integer> map) {
        return goodCriticMapper.selectByUid(map);
    }

    @Override
    public GoodCritic selectGood(Map<String, Integer> map) {
        return goodCriticMapper.selectGood(map);
    }

    @Override
    public GoodCritic selectGoodAndAllow(Map<String, Integer> map) {
        return goodCriticMapper.selectGoodAndAllow(map);
    }
}
