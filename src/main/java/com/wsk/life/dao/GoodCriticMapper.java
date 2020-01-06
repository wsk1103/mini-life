package com.wsk.life.dao;

import com.wsk.life.pojo.GoodCritic;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Mapper
@Repository
public interface GoodCriticMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(GoodCritic record);

    int insertSelective(GoodCritic record);

    GoodCritic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(GoodCritic record);

    int updateByPrimaryKey(GoodCritic record);

    @Select("select count(id) from goodcritic where pid=#{pid}  and allow=1")
    int getCounts(int pid);

    @Select("select count(id) from goodcritic where uid=#{uid}  and allow=1")
    int getUserCounts(int uid);

    List<GoodCritic> selectByUid(Map<String, Integer> map);

    @Select("select * from goodcritic where uid=#{uid} and pid=#{pid} and allow=1 limit 1")
    GoodCritic selectGood(Map<String, Integer> map);

    @Select("select * from goodcritic where uid=#{uid} and pid=#{pid} limit 1")
    GoodCritic selectGoodAndAllow(Map<String, Integer> map);
}