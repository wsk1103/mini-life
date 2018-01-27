package com.wsk.movie.task.runnable;

import java.util.concurrent.LinkedTransferQueue;

/**
 * @DESCRIPTION :队列，用来存储任务,单例
 * ArrayBlockingQueue ：一个由数组结构组成的有界阻塞队列。
 * LinkedBlockingQueue ：一个由链表结构组成的有界阻塞队列。
 * PriorityBlockingQueue ：一个支持优先级排序的无界阻塞队列。
 * DelayQueue：一个使用优先级队列实现的无界阻塞队列。
 * SynchronousQueue：一个不存储元素的阻塞队列。
 * LinkedTransferQueue：一个由链表结构组成的无界阻塞队列。
 * LinkedBlockingDeque：一个由链表结构组成的双向阻塞队列。
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/24  20:53
 */
public class MyQueue {
    //使用无界限阻塞队列
    private LinkedTransferQueue<MyRunnable> queue;

    private MyQueue() {
        queue = new LinkedTransferQueue<>();
    }

    private static class NestClass {
        private static final MyQueue QUEUE = new MyQueue();
    }

    public static MyQueue getInstance() {
        return NestClass.QUEUE;
    }

    public void offer(MyRunnable runnable) {
        queue.offer(runnable);
    }

    public MyRunnable take() throws InterruptedException {
        //阻塞获取
        return queue.take();
    }

    public boolean hasNext() {
        return queue.iterator().hasNext();
    }

}
