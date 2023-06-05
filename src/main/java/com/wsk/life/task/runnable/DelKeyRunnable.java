package com.wsk.life.task.runnable;

import com.wsk.life.task.entity.MytaskEntity;
import com.wsk.life.task.queue.MyQueue;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
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