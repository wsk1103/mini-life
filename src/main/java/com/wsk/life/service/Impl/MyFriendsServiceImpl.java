package com.wsk.life.service.Impl;

import com.wsk.life.dao.MyFriendsMapper;
import com.wsk.life.pojo.MyFriends;
import com.wsk.life.service.MyFriendsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/3.
 */
@Service
public class MyFriendsServiceImpl implements MyFriendsService {
    @Resource
    private MyFriendsMapper myFriendsMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(MyFriends record) {
        return myFriendsMapper.insert(record);
    }

    @Override
    public int insertSelective(MyFriends record) {
        return myFriendsMapper.insertSelective(record);
    }

    @Override
    public MyFriends selectByPrimaryKey(Integer id) {
        return myFriendsMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(MyFriends record) {
        return myFriendsMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(MyFriends record) {
        return myFriendsMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<MyFriends> getFid(int id) {
        return this.myFriendsMapper.getFid(id);
    }

    @Override
    public MyFriends isFriends(Map<String, Integer> map) {
        return myFriendsMapper.isFriends(map);
    }

    @Override
    public MyFriends getFriends(Map<String, Integer> map) {
        return myFriendsMapper.getFriends(map);
    }
}
