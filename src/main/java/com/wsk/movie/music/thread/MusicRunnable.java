package com.wsk.movie.music.thread;

import com.wsk.movie.music.WangYiTypeEnum;
import com.wsk.movie.music.bean.MusicRunnableBean;
import com.wsk.movie.redis.IRedisUtils;
import com.wsk.movie.springdata.WangYiMusicRepository;
import com.wsk.movie.springdata.entity.WangyimusicEntity;
import com.wsk.movie.tool.Down;
import com.wsk.movie.tool.Time;
import com.wsk.movie.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * @DESCRIPTION :网易云音乐下载，并保存到数据库
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
            WangyimusicEntity entity2 = musicService.getBySongid(bean.getMusicEntity().getSongid());
            if (Tool.getInstance().isNullOrEmpty(entity2)) {
                Down.down(bean.getEntity().getUrl(), fileName);
                bean.getEntity().setUrl(WangYiTypeEnum.MUSIC_URL + fileName);
                musicService.save(bean.getMusicEntity());
                redisUtils.set("wangyi_music_url_" + bean.getMusicEntity().getId(), WangYiTypeEnum.MUSIC_URL + fileName);
            } else if (entity2.getUrl().contains("m10.music.126.net")) {
                Down.down(bean.getEntity().getUrl(), fileName);
                bean.getEntity().setUrl(WangYiTypeEnum.MUSIC_URL + fileName);
                musicService.update(bean.getMusicEntity().getSongid(),  WangYiTypeEnum.MUSIC_URL + fileName);
                redisUtils.set("wangyi_music_url_" + bean.getMusicEntity().getId(), WangYiTypeEnum.MUSIC_URL + fileName, Time.ONE_DAY);
            }
        } catch (IOException e){
            e.printStackTrace();
        }
    }
}
