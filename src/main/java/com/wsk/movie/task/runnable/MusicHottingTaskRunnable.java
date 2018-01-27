package com.wsk.movie.task.runnable;

import com.wsk.movie.music.HttpUnits;
import com.wsk.movie.task.entity.MytaskEntity;
import com.wsk.movie.task.service.MyTaskRepository;
import com.wsk.movie.task.tool.TimeTransform;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.text.ParseException;
import java.util.Date;

/**
 * @DESCRIPTION :音乐定时器,云音乐飙升榜
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/23  22:20
 */
@Component
public class MusicHottingTaskRunnable extends MyRunnable{

    private MytaskEntity entity;

    @Autowired
    private MyTaskRepository repository;

    public MusicHottingTaskRunnable(MytaskEntity entity) {
        super(entity);
        this.entity = entity;
    }

    @Override
    public void run() {
        Date now = new Date();
        try {
            repository.updateTime(entity.getTaskname(), now, TimeTransform.fullDay.parse((now.getTime() + TimeTransform.getTime(entity.getExpression())) + ""));
            HttpUnits.urlToString("http://119.29.194.92/search/music/hot/2");
        } catch (ParseException | IOException e) {
            e.printStackTrace();
        }
    }
}
