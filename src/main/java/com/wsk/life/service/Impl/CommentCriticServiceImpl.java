package com.wsk.life.service.Impl;

import com.wsk.life.dao.CommentCriticMapper;
import com.wsk.life.pojo.CommentCritic;
import com.wsk.life.service.CommentCriticService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/5/18.
 */
@Service
public class CommentCriticServiceImpl implements CommentCriticService {
    @Resource
    private CommentCriticMapper commentCriticMapper;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(CommentCritic record) {
        return commentCriticMapper.insert(record);
    }

    @Override
    public int insertSelective(CommentCritic record) {
        return commentCriticMapper.insertSelective(record);
    }

    @Override
    public CommentCritic selectByPrimaryKey(Integer id) {
        return commentCriticMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(CommentCritic record) {
        return commentCriticMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(CommentCritic record) {
        return commentCriticMapper.updateByPrimaryKey(record);
    }

    @Override
    public int getCounts(int pid) {
        return commentCriticMapper.getCounts(pid);
    }

    @Override
    public List<CommentCritic> getCommentByPid(Map<String, Integer> map) {
        return commentCriticMapper.getCommentByPid(map);
    }

    @Override
    public int getUserCounts(int uid) {
        return commentCriticMapper.getUserCounts(uid);
    }

    @Override
    public List<CommentCritic> selectByUid(Map<String, Integer> map) {
        return commentCriticMapper.selectByUid(map);
    }

    @Override
    public CommentCritic selectByIdAndUid(Map<String, Integer> map) {
        return commentCriticMapper.selectByIdAndUid(map);
    }

    @Override
    public CommentCritic selectByIdAndAllow(Map<String, Integer> map) {
        return commentCriticMapper.selectByIdAndAllow(map);
    }
}
