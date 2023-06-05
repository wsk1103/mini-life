package com.wsk.life.task.service;

import com.wsk.life.task.entity.MytaskerrorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @DESCRIPTION :错误任务记录
 * @AUTHOR : sk
 * @TIME : 2018/1/24  22:43
 */
public interface MyErrorTaskRepository extends JpaRepository<MytaskerrorEntity, Integer> {
}
