package com.wsk.movie.aspect;

import com.wsk.movie.error.LoginErrorException;
import com.wsk.movie.pojo.UserInformation;
import com.wsk.movie.tool.Tool;
import com.wsk.movie.write.Write;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

/**
 * @DESCRIPTION :登录过滤
 * @AUTHOR : WuShukai1103
 * @TIME : 2017/12/17  13:52
 */
@Component
@Aspect
public class UserLoginAspect {

    @Pointcut("execution(* com.wsk.movie.controller.UserInformationController.login(..))")
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
    @Pointcut("execution(* com.wsk.movie.controller.music.MusicController.*(..))")
    public void checkM() {
    }

    @Pointcut("execution(* com.wsk.movie.controller.book.BookController.*(..))")
    public void checkB() {
    }

    @Before(value = "checkM()")
    private void checkMusic() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            throw new LoginErrorException("账号未登录！");
        }
    }

    @Before(value = "checkB()")
    private void checkBook() {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            throw new LoginErrorException("账号未登录！");
        }
    }

    public static void main(String[] args) throws IOException {
        final int[] i = {0};
        ScheduledExecutorService executors = Executors.newScheduledThreadPool(1);
//        Document document = Jsoup.connect("http://blog.csdn.net/wsk1103").timeout(30000).get();
//        Elements elements = document.getElementsByClass("blog-unit");
//        for (Element e : elements) {
//            Element a = e.getElementsByTag("a").first();
//            String url = a.attr("href");
//            Jsoup.connect(url).timeout(30000).get();
//        }
//        String s1 = new String();
//        String s2 = new String("String 2");
//        char[] as = {'a',' ','s','t','r','i','n','g'};
//        String s3 = new String(as);
//        String s4 = new String(as, 2, 6);
//        byte[] b = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
//        StringBuilder sb = new StringBuilder(s3);
//        String s5 = new String(sb);
//        System.out.println(s1);
//        System.out.println(s2);
//        System.out.println(s3);
//        System.out.println(s4);
//        System.out.println(s5);
        int aa = 55;
        switch (aa){
            default:
                System.out.println(aa);
            case 4:
                System.out.println(5);
                break;
            case 2:
                System.out.println(2);
                break;
        }
        char aaa = '中';
        executors.scheduleAtFixedRate(() -> {
            try {
                Document document = Jsoup.connect("http://blog.csdn.net/wsk1103").timeout(30000).get();
                Elements elements = document.getElementsByClass("blog-unit");
                for (Element e : elements) {
                    Element a = e.getElementsByTag("a").first();
                    String url = a.attr("href");
                    Jsoup.connect(url).timeout(30000).get();
                }
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/79187042").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/79315018").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/79316220").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/78173833").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/78054287").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/78053994").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/54173282").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/54173025").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/53977801").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/53977762").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/53977452").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/53575412").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/53575244").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/53575168").timeout(30000).get();
//                Jsoup.connect("http://blog.csdn.net/wsk1103/article/details/53313280").timeout(30000).get();
                System.out.println(i[0]++);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }, 0, 60, TimeUnit.SECONDS);

    }

}
