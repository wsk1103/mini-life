package com.wsk.life.controllerNo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by wsk1103 on 2017/10/23.
 */
@Controller
public class ErrorController {
    @RequestMapping(value = "/404")
    public String $404(){
        return "404";
    }
    @RequestMapping(value = "/500")
    public String $500(){
        return "500";
    }
}
