package com.wsk.movie.controller.music;

import com.wsk.movie.controller.UserInformationController;
import com.wsk.movie.music.entity.WangYiResponseEntity;
import com.wsk.movie.music.service.WangYiService;
import com.wsk.movie.pojo.UserInformation;
import com.wsk.movie.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
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

    @RequestMapping(value = "/hot/{type}")
    public String hot(@PathVariable("type") String type, HttpServletRequest request, Model model){
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        WangYiResponseEntity entity;
        switch (type) {
            case "1":
                //云音乐热歌榜-1
                entity = (WangYiResponseEntity) service.getHotMusic();
                break;
            case "2" ://云音乐飙升榜-2
                entity = (WangYiResponseEntity) service.getHottingMusic();
                break;
            default: //云音乐新歌榜-3
                entity = (WangYiResponseEntity) service.getNewMusic();
                break;
        }
//        WangYiResponseEntity entity = (WangYiResponseEntity) service.getHotMusic();
        model.addAttribute("entity", entity.getData());
        model.addAttribute("myFriends", userController.getMyFriends(userInformation.getId()));
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("username", userInformation.getName());
        model.addAttribute("autograph", userInformation.getAutograph());
        model.addAttribute("action", 6);
        return "music/hot";
    }

    @RequestMapping(value = "/free/hot/{type}")
    public String hot(@PathVariable("type") String type, Model model) {
        WangYiResponseEntity entity;
        switch (type) {
            case "1":
                //云音乐热歌榜-1
                entity = (WangYiResponseEntity) service.getHotMusic();
                break;
            case "2" ://云音乐飙升榜-2
                entity = (WangYiResponseEntity) service.getHottingMusic();
                break;
            default: // 云音乐新歌榜-3
                entity = (WangYiResponseEntity) service.getNewMusic();
                break;
        }
        model.addAttribute("entity", entity.getData());
        model.addAttribute("action", 6);
        model.addAttribute("userInformation", new UserInformation());
        model.addAttribute("username", "");
        model.addAttribute("autograph", "");
        return "music/freeHot";
    }
}
