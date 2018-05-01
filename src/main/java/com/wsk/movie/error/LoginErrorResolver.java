package com.wsk.movie.error;

import org.springframework.stereotype.Controller;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/19  20:46
 */
@Controller
public class LoginErrorResolver implements HandlerExceptionResolver {
    @Override
    public ModelAndView resolveException(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) {
        ModelAndView modelAndView = new ModelAndView();
        if (e instanceof LoginErrorException) {
            modelAndView.addObject("msg", e.getMessage());
            modelAndView.setViewName("redirect:/login");
        } else {
            modelAndView.addObject("msg", "How old are you?");
            modelAndView.setViewName("error");
        }
        System.out.println(e);
        return modelAndView;
    }
}
