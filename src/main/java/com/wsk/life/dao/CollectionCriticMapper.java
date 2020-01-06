package com.wsk.life.dao;

import com.wsk.life.pojo.CollectionCritic;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Mapper
@Repository
public interface CollectionCriticMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(CollectionCritic record);

    int insertSelective(CollectionCritic record);

    CollectionCritic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CollectionCritic record);

    int updateByPrimaryKey(CollectionCritic record);

    @Select("select count(id) from collectioncritic where pid=#{pid}  and allow=1")
    int getCounts(int pid);

    @Select("select count(id) from collectioncritic where uid=#{uid}  and allow=1")
    int getUserCounts(int uid);

    List<CollectionCritic> selectByUid(Map<String, Integer> map);

    @Select("select * from collectioncritic where uid=#{uid} and pid=#{pid} and allow=1 limit 1")
    CollectionCritic selectCollection(Map<String, Integer> map);

    @Select("select * from collectioncritic where uid=#{uid} and pid=#{pid} limit 1")
    CollectionCritic selectCollectionAndAllow(Map<String, Integer> map);
}