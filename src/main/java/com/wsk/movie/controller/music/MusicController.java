package com.wsk.movie.controller.music;

import com.wsk.movie.controller.UserInformationController;
import com.wsk.movie.music.entity.WangYiResponseEntity;
import com.wsk.movie.music.service.WangYiService;
import com.wsk.movie.pojo.UserInformation;
import com.wsk.movie.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

/**
 * @DESCRIPTION :音乐控制中心
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/2/10  17:30
 */
@Controller
@RequestMapping(value = "/music")
public class MusicController {
    private final WangYiService service;
    private final UserInformationController userController;

    @Autowired
    public MusicController(WangYiService service, UserInformationController controller) {
        this.service = service;
        this.userController = controller;
    }

    @RequestMapping(value = "/hot")
    public String hot(HttpServletRequest request, Model model){
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        WangYiResponseEntity entity = (WangYiResponseEntity) service.getHotMusic();
        model.addAttribute("entity", entity.getData());
        model.addAttribute("myFriends", userController.getMyFriends(userInformation.getId()));
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("username", userInformation.getName());
        model.addAttribute("autograph", userInformation.getAutograph());
        model.addAttribute("action", 6);
        return "music/hot";
    }

}
