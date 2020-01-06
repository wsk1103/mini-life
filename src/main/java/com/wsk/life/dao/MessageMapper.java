package com.wsk.life.dao;

import com.wsk.life.pojo.Message;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Mapper
@Repository
public interface MessageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Message record);

    int insertSelective(Message record);

    Message selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Message record);

    int updateByPrimaryKey(Message record);

    Message getMessageAndOnread(Map<String, Integer> map);

    List<Message> getMessage(Map<String, Integer> map);

    @Select("select * from message where fid=#{uid} and onread=0 limit 1")
    Message getMessageOne(int uid);
}