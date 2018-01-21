package com.wsk.movie.music.thread;

import com.wsk.movie.music.WangYiTypeEnum;
import com.wsk.movie.music.bean.MusicRunnableBean;
import com.wsk.movie.redis.IRedisUtils;
import com.wsk.movie.springdata.WangYiMusicRepository;
import com.wsk.movie.springdata.entity.WangyimusicEntity;
import com.wsk.movie.tool.Down;
import com.wsk.movie.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/20  17:17
 */
@Component
public class MusicRunnable implements Runnable {

    private MusicRunnableBean bean;

    private final WangYiMusicRepository musicService;

    private final IRedisUtils redisUtils;


    @Autowired
    public MusicRunnable(MusicRunnableBean bean, WangYiMusicRepository musicService, IRedisUtils redisUtils) {
        this.redisUtils = redisUtils;
        this.bean = bean;
        this.musicService = musicService;
    }

    @Override
    public void run() {
        try {
            String fileName = bean.getFileName();
            WangyimusicEntity entity = bean.getEntity();
            if (Tool.getInstance().isNullOrEmpty(musicService.getBySongid(entity.getSongid()))) {
                Down.down(entity.getUrl(), fileName);
                entity.setUrl(WangYiTypeEnum.MUSIC_URL + fileName);
                musicService.save(entity);
                redisUtils.set("wangyi_music_" + entity.getId(), WangYiTypeEnum.MUSIC_URL + fileName);
            }
        } catch (IOException e){
            e.printStackTrace();
        }
    }
}
