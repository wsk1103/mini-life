package com.wsk.life.springdata;

import com.wsk.life.springdata.entity.WangyilrcEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/5/1  17:49
 */
public interface WangYiLrcRepository extends JpaRepository<WangyilrcEntity, Integer> {
    @Query(value = "select * from wangyilrc where id = ? limit 1 ", nativeQuery = true)
    WangyilrcEntity getById(long id);
}
