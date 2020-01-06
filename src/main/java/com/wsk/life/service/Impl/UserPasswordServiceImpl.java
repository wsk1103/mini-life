package com.wsk.life.service.Impl;

import com.wsk.life.dao.UserPasswordMapper;
import com.wsk.life.pojo.UserPassword;
import com.wsk.life.service.UserPasswordService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * Created by Maibenben on 2017/4/27.
 */
@Service("userPasswordService")
public class UserPasswordServiceImpl implements UserPasswordService{
    @Resource
    UserPasswordMapper userPasswordMapper;
    @Override
    public UserPassword selectByPrimaryKey(int id) {
        return this.userPasswordMapper.selectByPrimaryKey(id);
    }

    @Override
    public UserPassword getPassword(int id) {
        return this.userPasswordMapper.getPassword(id);
    }

    @Override
    public int updatePassword(UserPassword userPassword) {
        return this.userPasswordMapper.updateByPrimaryKeySelective(userPassword);
    }

    @Override
    public int insertUser(UserPassword userPassword) {
        return this.userPasswordMapper.insertSelective(userPassword);
    }
}
