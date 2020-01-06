package com.wsk.life.service.Impl;

import com.wsk.life.dao.PublishCriticMapper;
import com.wsk.life.pojo.PublishCritic;
import com.wsk.life.service.PublishCriticService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/1.
 */
@Service("publishCriticService")
public class PublishCriticServiceImpl implements PublishCriticService {

    @Resource
    private PublishCriticMapper publishCriticMapper;

    @Override
    public int insertObject(PublishCritic o) {
        return this.publishCriticMapper.insertSelective( o);
    }

    @Override
    public int updateObject(PublishCritic o) {
        return this.publishCriticMapper.updateByPrimaryKey( o);
    }

    @Override
    public PublishCritic getObjectById(int id) {
        return this.publishCriticMapper.selectByPrimaryKey(id);
    }

    @Override
    public int deleteObject(PublishCritic o) {
        return this.publishCriticMapper.updateByPrimaryKeySelective( o);
    }

    @Override
    public List<PublishCritic> getAllForeach(Map<String,Object> map) {
        return this.publishCriticMapper.getAllForeach(map);
    }

    @Override
    public List<PublishCritic> getPublishCriticByUid(Map<String, Integer> map) {
        return publishCriticMapper.getPublishCriticByUid(map);
    }

    @Override
    public List<PublishCritic> getHotCritic(int start) {
        return publishCriticMapper.getHotCritic(start);
    }

    @Override
    public List<PublishCritic> selectByTitle(Map map) {
        return publishCriticMapper.selectByTitle(map);
    }

    @Override
    public int getUserCounts(int uid) {
        return publishCriticMapper.getUserCounts(uid);
    }

    @Override
    public PublishCritic selectByIdAndUid(Map<String, Integer> map) {
        return publishCriticMapper.selectByIdAndUid(map);
    }

    @Override
    public PublishCritic selectByIdAndAllow(Map<String, Integer> map) {
        return publishCriticMapper.selectByIdAndAllow(map);
    }


}
