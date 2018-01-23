package com.wsk.movie.aspect;

import com.wsk.movie.error.LoginErrorException;
import com.wsk.movie.write.Write;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2017/12/17  13:52
 */
@Component
@Aspect
public class UserLoginAspect {

    @Pointcut("execution(* com.wsk.movie.controller.UserInformationController.login(..))")
    public void login() {

    }

    public UserLoginAspect(){
        System.out.println("=========start aspect=========");
    }

    @Before(value = "login()")
    public String test() throws LoginErrorException {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String ip = getIpAddress(request);
        System.out.println("IP地址为：" + ip);
        Write.writeToFile(ip);
//        if (null == ip || !"127.0.0.1".equals(ip)) {
//            throw new LoginErrorException("How old are you?");
//        }
//        System.out.println(request.getSession().getId());
//        System.out.println("aspect login");
        return "redirect:/show";
    }
    private String getIpAddress(HttpServletRequest request) {
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_CLIENT_IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("HTTP_X_FORWARDED_FOR");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }

}
