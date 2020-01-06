package com.wsk.life.service;

import com.wsk.life.pojo.MovieName;

import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/6/10.
 */
public interface MovieNameService {
    int deleteByPrimaryKey(Integer id);

    int insert(MovieName record);

    int insertSelective(MovieName record);

    MovieName selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MovieName record);

    int updateByPrimaryKey(MovieName record);

    List<MovieName> getName(Map map);
}
