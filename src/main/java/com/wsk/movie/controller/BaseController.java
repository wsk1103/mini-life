package com.wsk.movie.controller;

import com.wsk.movie.error.LoginErrorException;
import com.wsk.movie.pojo.UserInformation;
import com.wsk.movie.redis.IRedisUtils;
import com.wsk.movie.tool.JSONUtil;
import com.wsk.movie.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;

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
        System.out.println(String.format("THE nowSessionId is %s, %s", new Date(), nowSessionId));
        if (StringUtils.isEmpty(nowSessionId)) {
            throw new LoginErrorException("登录过期，请重新登录！");
        }
    }

    /**
     * 获取当前用户，从session中
     *
     * @return 当前用户
     */
    protected UserInformation currentUserInfo() {
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
    protected <T> void setToSession(String name, T t) {
        init();
        request.getSession().setAttribute(name, t);
    }

    /**
     * 根据当前的sessionId从redis获取该对象
     *
     * @return
     */
    protected UserInformation currentUserInfoFromRedis() {
        init();
        String userInfo = redisUtils.get(nowSessionId);
        System.out.println(userInfo);
        //        UserInformation userInformation = ProtoBufUtil.deserializerFromString(userInfo, UserInformation.class);
        return JSONUtil.toBean(userInfo, UserInformation.class);
    }

    protected void setUserInforToSession(UserInformation userInformation) {
        init();
        request.getSession().setAttribute("userInformation", userInformation);
    }

    protected void setUserInfoToRedis(UserInformation userInformation) {
        init();
        String result = JSONUtil.toJson(userInformation);
//        String result = ProtoBufUtil.serializerToString(userInformation);
        System.out.println(result);
        redisUtils.set(nowSessionId, result);
    }

    protected void cleanSessionAndRedis() {
        init();
        redisUtils.del(nowSessionId);
        request.getSession().removeAttribute("userInformation");
    }

    protected String getNowSessionId() {
        init();
        return nowSessionId;
    }

    protected HttpServletRequest getRequest() {
        init();
        return request;
    }


}
