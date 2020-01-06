package com.wsk.life.service;

import com.wsk.life.pojo.Message;

import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/6/12.
 */
public interface MessageService {
    int deleteByPrimaryKey(Integer id);

    int insert(Message record);

    int insertSelective(Message record);

    Message selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Message record);

    int updateByPrimaryKey(Message record);

    Message getMessageAndOnread(Map<String, Integer> map);

    List<Message> getMessage(Map<String, Integer> map);

    Message getMessageOne(int uid);
}
