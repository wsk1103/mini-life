package com.wsk.life.dao;

import com.wsk.life.pojo.CommentCritic;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Mapper
@Repository
public interface CommentCriticMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(CommentCritic record);

    int insertSelective(CommentCritic record);

    CommentCritic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CommentCritic record);

    int updateByPrimaryKeyWithBLOBs(CommentCritic record);

    int updateByPrimaryKey(CommentCritic record);

    @Select("select count(id) from commentcritic where pid=#{pid}  and allow=1")
    int getCounts(int pid);

    List<CommentCritic> getCommentByPid(Map<String, Integer> map);

    @Select("select count(id) from commentcritic where uid=#{uid}  and allow=1")
    int getUserCounts(int uid);

    List<CommentCritic> selectByUid(Map<String, Integer> map);

    @Select("select * from commentcritic where uid=#{uid} and id=#{id} and allow=1 limit 1")
    CommentCritic selectByIdAndUid(Map<String, Integer> map);

    @Select("select * from commentcritic where uid=#{uid} and id=#{id} limit 1")
    CommentCritic selectByIdAndAllow(Map<String, Integer> map);
}