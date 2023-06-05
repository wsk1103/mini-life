package com.wsk.life.config;

import cn.hutool.core.thread.ThreadUtil;
import com.wsk.life.music.service.WangYiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * @author sk
 * @date 2023/6/5
 */
@Component
public class StartConfig {

    @Autowired
    private WangYiService service;

    @PostConstruct
    public void initMusic() {
        ThreadUtil.execute(() -> {
            System.err.println("开始初始化热门音乐信息");
            service.getHotMusic();
            service.getHottingMusic();
            service.getNewMusic();
            System.err.println("结束初始化热门音乐信息");
        });


    }

}
