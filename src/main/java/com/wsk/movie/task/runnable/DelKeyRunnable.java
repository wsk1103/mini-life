package com.wsk.movie.task.runnable;

import com.wsk.movie.task.entity.MytaskEntity;
import com.wsk.movie.task.queue.MyQueue;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/29  21:16
 */
public class DelKeyRunnable extends MyRunnable {

    private MytaskEntity entity;

    public DelKeyRunnable(MytaskEntity entity) {
        this.entity = entity;
    }

    @Override
    public void run() {
        System.out.println("del:" + entity.getTaskname());
        MyQueue.getInstance().removeKey(entity);
    }
}