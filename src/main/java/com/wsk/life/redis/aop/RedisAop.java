package com.wsk.life.redis.aop;

import com.alibaba.fastjson.JSON;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai
 * @TIME : 2018/9/9  13:06
 */
@Component
@Aspect
public class RedisAop {

    @Pointcut("execution(* com.wsk.life.redis.impl..*(..))")
    public void check() {
    }

//    @Before(value = "check()")
    public void checkNull(JoinPoint joinPoint) {
        //开始拦截redis的参数是否为空，为空则返回
        System.out.println("=====开始进入redis=====");
        System.out.println("the params is " + JSON.toJSONString(joinPoint.getArgs(), true));
/*        for (int i = 0; i < joinPoint.getArgs().length; i++) {
            System.out.println("the params is " + joinPoint.getArgs()[i]);
        }*/
    }

}
