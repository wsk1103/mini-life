package com.wsk.movie.controller;

import com.wsk.movie.error.LoginErrorException;
import com.wsk.movie.pojo.UserInformation;
import com.wsk.movie.redis.IRedisUtils;
import com.wsk.movie.tool.JSONUtil;
import com.wsk.movie.tool.ProtoBufUtil;
import com.wsk.movie.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * 基础控制类
 */
@Controller
public class BaseController {

    private HttpServletRequest request;

    final IRedisUtils redisUtils;

    private String nowSessionId;

    @Autowired
    public BaseController(IRedisUtils redisUtils) {
        this.redisUtils = redisUtils;
    }

    public void init() {
        RequestAttributes requestAttributes = RequestContextHolder.currentRequestAttributes();
        if (null == requestAttributes) {
            throw new LoginErrorException("登录过期，请重新登录！");
        }
        if (Tool.getInstance().isNullOrEmpty(request)) {
            request = ((ServletRequestAttributes) requestAttributes).getRequest();
        }
        if (Tool.getInstance().isNullOrEmpty(request)) {
            throw new LoginErrorException("登录过期，请重新登录！");
        }
        nowSessionId = request.getRequestedSessionId();
    }

    /**
     * 获取当前用户，从session中
     *
     * @return 当前用户
     */
    UserInformation currentUserInfo() {
        init();
        return (UserInformation) request.getSession().getAttribute("userInformation");
    }

    /**
     * 将当前的对象存储到session中
     *
     * @param name session对应的名称
     * @param t    对象
     * @param <T>  泛型
     */
    <T> void setToSession(String name, T t) {
        init();
        request.getSession().setAttribute(name, t);
    }

    /**
     * 根据当前的sessionId从redis获取该对象
     *
     * @return
     */
    UserInformation currentUserInfoFromRedis() {
        init();
        String userInfo = redisUtils.get(nowSessionId);
        System.out.println(userInfo);
        //        UserInformation userInformation = ProtoBufUtil.deserializerFromString(userInfo, UserInformation.class);
        return JSONUtil.toBean(userInfo, UserInformation.class);
    }

    void setUserInfoToRedis(UserInformation userInformation) {
        init();
        String result = JSONUtil.toJson(userInformation);
//        String result = ProtoBufUtil.serializerToString(userInformation);
        System.out.println(result);
        redisUtils.set(nowSessionId, result);
    }

    void cleanSessionAndRedis() {
        init();
        redisUtils.del(nowSessionId);
        request.getSession().removeAttribute("userInformation");
    }

    String getNowSessionId() {
        init();
        return nowSessionId;
    }

    HttpServletRequest getRequest() {
        init();
        return request;
    }


}
