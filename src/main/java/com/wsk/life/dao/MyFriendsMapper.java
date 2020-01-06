package com.wsk.life.dao;

import com.wsk.life.pojo.MyFriends;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Mapper
@Repository
public interface MyFriendsMapper {
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