package com.wsk.life.dao;

import com.wsk.life.pojo.AdminAction;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface    AdminActionMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AdminAction record);

    int insertSelective(AdminAction record);

    AdminAction selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AdminAction record);

    int updateByPrimaryKey(AdminAction record);
}