package com.wsk.life.service;

import com.wsk.life.pojo.UserPassword;

/**
 * Created by Maibenben on 2017/4/27.
 */
public interface UserPasswordService {
    UserPassword selectByPrimaryKey(int id);

    UserPassword getPassword(int id);

    int updatePassword(UserPassword userPassword);

    int insertUser(UserPassword userPassword);
}
