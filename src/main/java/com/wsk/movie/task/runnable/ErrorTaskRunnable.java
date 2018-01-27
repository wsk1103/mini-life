package com.wsk.movie.task.runnable;

import com.wsk.movie.task.entity.MytaskerrorEntity;
import com.wsk.movie.task.service.ErrorTaskRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * @DESCRIPTION :错误处理
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/24  22:41
 */
@Component
@Data
public class ErrorTaskRunnable extends MyRunnable {

    @Autowired
    private ErrorTaskRepository repository;

    private MytaskerrorEntity entity;

    public ErrorTaskRunnable(MytaskerrorEntity entity){
        super(entity);
        this.entity = entity;
    }

    @Override
    public void run() {
        repository.save(entity);
    }
}
