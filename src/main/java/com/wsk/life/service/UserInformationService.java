package com.wsk.life.service;

import com.wsk.life.pojo.UserInformation;

import java.util.List;
import java.util.Map;

/**
 * Created by Maibenben on 2017/4/26.
 */
public interface UserInformationService {
    int deleteByPrimaryKey(Integer id);

    int insert(UserInformation record);

    int insertSelective(UserInformation record);

    UserInformation selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserInformation record);

    int updateByPrimaryKey(UserInformation record);

    UserInformation selectIdByPhone(String phone);

    List<UserInformation> getAllUsers();

    List<UserInformation> getAllForeach(List<Integer> list);

    List<UserInformation> selectByName(Map map);
}
