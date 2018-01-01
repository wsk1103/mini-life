package com.wsk.movie.controller;

import com.wsk.movie.tool.Tool;

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
        if (Tool.getInstance().isNullOrEmpty(client_token)) {
            return true;
        }
        if (!client_token.equals(user_token)) {
            return true;
        }
        return false;
    }
}
