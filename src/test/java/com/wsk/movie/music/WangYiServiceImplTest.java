package com.wsk.movie.music;

import com.wsk.movie.MovieApplication;
import com.wsk.movie.music.service.WangYiService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai
 * @TIME : 2018/9/8  21:53
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(classes = MovieApplication.class)
public class WangYiServiceImplTest {

    @Autowired
    private WangYiService wangYiService;

    @Test
    public void getHottingMusic() {
//        System.out.println(JSON.toJSONString(wangYiService.getHotMusic(), true));
    }
}