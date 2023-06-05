package com.wsk.life.controller;

import com.wsk.life.error.LoginErrorException;
import com.wsk.life.pojo.UserInformation;
import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.tool.JSONUtil;
import com.wsk.life.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * 基础控制类
 */
@Controller
public class BaseController {

    final IRedisUtils redisUtils;

    @Autowired
    public BaseController(IRedisUtils redisUtils) {
        this.redisUtils = redisUtils;
    }

    public HttpServletRequest init() {
        HttpServletRequest request;
        RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();
        if (null == requestAttributes) {
            throw new LoginErrorException("登录过期，请重新登录！");
        }
//        if (Tool.getInstance().isNullOrEmpty(request)) {
        request = ((ServletRequestAttributes) requestAttributes).getRequest();
//        }
        if (Tool.getInstance().isNullOrEmpty(request)) {
            throw new LoginErrorException("登录过期，请重新登录！");
        }
        if (Tool.getInstance().isNullOrEmpty(request.getSession())) {
            throw new LoginErrorException("登录过期，请重新登录！");
        }
        String nowSessionId = request.getSession().getId();
//        System.out.println(String.format("THE nowSessionId is %s, %s", new Date(), nowSessionId));
        if (StringUtils.isEmpty(nowSessionId)) {
            throw new LoginErrorException("登录过期，请重新登录！");
        }
        return request;
    }

    /**
     * 获取当前用户，从session中
     *
     * @return 当前用户
     */
    protected UserInformation currentUserInfo() {
        HttpServletRequest request = init();
        return (UserInformation) request.getSession().getAttribute("userInformation");
    }

    /**
     * 将当前的对象存储到session中
     *
     * @param name session对应的名称
     * @param t    对象
     * @param <T>  泛型
     */
    protected <T> void setToSession(String name, T t) {
        HttpServletRequest request = init();
        request.getSession().setAttribute(name, t);
    }

    /**
     * 根据当前的sessionId从redis获取该对象
     *
     * @return
     */
    protected UserInformation currentUserInfoFromRedis() {
        HttpServletRequest request = init();
        String userInfo = redisUtils.get(request.getSession().getId());
//        System.out.println(userInfo);
        //        UserInformation userInformation = ProtoBufUtil.deserializerFromString(userInfo, UserInformation.class);
        return JSONUtil.toBean(userInfo, UserInformation.class);
    }

    protected void setUserInforToSession(UserInformation userInformation) {
        HttpServletRequest request = init();
        request.getSession().setAttribute("userInformation", userInformation);
    }

    protected void setUserInfoToRedis(UserInformation userInformation) {
        HttpServletRequest request = init();
        String result = JSONUtil.toJson(userInformation);
//        String result = ProtoBufUtil.serializerToString(userInformation);
//        System.out.println(result);
        redisUtils.set(request.getSession().getId(), result);
    }

    protected void cleanSessionAndRedis() {
        HttpServletRequest request = init();
        redisUtils.del(request.getSession().getId());
        request.getSession().removeAttribute("userInformation");
    }

    protected String getNowSessionId() {
        HttpServletRequest request = init();
        return request.getSession().getId();
    }

    protected HttpServletRequest getRequest() {
        return init();
    }


}
