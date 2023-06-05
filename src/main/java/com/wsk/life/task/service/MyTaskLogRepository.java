package com.wsk.life.task.service;

import com.wsk.life.task.entity.MytasklogEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @DESCRIPTION :平时日志记录
 * @AUTHOR : sk
 * @TIME : 2018/1/27  22:39
 */
public interface MyTaskLogRepository extends JpaRepository<MytasklogEntity, Integer> {
}
