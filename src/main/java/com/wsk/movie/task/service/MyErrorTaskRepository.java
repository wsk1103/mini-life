package com.wsk.movie.task.service;

import com.wsk.movie.task.entity.MytaskerrorEntity;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/24  22:43
 */
public interface MyErrorTaskRepository extends JpaRepository<MytaskerrorEntity, Integer> {
}
