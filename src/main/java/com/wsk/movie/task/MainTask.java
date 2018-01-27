package com.wsk.movie.task;

import com.wsk.movie.task.entity.MytaskEntity;
import com.wsk.movie.task.entity.MytaskerrorEntity;
import com.wsk.movie.task.runnable.MyRunnable;
import com.wsk.movie.task.service.ErrorTaskRepository;
import com.wsk.movie.task.service.MyTaskRepository;
import com.wsk.movie.task.tool.TimeTransform;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
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
public class MainTask implements ApplicationListener<ContextRefreshedEvent> {

    private static final ScheduledExecutorService SCHEDULED_EXECUTOR_SERVICE = Executors.newScheduledThreadPool(1);

    @Override
    public void onApplicationEvent(ContextRefreshedEvent context) {
        MyTaskRepository repository = context.getApplicationContext().getBean(MyTaskRepository.class);
        ErrorTaskRepository errorTaskRepository = context.getApplicationContext().getBean(ErrorTaskRepository.class);
        SCHEDULED_EXECUTOR_SERVICE.scheduleAtFixedRate(() -> {
            List<MytaskEntity> entities = repository.starts(TimeTransform.fullDay.format(new Date()));
            for (MytaskEntity e : entities) {
                MyRunnable runnable;
                try {
                    Class c = Class.forName(e.getClassname());
                    Constructor constructor = c.getConstructor();
                    if (!(constructor.newInstance() instanceof MyRunnable)){
                        //如果不是runnable，关闭任务
                        repository.updateStatus(e.getId(), 0);
                        MytaskerrorEntity entity = new MytaskerrorEntity();
                        entity.setClassname(e.getClassname());
                        entity.setMsg("不是MyRunnable类型，无法运行!");
                        entity.setRtime(new Date());
                        entity.setTaskname(e.getTaskname());
                        errorTaskRepository.save(entity);
                        continue;
                    }
                    runnable = (MyRunnable) constructor.newInstance();
                    Date start = e.getStarttime();
                    Date next = e.getNexttime();
                    MyTask.getInstance().execute(runnable, start, next);
                } catch (ClassNotFoundException | InstantiationException | NoSuchMethodException | InvocationTargetException | IllegalAccessException ex) {
                    ex.printStackTrace();
                    MytaskerrorEntity entity = new MytaskerrorEntity();
                    entity.setClassname(e.getClassname());
                    entity.setMsg(ex.getMessage());
                    entity.setRtime(new Date());
                    entity.setTaskname(e.getTaskname());
                    errorTaskRepository.save(entity);
//                    MyTask.getInstance().execute(new ErrorTaskRunnable(bean));
                }
            }
        }, 0, 5, TimeUnit.SECONDS);
    }

    private void go() {

    }
}
