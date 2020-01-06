package com.wsk.life.service;

import com.wsk.life.pojo.CommentCritic;

import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/18.
 */
public interface CommentCriticService {
    int deleteByPrimaryKey(Integer id);

    int insert(CommentCritic record);

    int insertSelective(CommentCritic record);

    CommentCritic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CommentCritic record);

//    int updateByPrimaryKeyWithBLOBs(CommentCritic record);

    int updateByPrimaryKey(CommentCritic record);

    int getCounts(int pid);

    List<CommentCritic> getCommentByPid(Map<String, Integer> map);

    int getUserCounts(int uid);

    List<CommentCritic> selectByUid(Map<String, Integer> map);

    CommentCritic selectByIdAndUid(Map<String, Integer> map);

    CommentCritic selectByIdAndAllow(Map<String, Integer> map);
}
