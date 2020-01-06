package com.wsk.life.controller;

import com.wsk.life.tool.Tool;

/**
 * Created by Maibenben on 2017/4/30.
 */
public class RepeatSubmit {
    public static boolean isRepeatSubmit(String user_token,String client_token) {
//        String token = request.getParameter(user_token);
        if (Tool.getInstance().isNullOrEmpty(user_token)) {
            return true;
        }
//        client_token = (String) request.getSession().getAttribute(client_token);
        return Tool.getInstance().isNullOrEmpty(client_token) || !client_token.equals(user_token);
    }
}
