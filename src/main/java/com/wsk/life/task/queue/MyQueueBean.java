package com.wsk.life.task.queue;

import com.wsk.life.task.entity.MytaskEntity;
import com.wsk.life.task.runnable.MyRunnable;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @DESCRIPTION :存储任务和任务的属性
 * @AUTHOR : sk
 * @TIME : 2018/1/27  23:57
 */
@Accessors(chain = true)
@Data
public class MyQueueBean {
    private MyRunnable runnable;
    private MytaskEntity entity;
}
