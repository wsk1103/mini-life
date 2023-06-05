package com.wsk.life.task.runnable;

import com.wsk.life.music.HttpUnits;

import java.io.IOException;

/**
 * @DESCRIPTION :音乐定时器,云音乐飙升榜
 * @AUTHOR : sk
 * @TIME : 2018/1/23  22:20
 */
//@Component
public class MusicHottingTaskRunnable extends MyRunnable{

//    private final MytaskEntity entity;
//
//    private final MyTaskRepository repository;
//    private final MyTaskLogRepository logRepository;
//
//    @Autowired
//    public MusicHottingTaskRunnable(MytaskEntity entity, MyTaskRepository repository, MyTaskLogRepository logRepository) {
//        this.entity = entity;
//        this.repository = repository;
//        this.logRepository = logRepository;
//    }


    @Override
    public void run() {
//        Date now = new Date();
        try {
//            repository.updateTime(entity.getTaskname(), now, TimeTransform.fullDay.parse((now.getTime() + TimeTransform.getTime(entity.getExpression())) + ""));
            System.out.println("run hotting:" + HttpUnits.urlToString("http://localhost:8080/search/music/hot/2").text());
//            MytasklogEntity entity = new MytasklogEntity();
//            entity.setClassname(this.entity.getClassname());
//            entity.setRtime(new Timestamp(now.getTime()));
//            entity.setTaskname(this.entity.getTaskname());
//            logRepository.save(entity);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
