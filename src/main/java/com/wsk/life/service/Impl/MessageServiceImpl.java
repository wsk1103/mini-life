package com.wsk.life.service.Impl;

import com.wsk.life.dao.MessageMapper;
import com.wsk.life.pojo.Message;
import com.wsk.life.service.MessageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/6/12.
 */
@Service
public class MessageServiceImpl implements MessageService {
    @Resource
    private MessageMapper messageMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(Message record) {
        return messageMapper.insert(record);
    }

    @Override
    public int insertSelective(Message record) {
        return messageMapper.insertSelective(record);
    }

    @Override
    public Message selectByPrimaryKey(Integer id) {
        return messageMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(Message record) {
        return messageMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(Message record) {
        return messageMapper.updateByPrimaryKey(record);
    }

    @Override
    public Message getMessageAndOnread(Map<String, Integer> map) {
        return messageMapper.getMessageAndOnread(map);
    }

    @Override
    public List<Message> getMessage(Map<String, Integer> map) {
        return messageMapper.getMessage(map);
    }

    @Override
    public Message getMessageOne(int uid) {
        return messageMapper.getMessageOne(uid);
    }
}
