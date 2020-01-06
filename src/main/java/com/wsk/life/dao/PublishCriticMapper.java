package com.wsk.life.dao;

import com.wsk.life.pojo.PublishCritic;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Mapper
@Repository
public interface PublishCriticMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(PublishCritic record);

    int insertSelective(PublishCritic record);

    PublishCritic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(PublishCritic record);

    int updateByPrimaryKey(PublishCritic record);

    List<PublishCritic> getAllForeach(Map<String, Object> map);

    List<PublishCritic> getPublishCriticByUid(Map<String, Integer> map);

    List<PublishCritic> getHotCritic(int start);

    List<PublishCritic> selectByTitle(Map map);

    @Select("select count(id) from publishcritic where uid=#{uid} and allow=1")
    int getUserCounts(int uid);

    @Select("select * from publishcritic where uid=#{uid} and id=#{id} and allow=1 limit 1")
    PublishCritic selectByIdAndUid(Map<String, Integer> map);

    @Select("select * from publishcritic where uid=#{uid} and id=#{id} limit 1")
    PublishCritic selectByIdAndAllow(Map<String, Integer> map);


}