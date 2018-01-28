package com.wsk.movie.task.runnable;

import com.wsk.movie.music.HttpUnits;

import java.io.IOException;

/**
 * @DESCRIPTION :音乐定时器,云音乐热歌榜
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/27  13:48
 */
//@Component
public class MusicHotTaskRunnable extends MyRunnable {
//    private final MytaskEntity entity;
//
//    private final MyTaskRepository repository;
//    private final MyTaskLogRepository logRepository;
//
//    @Autowired
//    public MusicHotTaskRunnable(MytaskEntity entity, MyTaskRepository repository, MyTaskLogRepository logRepository) {
//        this.entity = entity;
//        this.repository = repository;
//        this.logRepository = logRepository;
//    }


    @Override
    public void run() {
//        Date now = new Date();
        try {
//            repository.updateTime(entity.getTaskname(), now, TimeTransform.fullDay.parse((now.getTime() + TimeTransform.getTime(entity.getExpression())) + ""));
            System.out.println(HttpUnits.urlToString("http://localhost:8080/search/music/hot/1").toString());
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
