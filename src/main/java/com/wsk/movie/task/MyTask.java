package com.wsk.movie.task;

import com.wsk.movie.task.runnable.MyRunnable;
import com.wsk.movie.task.tool.TimeTransform;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * @DESCRIPTION :自定义定时器-单例
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/23  22:22
 */
@Component
public class MyTask {

    /**
     * 使用定时线程池
     * 根据CPU进行任务调度
     */
    private static ScheduledExecutorService service = Executors.newScheduledThreadPool(Runtime.getRuntime().availableProcessors());

    private MyTask() {
    }

    private static class NestClass {
        private static final MyTask MY_TASK = new MyTask();
    }

    public static MyTask getInstance() {
        return NestClass.MY_TASK;
    }

    /**
     * 时间表达式
     * 1:00 00 00 00-中间以空格分开
     * :秒 分 时 日
     * 2:yyyy-MM-dd HH:mm:ss
     * 3:yyyy-MM-dd
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

    public void execute(MyRunnable runnable) {
//        Date start = runnable.getEntity().getStarttime();
//        Date next = runnable.getEntity().getNexttime();
//        Date now = new Date();
//        try {
//            repository.updateTime(runnable.getEntity().getTaskname(), now, fullDay.parse((now.getTime() + getTime(runnable.getEntity().getExpression())) + ""));
//        } catch (ParseException e) {
//            e.printStackTrace();
//        }
//        service.scheduleAtFixedRate(runnable, getTime(start), getTime(next), TimeUnit.SECONDS);

    }

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

//    private void saveOrUpdate(MyRunnable runnable) {
//        MytaskEntity bean = runnable.getEntity();
//        bean = repository.findByTaskname(bean.getTaskname());
//        if (Tool.getInstance().isNullOrEmpty(bean)) {
//            repository.save(bean);
//        } else {
////            repository.updateTime(runnable.getEntity().getTaskname(), runnable.getEntity().getStarttime(),runnable.getEntity().getNexttime());
//        }
//    }

    public void shutdown() {
        service.shutdown();
    }

}
