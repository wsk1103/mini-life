package com.wsk.life.session;

import org.springframework.context.annotation.Configuration;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2017/12/30  20:25
 */
@Configuration
@EnableRedisHttpSession(maxInactiveIntervalInSeconds = 86400 * 30)
public class SessionConfig {
}
