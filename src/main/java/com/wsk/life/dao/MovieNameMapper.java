package com.wsk.life.dao;

import com.wsk.life.pojo.MovieName;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
@Mapper
@Repository
public interface MovieNameMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(MovieName record);

    int insertSelective(MovieName record);

    MovieName selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MovieName record);

    int updateByPrimaryKey(MovieName record);

    List<MovieName> getName(Map map);
}