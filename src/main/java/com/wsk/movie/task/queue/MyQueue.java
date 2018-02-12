package com.wsk.movie.task.queue;

import lombok.EqualsAndHashCode;

import java.util.ArrayList;
import java.util.List;
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
@EqualsAndHashCode
public class MyQueue {
    //使用无界限阻塞队列
    private LinkedTransferQueue<MyQueueBean> queue;
    //存放数据库唯一id,根据id判断任务是否重复
    private static final List<Integer> LIST = new ArrayList<>();

    private MyQueue() {
        queue = new LinkedTransferQueue<>();
    }

    private static class NestClass {
        private static final MyQueue QUEUE = new MyQueue();
    }

    public static MyQueue getInstance() {
        return NestClass.QUEUE;
    }

    public void offer(MyQueueBean bean) {
        synchronized (LIST) {
            if (LIST.contains(bean.getEntity().getId())) {
//                System.out.println("重复" + bean.getRunnable().getClass().getName());
                return;
            }
        }
        LIST.add(bean.getEntity().getId());
        queue.offer(bean);
//        LIST.forEach(System.out::println);
    }

    public MyQueueBean take() throws InterruptedException {
        //阻塞获取
        return queue.take();
    }

    public void removeKey(MyQueueBean bean){
        LIST.remove(bean.getEntity().getId());
    }

    public void removeKey(int id){
        LIST.remove(id);
    }

    public boolean hasNext() {
        return queue.iterator().hasNext();
    }

    public int size(){
        return queue.size();
    }

}
