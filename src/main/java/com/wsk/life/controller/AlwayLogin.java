package com.wsk.life.controller;

import com.wsk.life.tool.Tool;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by wsk1103 on 2017/5/2.
 */
@Controller
public class AlwayLogin {
    public static boolean isAlawLogin(String phone,String password,HttpServletRequest request){
        String true_phone = (String) request.getSession().getAttribute("true_phone");
        String true_password = (String) request.getSession().getAttribute("true_password");
        if (Tool.getInstance().isNullOrEmpty(true_phone) && Tool.getInstance().isNullOrEmpty(true_password)) {
            return false;
        }
        if (phone.equals(true_phone) && password.equals(true_password)) {
            return true;
        }
        return false;
    }
    @RequestMapping(value = "/wsk")
    public String wsk(@RequestParam int cc){
        return "login";
    }
//    @RequestMapping(value = "/wsk")
//    public String wsk(){
//        return "login";
//    }
}
