package com.wsk.life.springdata;

import com.wsk.life.springdata.entity.WangyicontentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/5/1  18:13
 */
public interface WangYiContentRepository extends JpaRepository<WangyicontentEntity, Integer> {
    List<WangyicontentEntity> getAllBySongid(int songId);
}
