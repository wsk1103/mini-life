package com.wsk.life.task.runnable;

import com.wsk.life.music.HttpUnits;

import java.io.IOException;

/**
 * @DESCRIPTION :音乐定时器,云音乐新歌榜
 * @AUTHOR : sk
 * @TIME : 2018/1/27  13:58
 */
//@Component
public class MusicNewTaskRunnable extends MyRunnable {

//    private final MytaskEntity entity;
//
//    private final MyTaskRepository repository;
//    private final MyTaskLogRepository logRepository;

//    @Autowired
//    public MusicNewTaskRunnable(MyTaskRepository repository, MyTaskLogRepository logRepository, MytaskEntity entity) {
//        this.repository = repository;
//        this.logRepository = logRepository;
//        this.entity = entity;
//    }


    @Override
    public void run() {
//        Date now = new Date();
        try {
//            repository.updateTime(entity.getTaskname(), now, TimeTransform.fullDay.parse((now.getTime() + TimeTransform.getTime(entity.getExpression())) + ""));
            System.out.println("run new:" + HttpUnits.urlToString("http://localhost:8080/search/music/hot/3").text());
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
