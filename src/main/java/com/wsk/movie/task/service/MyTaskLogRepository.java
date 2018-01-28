package com.wsk.movie.task.service;

import com.wsk.movie.task.entity.MytasklogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/27  22:39
 */
public interface MyTaskLogRepository extends JpaRepository<MytasklogEntity, Integer> {
}
