package com.wsk.life.task.runnable;

import com.wsk.life.music.HttpUnits;

import java.io.IOException;

/**
 * @DESCRIPTION :音乐定时器,云音乐热歌榜
 * @AUTHOR : sk
 * @TIME : 2018/1/27  13:48
 */
//@Component
public class MusicHotTaskRunnable extends MyRunnable {

    @Override
    public void run() {
//        Date now = new Date();
        try {
            System.out.println("run hot:" + HttpUnits.urlToString("http://localhost:8080/search/music/hot/1").text());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
