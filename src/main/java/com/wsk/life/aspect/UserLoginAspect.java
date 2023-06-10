package com.wsk.life.aspect;

import com.wsk.life.error.LoginErrorException;
import com.wsk.life.pojo.UserInformation;
import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.tool.Tool;
import com.wsk.life.write.Write;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.net.InetAddress;
import java.net.UnknownHostException;

/**
 * @DESCRIPTION :登录过滤
 * @AUTHOR : sk
 * @TIME : 2017/12/17  13:52
 */
@Component
@Aspect
public class UserLoginAspect {

    @Autowired
    private IRedisUtils redis;

    @Pointcut("execution(* com.wsk.life.controllerNo.LoginController.login(..))")
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
        return "redirect:/show";
    }

    private String getIpAddress(HttpServletRequest request) {
        String ipAddress;
        ipAddress = request.getHeader("x-forwarded-for");
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ipAddress == null || ipAddress.length() == 0 || "unknown".equalsIgnoreCase(ipAddress)) {
            ipAddress = request.getRemoteAddr();
            if (ipAddress.equals("127.0.0.1") || ipAddress.equals("0:0:0:0:0:0:0:1")) {
                // 根据网卡取本机配置的IP
                InetAddress inet = null;
                try {
                    inet = InetAddress.getLocalHost();
                } catch (UnknownHostException e) {
                    e.printStackTrace();
                }
                ipAddress = inet.getHostAddress();
            }

        }

        // 对于通过多个代理的情况，第一个IP为客户端真实IP,多个IP按照','分割
        if (ipAddress != null && ipAddress.length() > 15) {
            if (ipAddress.indexOf(",") > 0) {
                ipAddress = ipAddress.substring(0, ipAddress.indexOf(","));
            }
        }
        return ipAddress;
    }

    /**
     * 需要登录的用户账号密码核对,controller包下的music所有类
     */
//    @Pointcut("execution(* com.wsk.life.controller.*.*(..)) " +
//            "&& !execution(* com.wsk.life.controller.BaseController.*(..))" +
//            "&& !execution(* com.wsk.life.controller.*.is*(..)) " +
//            "&& !execution(* com.wsk.life.controller.*.get*(..)) " +
//            "&& !execution(* com.wsk.life.controller.*.set*(..)) " +
//            "&& !execution(* com.wsk.life.controller.UserInformationController.home(..)) ")
//    public void checkM() {
//    }
//
//
//    @Before(value = "checkM()")
//    private void checkMusic() {
////        System.out.println("wsk =====>start aspect!");
//        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
//        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
//        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
//            if (isLoginFromRedis()) {
//                throw new LoginErrorException("账号未登录！");
//            }
//        }
//    }

    private void checkBook() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            if (!isLoginFromRedis()) {
                throw new LoginErrorException("账号未登录！");
            }
        }
    }

    /**
     * 从缓存获取对象
     *
     * @return 是否存在
     */
    private boolean isLoginFromRedis() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String is = redis.get(request.getSession().getId());
        return Tool.getInstance().isNullOrEmpty(is);
    }
}
