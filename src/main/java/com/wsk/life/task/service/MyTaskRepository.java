package com.wsk.life.task.service;

import com.wsk.life.task.entity.MytaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * @DESCRIPTION :任务表接口
 * @AUTHOR : sk
 * @TIME : 2018/1/23  23:02
 */
public interface MyTaskRepository extends JpaRepository<MytaskEntity, Integer> {
    MytaskEntity findByTaskname(String taskname);

    //更新
    @Transactional
    @Query(value = "update MytaskEntity m set m.starttime = :start,m.nexttime = :next where m.taskname = :name")
    @Modifying
    void updateTime(@Param("name") String name, @Param("start") Date start, @Param("next") Date next);

    //更新
    @Transactional
    @Query(value = "update MytaskEntity m set m.starttime = :start,m.nexttime = :next where m.taskname = :name")
    @Modifying
    void updateTime(@Param("name") String name, @Param("start") Timestamp start, @Param("next") Timestamp next);

    //根据任务名关闭
    @Transactional
    @Query(value = "update MytaskEntity m set m.status = :status where m.taskname = :name")
    @Modifying
    void updateStatus(@Param("name") String name, @Param("status") int status);

    //根据id关闭
    @Transactional
    @Query(value = "update MytaskEntity m set m.status = :status where m.taskname = :id")
    @Modifying
    void updateStatus(@Param("id") int id, @Param("status") int status);

    //待执行的任务
    @Query(value = "select m from MytaskEntity m where m.status = 1")
    List<MytaskEntity> starts();

}
