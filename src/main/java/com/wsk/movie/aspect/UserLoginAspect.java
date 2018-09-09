package com.wsk.movie.aspect;

import com.wsk.movie.error.LoginErrorException;
import com.wsk.movie.music.HttpUnits;
import com.wsk.movie.pojo.UserInformation;
import com.wsk.movie.redis.IRedisUtils;
import com.wsk.movie.tool.Tool;
import com.wsk.movie.write.Write;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.Random;
import java.util.concurrent.CountDownLatch;

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
        String ipAddress = null;
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
//        String userInformation = redis.get(request.getRequestedSessionId());
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            if (isLoginFromRedis()) {
                throw new LoginErrorException("账号未登录！");
            }
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
     *
     * @return 是否存在
     */
    private boolean isLoginFromRedis() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        String is = redis.get(request.getRequestedSessionId());
        return Tool.getInstance().isNullOrEmpty(is);
    }

    public static void main(String[] args) throws IOException {
        int i = 0;
        Random random = new Random();
        Element element = HttpUnits.urlToString("https://blog.csdn.net/wsk1103");
        Elements elements = element.getElementsByClass("text-truncate");
        CountDownLatch countDownLatch = new CountDownLatch(elements.size());
        while (true) {
            try {
                int j = 0;
                for (Element e : elements) {
                    if (j >= 20) {
                        break;
                    }
                    Element a = e.getElementsByTag("a").first();
                    String result = a.attr("href");
                    int sleep = random.nextInt(60) + 1;
                    new Sub(sleep, countDownLatch, result).start();
                    j++;
//                    System.out.println(result);
//                    HttpUnits.urlToString(result);
                }
                i++;
//            HttpUnits.urlToString("https://blog.csdn.net/wsk1103/article/details/80214238");
                System.out.println("第 " + i + " 次访问");
                countDownLatch.await();
                System.out.println("next --->  新的开始 ");
                countDownLatch = new CountDownLatch(elements.size());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private static class Sub extends Thread {
        private CountDownLatch countDownLatch;
        private int sleep;
        private String url;

        Sub(int sleep, CountDownLatch countDownLatch, String url) {
            this.countDownLatch = countDownLatch;
            this.sleep = sleep;
            this.url = url;
        }

        @Override
        public void run() {
            try {
                System.out.println(url + " : sleep : " + sleep + " 分钟");
                Thread.sleep(1000 * 60 * sleep);
                HttpUnits.urlToString(url);
                System.out.println(url + " 访问成功!");
            } catch (IOException | InterruptedException e) {
                e.printStackTrace();
            } finally {
                countDownLatch.countDown();
            }
        }
    }
}
