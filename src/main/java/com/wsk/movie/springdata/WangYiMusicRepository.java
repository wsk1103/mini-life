package com.wsk.movie.springdata;

import com.wsk.movie.springdata.entity.WangyimusicEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午8:56
 * @description: JAVA8
 */
public interface WangYiMusicRepository extends JpaRepository<WangyimusicEntity, Long> {
    @Query(value = "select * from wangyimusic where songid = ? limit 1 ", nativeQuery = true)
    WangyimusicEntity getBySongid(int id);

    @Query(value = "select * from wangyimusic where name like ? limit 10", nativeQuery = true)
    List<WangyimusicEntity> findByNameStartsWith(String name);

    @Query("update WangyimusicEntity w set w.url = :url where w.songid = :songid")
    @Modifying
    @Transactional
    Integer update(@Param("songid") int id, @Param("url") String url);
}
