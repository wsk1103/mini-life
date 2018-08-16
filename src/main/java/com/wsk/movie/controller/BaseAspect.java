package com.wsk.movie.controller;

import com.wsk.movie.error.LoginErrorException;
import com.wsk.movie.tool.Tool;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * Author: wsk1103
 * Date: 2018/7/12 0012
 * Des: BaseController的切面
 */
//@Component
//@Aspect
public class BaseAspect {


//    @Before(value = "base()")
//    public void init(){
//
//    }
//
//    @Pointcut("execution(* com.wsk.movie.controller.BaseController.*(..))")
//    public void base(){
//    }

//    public HttpServletRequest getRequest() {
//        return request;
//    }
//
//    public String getNowSessionId() {
//        return nowSessionId;
//    }
}
