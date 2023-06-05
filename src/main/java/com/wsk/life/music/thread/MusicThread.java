package com.wsk.life.music.thread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @DESCRIPTION :单例-下载音乐文件
 * @AUTHOR : sk
 * @TIME : 2018/1/20  17:11
 */
public class MusicThread {

    private static final ExecutorService SERVICE = Executors.newFixedThreadPool(Runtime.getRuntime().availableProcessors());

    private MusicThread() {}
    private static final class NestClass{
        private static final MusicThread musicThread = new MusicThread();
    }

    public static MusicThread getInstance(){
        return NestClass.musicThread;
    }

    public void executor(MusicRunnable runnable) {
        SERVICE.execute(runnable);
    }

    public void shutdown(){
        SERVICE.shutdown();
    }

}
