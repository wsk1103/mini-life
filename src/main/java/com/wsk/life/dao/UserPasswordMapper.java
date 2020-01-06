package com.wsk.life.dao;

import com.wsk.life.pojo.UserPassword;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserPasswordMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserPassword record);

    int insertSelective(UserPassword record);

    UserPassword selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserPassword record);

    int updateByPrimaryKey(UserPassword record);

    UserPassword getPassword(int id);
}