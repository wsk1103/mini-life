package com.wsk.life.email;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Properties;

/**
 * @DESCRIPTION : 只针对移动号码的用户，发送短信验证码，使用的移动的发送短信，
 * 因为移动发送短信到139邮箱后，移动会以短信的形式发送到用户手机上。
 * @AUTHOR : WuShukai
 * @TIME : 2018/6/18  15:47
 */
public class Send {

    /**
     * 用户的手机
     */
    private static final String PHONE = "";
    /**
     * 用户密码
     */
    private static final String PASSWORD = "";

    public static void sendEmail(String phone, HttpServletRequest req, HttpServletResponse res) throws MessagingException {
        String ra = (String) req.getSession().getAttribute("codePhone");
        String text1 = "【WSK的验证码】您的验证码是：";
        String text2 = "，请保护好自己的验证码。";
        String text = text1 + ra + text2;
        Properties prop = new Properties();
        prop.setProperty("mail.host", "smtp.139.com");
        prop.setProperty("mail.transport.protocol", "smtp");
        prop.setProperty("mail.smtp.auth", "true");
        prop.setProperty("mail.smtp.port", "25");
        Session session = Session.getInstance(prop);
        Transport ts = session.getTransport();
        ts.connect("smtp.139.com", PHONE + "@139.com", PASSWORD);
        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress(PHONE + "@139.com"));
        req.getSession().setAttribute("phone", phone);
        phone += "@139.com";
        message.setRecipient(Message.RecipientType.TO, new InternetAddress(phone));
        message.setSubject("来自WSK的验证码");
        message.setContent(text, "text/html;charset=UTF-8");
        //这里先不发生信息，以后要开启的
        ts.sendMessage(message, message.getAllRecipients());
        ts.close();
    }
}
