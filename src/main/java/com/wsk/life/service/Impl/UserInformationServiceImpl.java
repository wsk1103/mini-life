package com.wsk.life.service.Impl;

import com.wsk.life.dao.UserInformationMapper;
import com.wsk.life.pojo.UserInformation;
import com.wsk.life.service.UserInformationService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by Maibenben on 2017/4/26.
 */
@Service("userInformationService")
public class UserInformationServiceImpl implements UserInformationService {
    @Resource
    private UserInformationMapper userInformationMapper;
//    @Override
//    public UserInformation getUserInformationById(int id) {
//        return this.userInformationMapper.selectByPrimaryKey(id);
//    }

//    @Override
//    public UserInformation getUserInformationIdByPhone(String phone) {
//        return this.userInformationMapper.selectIdByPhone(phone);
//    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return userInformationMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(UserInformation record) {
        return userInformationMapper.insert(record);
    }

    @Override
    public int insertSelective(UserInformation record) {
        return userInformationMapper.insertSelective(record);
    }

    @Override
    public UserInformation selectByPrimaryKey(Integer id) {
        return userInformationMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(UserInformation record) {
        return userInformationMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(UserInformation record) {
        return userInformationMapper.updateByPrimaryKey(record);
    }

    @Override
    public UserInformation selectIdByPhone(String phone) {
        return userInformationMapper.selectIdByPhone(phone);
    }

    @Override
    public List<UserInformation> getAllUsers() {
        return this.userInformationMapper.getAllUsers();
    }

//    @Override
//    public int insertUser(UserInformation userInformation) {
//        return this.userInformationMapper.insertSelective(userInformation);
//    }

    @Override
    public List<UserInformation> getAllForeach(List<Integer> list) {
        return this.userInformationMapper.getAllForeach(list);
    }

    @Override
    public List<UserInformation> selectByName(Map map) {
        return userInformationMapper.selectByName(map);
    }


}
