package com.wsk.life.service;

import com.wsk.life.pojo.MyFriends;

import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/3.
 */
public interface MyFriendsService {
    int deleteByPrimaryKey(Integer id);

    int insert(MyFriends record);

    int insertSelective(MyFriends record);

    MyFriends selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MyFriends record);

    int updateByPrimaryKey(MyFriends record);

    List<MyFriends> getFid(int id);

    MyFriends isFriends(Map<String, Integer> map);

    MyFriends getFriends(Map<String, Integer> map);
}
