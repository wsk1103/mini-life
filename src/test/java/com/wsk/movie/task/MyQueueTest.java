//package com.wsk.movie.task;
//
//import com.wsk.movie.task.queue.MyQueue;
//import com.wsk.movie.task.runnable.MyRunnable;
//
//import java.util.concurrent.ExecutorService;
//import java.util.concurrent.Executors;
//
///**
// * @DESCRIPTION :
// * @AUTHOR : WuShukai1103
// * @TIME : 2018/1/27  16:02
// */
//public class MyQueueTest {
//    public static void main(String[] args) throws InterruptedException {
//        MyQueue queue = MyQueue.getInstance();
//        ExecutorService service = Executors.newFixedThreadPool(4);
//        MyRunnable myRunnable = new MyRunnable("") {
//            @Override
//            public void run() {
//
//            }
//        };
//        service.execute(() -> {
//            queue.offer(new MyRunnable(new String("44")) {
//                @Override
//                public void run() {
//
//                }
//            });
//        });
//        service.execute(() -> {
//            queue.offer(new MyRunnable(new String("44")) {
//                @Override
//                public void run() {
//
//                }
//            });
//        });
//        service.execute(() -> {
//            queue.offer(new MyRunnable(new String("445")) {
//                @Override
//                public void run() {
//
//                }
//            });
//        });
//        service.execute(() -> {
//            queue.offer(myRunnable);
//        });
//        service.execute(() -> {
//            queue.offer(myRunnable);
//        });
//        service.execute(() -> {
//            queue.offer(myRunnable);
//        });
//        Thread.sleep(5000);
//        System.out.println(queue.size());
//    }
//}
