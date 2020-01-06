package com.wsk.life.service.Impl;

import com.wsk.life.dao.MovieNameMapper;
import com.wsk.life.pojo.MovieName;
import com.wsk.life.service.MovieNameService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/6/10.
 */
@Service
public class MovieNameServiceImpl implements MovieNameService {
    @Resource
    private MovieNameMapper movieNameMapper;

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return 0;
    }

    @Override
    public int insert(MovieName record) {
        return movieNameMapper.insert(record);
    }

    @Override
    public int insertSelective(MovieName record) {
        return movieNameMapper.insertSelective(record);
    }

    @Override
    public MovieName selectByPrimaryKey(Integer id) {
        return movieNameMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(MovieName record) {
        return movieNameMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(MovieName record) {
        return movieNameMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<MovieName> getName(Map map) {
        return movieNameMapper.getName(map);
    }
}
