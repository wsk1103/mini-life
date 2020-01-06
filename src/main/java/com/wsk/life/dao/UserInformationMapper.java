package com.wsk.life.dao;

import com.wsk.life.pojo.UserInformation;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Mapper
@Repository
public interface UserInformationMapper {
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