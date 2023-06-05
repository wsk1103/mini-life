package com.wsk.life.redis.impl;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.core.StringRedisTemplate;

import javax.annotation.Resource;
import java.util.concurrent.TimeUnit;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2017/12/31  18:09
 */
@Configuration
public class RedisUtils {
    @Resource
    private StringRedisTemplate template;

    private static final long DEFAULT_TIME = 60 * 10;

    public void set(String key, String value) {
        template.opsForValue().set(key, value, DEFAULT_TIME, TimeUnit.SECONDS);
    }
}
