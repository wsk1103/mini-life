package com.wsk.life.task;

import com.wsk.life.task.entity.MytaskEntity;
import com.wsk.life.task.entity.MytaskerrorEntity;
import com.wsk.life.task.entity.MytasklogEntity;
import com.wsk.life.task.queue.MyQueue;
import com.wsk.life.task.queue.MyQueueBean;
import com.wsk.life.task.runnable.DelKeyRunnable;
import com.wsk.life.task.runnable.MyRunnable;
import com.wsk.life.task.service.MyErrorTaskRepository;
import com.wsk.life.task.service.MyTaskLogRepository;
import com.wsk.life.task.service.MyTaskRepository;
import com.wsk.life.task.tool.TimeTransform;
import com.wsk.life.tool.SpringContextUtil;

import java.sql.Timestamp;
import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * @DESCRIPTION :自定义定时器-单例
 * @AUTHOR : sk
 * @TIME : 2018/1/23  22:22
 */
public class MyTask implements Runnable{
    /**
     * 使用定时线程池
     * 根据CPU进行任务调度
     */
    private static ScheduledExecutorService service = Executors.newScheduledThreadPool(Runtime.getRuntime().availableProcessors());
    private static MyErrorTaskRepository errorTaskRepository = (MyErrorTaskRepository) SpringContextUtil.getBean(MyErrorTaskRepository.class);
    private static MyTaskLogRepository logRepository = (MyTaskLogRepository) SpringContextUtil.getBean(MyTaskLogRepository.class);
    private static MyTaskRepository repository = (MyTaskRepository) SpringContextUtil.getBean(MyTaskRepository.class);

    private MyTask() {
    }

    @Override
    public void run() {
        execute();
    }

    private static class NestClass {
        private static final MyTask MY_TASK = new MyTask();
    }

    public static MyTask getInstance() {
        return NestClass.MY_TASK;
    }

    /**
     *
     * @param runnable
     * @param startTime
     * @param endTime
     */
    public void execute(MyRunnable runnable, String startTime, String endTime) {
        long start = TimeTransform.getTime(startTime);
        long end = TimeTransform.getTime(endTime);
        service.scheduleAtFixedRate(runnable, start, end, TimeUnit.SECONDS);
    }

    public void execute(MyRunnable runnable, Date startTime, Date endTime) {
        long start = TimeTransform.getTime(startTime);
        long end = TimeTransform.getTime(endTime);
        service.scheduleAtFixedRate(runnable, start, end, TimeUnit.SECONDS);
    }

//    public void execute(MyRunnable runnable) {
//        service.scheduleAtFixedRate(runnable, start, end, TimeUnit.SECONDS);
//    }

    /**
     * 默认现在开始运行
     *
     * @param runnable
     * @param endTime
     */
    public void execute(Runnable runnable, String endTime) {
        long end = TimeTransform.getTime(endTime);
        service.scheduleAtFixedRate(runnable, 0, end, TimeUnit.SECONDS);
    }

    public void execute(MyQueue queue) {
        MyQueueBean bean;
        Date now = new Date();
        try {
            bean = queue.take();
//            System.out.println("run:" + bean.getEntity().getTaskname());
        } catch (InterruptedException e) {
            e.printStackTrace();
            MytaskerrorEntity entity = new MytaskerrorEntity();
            entity.setTaskname("");
            entity.setMsg("队列获取失败");
            entity.setRtime(new Timestamp(now.getTime()));
            entity.setClassname("");
            errorTaskRepository.save(entity);
            return;
        }
        MyRunnable runnable = bean.getRunnable();
        MytaskEntity entity = bean.getEntity();
        //更新数据库
        long next = TimeTransform.getTime(entity.getExpression());
        repository.updateTime(entity.getTaskname(), new Timestamp(now.getTime()), new Timestamp(now.getTime() + next * 1000));
        //开始定时任务
        service.scheduleAtFixedRate(runnable, TimeTransform.getTime(entity.getStarttime()), next, TimeUnit.SECONDS);
        //删除队列中的key
//        System.out.println(next + "s,下次运行");
        service.schedule(new DelKeyRunnable(entity), next, TimeUnit.SECONDS);
        //日志
        MytasklogEntity log = new MytasklogEntity();
        log.setTaskname(entity.getTaskname());
        log.setClassname(entity.getClassname());
        log.setRtime(new Timestamp(now.getTime()));
        logRepository.save(log);
        System.out.println("队列剩余：" + MyQueue.getInstance().size());
//        //运行结束后移除set中的key
//        MyQueue.getInstance().removeKey(bean);
    }

    //开始运行定时任务
    public void execute() {
        while (true) {
            if (MyQueue.getInstance().size() > 0) {
                System.out.println("开始定时任务,size:" + MyQueue.getInstance().size());
                execute(MyQueue.getInstance());
            } else {
                try {
                    Thread.sleep(3000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }

        }
    }

    //关闭线程
    public void shutdown() {
        service.shutdown();
    }

}
