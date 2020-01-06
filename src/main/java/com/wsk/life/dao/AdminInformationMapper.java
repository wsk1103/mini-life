package com.wsk.life.dao;

import com.wsk.life.pojo.AdminInformation;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface AdminInformationMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AdminInformation record);

    int insertSelective(AdminInformation record);

    AdminInformation selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AdminInformation record);

    int updateByPrimaryKey(AdminInformation record);
}