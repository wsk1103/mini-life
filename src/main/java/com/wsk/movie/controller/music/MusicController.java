package com.wsk.movie.controller.music;

import com.wsk.movie.controller.UserInformationController;
import com.wsk.movie.music.entity.WangYiCommentResponseEntity;
import com.wsk.movie.music.entity.WangYiInformationEntity;
import com.wsk.movie.music.entity.WangYiResponseEntity;
import com.wsk.movie.music.service.WangYiService;
import com.wsk.movie.music.service.WangYiSingerService;
import com.wsk.movie.pojo.UserInformation;
import com.wsk.movie.springdata.WangYiAlbumRepository;
import com.wsk.movie.springdata.WangYiMusicRepository;
import com.wsk.movie.springdata.entity.WangyialbumEntity;
import com.wsk.movie.springdata.entity.WangyimusicEntity;
import com.wsk.movie.tool.Time;
import com.wsk.movie.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

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
    private WangYiMusicRepository musicRepository;
    @Autowired
    private WangYiAlbumRepository albumRepository;

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
        String title;
        switch (type) {
            case "1":
                //云音乐热歌榜-1
                entity = (WangYiResponseEntity) service.getHotMusic();
                title = "音乐热歌榜";
                break;
            case "2" ://云音乐飙升榜-2
                entity = (WangYiResponseEntity) service.getHottingMusic();
                title = "音乐飙升榜";
                break;
            default: //云音乐新歌榜-3
                entity = (WangYiResponseEntity) service.getNewMusic();
                title = "音乐新歌榜";
                break;
        }
        model.addAttribute("entity", entity.getData());
        model.addAttribute("myFriends", userController.getMyFriends(userInformation.getId()));
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("username", userInformation.getName());
        model.addAttribute("autograph", userInformation.getAutograph());
        model.addAttribute("action", 6);
        model.addAttribute("title", title);
        userController.getUserCounts(model, userInformation.getId());
        return "music/hot";
    }
    //音乐详情
    @RequestMapping(value = "/information/{id}")
    public String information(@PathVariable("id")String id ,HttpServletRequest request, Model model){
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        //返回结果
        WangYiInformationEntity informationEntity = new WangYiInformationEntity();
        long songId = Long.parseLong(id);
        WangyimusicEntity wangyimusicEntity = musicRepository.getBySongid((int) songId);
        if (Tool.getInstance().isNotNull(wangyimusicEntity)) {
            //评论
            WangYiCommentResponseEntity entity = (WangYiCommentResponseEntity) service.getMusicComments(songId);
            informationEntity.setId(songId);
            //获取专辑
            WangyialbumEntity wangyialbumEntity = albumRepository.getByAlbumid(wangyimusicEntity.getAlbumid());
            if (Tool.getInstance().isNotNull(wangyialbumEntity)) {
                informationEntity.setAlbum(wangyialbumEntity.getAlbumname());
            } else {
                informationEntity.setAlbum("");
            }
            //获取歌手,可能有多个
            String singerIds = wangyimusicEntity.getSingerid();
            informationEntity.setSinger(WangYiSingerService.getSingers(singerIds));
            informationEntity.setPublishTime(Time.DAY.format(wangyialbumEntity.getPublishtime()));
            informationEntity.setSongName(wangyimusicEntity.getName());
            String lyric = service.getMusicLyric(songId);
            if (Tool.getInstance().isNotNull(lyric)) {
                lyric = lyric.replaceAll("\n", "<br/>");
                lyric = lyric.replaceAll("\\[[0-9]+:[0-9]+\\.[0-9]+\\]","");
            }
            informationEntity.setLyric(lyric);
            informationEntity.setPic(wangyimusicEntity.getPicurl());
            if (Tool.getInstance().isNotNull(entity) && Tool.getInstance().isNotNull(entity.getData())) {
                informationEntity.setComments(entity.getData().getHotComments());
            } else {
                informationEntity.setComments(new ArrayList<>());
            }
            informationEntity.setUrl(wangyimusicEntity.getUrl());
        }
        model.addAttribute("entity", informationEntity);
        model.addAttribute("myFriends", userController.getMyFriends(userInformation.getId()));
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("username", userInformation.getName());
        model.addAttribute("autograph", userInformation.getAutograph());
        model.addAttribute("action", 6);
//        model.addAttribute("title", wangyimusicEntity.getName());
        userController.getUserCounts(model, userInformation.getId());
        return "music/information";
    }

//    @RequestMapping

}
