package com.wsk.movie.aspect;

import com.wsk.movie.error.LoginErrorException;
import com.wsk.movie.pojo.UserInformation;
import com.wsk.movie.redis.IRedisUtils;
import com.wsk.movie.tool.Tool;
import com.wsk.movie.write.Write;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

/**
 * @DESCRIPTION :登录过滤
 * @AUTHOR : WuShukai1103
 * @TIME : 2017/12/17  13:52
 */
@Component
@Aspect
public class UserLoginAspect {

    @Autowired
    private IRedisUtils redis;

    @Pointcut("execution(* com.wsk.movie.controllerNo.LoginController.login(..))")
    public void login() {
    }

    public UserLoginAspect() {
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

    //需要登录的用户账号密码核对,controller包下的music所有类
    @Pointcut("execution(* com.wsk.movie.controller.*.*(..)) " +
            "&& !execution(* com.wsk.movie.controller.BaseController.*(..))" +
            "&& !execution(* com.wsk.movie.controller.*.is*(..)) " +
            "&& !execution(* com.wsk.movie.controller.*.get*(..)) " +
            "&& !execution(* com.wsk.movie.controller.*.set*(..)) " +
            "&& !execution(* com.wsk.movie.controller.UserInformationController.home(..)) ")
    public void checkM() {
    }

//    @Pointcut("execution(* com.wsk.movie.controller.book.BookController.*(..))")
//    public void checkB() {
//    }

    @Before(value = "checkM()")
    private void checkMusic() {
        System.out.println("wsk =====>start aspect!");
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            if (!isLoginFromRedis())
                throw new LoginErrorException("账号未登录！");
        }
    }

//    @Before(value = "checkB()")
    private void checkBook() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            if (!isLoginFromRedis())
                throw new LoginErrorException("账号未登录！");
        }
    }

    /**
     * 从缓存获取对象
     * @return 是否存在
     */
    private boolean isLoginFromRedis() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String is = redis.get(request.getRequestedSessionId());
        return Tool.getInstance().isNullOrEmpty(is);
    }

    public static void main(String[] args) throws IOException, InterruptedException {
    }

}
