package com.wsk.life.springdata;

import com.wsk.life.springdata.entity.WangyialbumEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午9:53
 * @description: JAVA8
 */
public interface WangYiAlbumRepository extends JpaRepository<WangyialbumEntity, Long> {
    @Query(value = "select * from wangyialbum where albumid = ? limit 1 ", nativeQuery = true)
    WangyialbumEntity getByAlbumid(int id);
}
