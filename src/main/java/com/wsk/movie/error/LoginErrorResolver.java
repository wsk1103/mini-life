package com.wsk.movie.error;

import com.wsk.movie.controller.BaseController;
import com.wsk.movie.redis.IRedisUtils;
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
public class LoginErrorResolver extends BaseController implements HandlerExceptionResolver {

    public LoginErrorResolver(IRedisUtils redisUtils) {
        super(redisUtils);
    }

    @Override
    public ModelAndView resolveException(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) {
        ModelAndView modelAndView = new ModelAndView();
        if (e instanceof LoginErrorException) {
            modelAndView.addObject("msg", e.getMessage());
            modelAndView.setViewName("redirect:/login");
        } else {
            modelAndView.addObject("msg", "服务器内部异常");
            modelAndView.setViewName("500");
        }
/*        modelAndView.addObject("msg", e.getMessage());
        modelAndView.setViewName("redirect:/login");*/
        e.printStackTrace();
        cleanSessionAndRedis();
        return modelAndView;
    }
}
