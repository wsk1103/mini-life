package com.wsk.movie.task.runnable;

import com.wsk.movie.task.entity.MytaskEntity;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @DESCRIPTION :存储任务和任务的属性
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/27  23:57
 */
@Accessors(chain = true)
@Data
public class MyQueueBean {
    private MyRunnable runnable;
    private MytaskEntity entity;
}
