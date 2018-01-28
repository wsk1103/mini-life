package com.wsk.movie.task;

import com.wsk.movie.task.entity.MytaskEntity;
import com.wsk.movie.task.entity.MytaskerrorEntity;
import com.wsk.movie.task.runnable.MyQueue;
import com.wsk.movie.task.runnable.MyQueueBean;
import com.wsk.movie.task.runnable.MyRunnable;
import com.wsk.movie.task.service.MyErrorTaskRepository;
import com.wsk.movie.task.service.MyTaskRepository;
import com.wsk.movie.task.tool.TimeTransform;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * @DESCRIPTION :随着程序的启动而启动运行,运行定时任务，每5秒查询一次数据库
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/24  22:11
 */
@Component
public class MainTask implements CommandLineRunner {

    private static final ScheduledExecutorService SCHEDULED_EXECUTOR_SERVICE = Executors.newScheduledThreadPool(2);

    private final MyTaskRepository repository;
    private final MyErrorTaskRepository errorTaskRepository;

    @Autowired
    public MainTask(MyTaskRepository repository, MyErrorTaskRepository errorTaskRepository) {
        this.repository = repository;
        this.errorTaskRepository = errorTaskRepository;
    }

//    @Override
//    public void onApplicationEvent(ContextRefreshedEvent context) {
//
//    }

    private void go() {

    }

    @Override
    public void run(String... strings) throws Exception {
//         = context.getApplicationContext().getBean(MyTaskRepository.class);
//        MyErrorTaskRepository errorTaskRepository = context.getApplicationContext().getBean(MyErrorTaskRepository.class);
        SCHEDULED_EXECUTOR_SERVICE.scheduleAtFixedRate(() -> {
            List<MytaskEntity> entities = repository.starts();
            System.out.println("查询数据库:" + TimeTransform.fullDay.format(new Date()) + ",size:" + entities.size());
//            List<MytaskEntity> entities = repository.starts(TimeTransform.fullDay.format(new Date()));
            for (MytaskEntity e : entities) {
                Timestamp now = new Timestamp(new Date().getTime());
                MyRunnable runnable;
                try {
                    runnable = (MyRunnable) Class.forName(e.getClassname()).newInstance();
//                    runnable.setStart(e.getStarttime());
//                    runnable.setNext(e.getNexttime());
//                    Class c = Class.forName(e.getClassname());
//                    Constructor<MyRunnable> constructor = c.getConstructor();
//                    if (!(constructor.newInstance() instanceof MyRunnable)){
//                        //如果不是runnable，关闭任务
//                        repository.updateStatus(e.getId(), 0);
//                        MytaskerrorEntity entity = new MytaskerrorEntity();
//                        entity.setClassname(e.getClassname());
//                        entity.setMsg("不是MyRunnable类型，无法运行!");
//                        entity.setRtime(now);
//                        entity.setTaskname(e.getTaskname());
////                        errorTaskRepository.save(entity);
//                        MyQueue.getInstance().offer(new ErrorTaskRunnable(entity).setStart(e.getStarttime()).setNext(e.getNexttime()));
//                        continue;
//                    }
//                    runnable = (MyRunnable) constructor.newInstance().setStart(e.getStarttime()).setNext(e.getNexttime());
//                    Date start = e.getStarttime();
//                    Date next = e.getNexttime();
                    MyQueue.getInstance().offer(new MyQueueBean().setEntity(e).setRunnable(runnable));
//                    MyTask.getInstance().execute(runnable);
                } catch (ClassNotFoundException | InstantiationException | IllegalAccessException ex) {
                    ex.printStackTrace();
                    MytaskerrorEntity entity = new MytaskerrorEntity();
                    entity.setClassname(e.getClassname());
                    entity.setMsg(ex.getMessage());
                    entity.setRtime(now);
                    entity.setTaskname(e.getTaskname());
                    errorTaskRepository.save(entity);
//                    MyQueue.getInstance().offer(new ErrorTaskRunnable(entity).setStart(e.getStarttime()).setNext(e.getNexttime()));
//                    errorTaskRepository.save(entity);
//                    MyTask.getInstance().execute(new ErrorTaskRunnable(bean));
                }
            }
        }, 0, 5, TimeUnit.SECONDS);
        Thread.sleep(1);
        SCHEDULED_EXECUTOR_SERVICE.execute(MyTask.getInstance());
    }
}
