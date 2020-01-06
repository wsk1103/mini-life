package com.wsk.life.springdata;

import com.wsk.life.springdata.entity.WangyisingerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午9:52
 * @description: JAVA8
 */
public interface WangYiSingerRepository extends JpaRepository<WangyisingerEntity, Long> {
    @Query(value = "select * from wangyisinger where singerid = ? limit 1 ", nativeQuery = true)
    WangyisingerEntity getBySingerid(int id);
}

