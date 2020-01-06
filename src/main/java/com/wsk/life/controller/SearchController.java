package com.wsk.life.controller;

import com.wsk.life.bean.UserBean;
import com.wsk.life.bean.UserPublish;
import com.wsk.life.book.entity.BookEntity;
import com.wsk.life.book.service.SearchBookService;
import com.wsk.life.music.WangYiTypeEnum;
import com.wsk.life.music.entity.WangYiResponseEntity;
import com.wsk.life.music.service.WangYiService;
import com.wsk.life.pojo.MovieName;
import com.wsk.life.pojo.MyFriends;
import com.wsk.life.pojo.PublishCritic;
import com.wsk.life.pojo.UserInformation;
import com.wsk.life.service.*;
import com.wsk.life.service.Impl.MovieNameServiceImpl;
import com.wsk.life.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/6/10.
 */
@Controller
public class SearchController {
    //    private static final String url = "http://localhost:8080/getHotCritic";
//    private static final String url = "http://op.juhe.cn/onebox/movie/video";
//    private static final String key = "e712295ae7ca460ec31624dd3dfe2094";

    @Resource(name = "userInformationService")
    private UserInformationService userInformationService;
    @Resource
    private PublishCriticService publishCriticService;
    @Resource
    private MyFriendsService myFriendsService;
    @Resource
    private CommentCriticService commentCriticService;
    @Resource
    private CollectionCriticService collectionCriticService;
    @Resource
    private GoodCriticService goodCriticService;
    @Resource
    private MovieNameServiceImpl movieNameService;

    private final SearchBookService searchBookService;

    private final UserInformationController userController;

    private final WangYiService wangYiService;

    @Autowired
    public SearchController(SearchBookService searchBookService, UserInformationController userController, WangYiService wangYiService) {
        this.searchBookService = searchBookService;
        this.userController = userController;
        this.wangYiService = wangYiService;
    }
//    @Autowired
//    private

    //搜索电影详细信息
    @RequestMapping(value = "search/result")
    public String searchMovie(@RequestParam String name, @RequestParam String action,
                              Model model, HttpServletRequest request, RedirectAttributes attributes) throws UnsupportedEncodingException {
        if (Tool.getInstance().isNullOrEmpty(action) || Tool.getInstance().isNullOrEmpty(name)) {
            return "redirect:/login";
        }

        switch (action) {
            case "movie":
//                name = new String(name.getBytes("GBK"));
                attributes.addFlashAttribute("name", name);
                return "redirect:/search/movie/result";
            case "critic":
                return getCriticByTitle(name, request, model);
            case "user":
                return getUserByName(name, request, model);
            case "music":
                return getMusicByName(name, request, model);
            case "book":
                return getBookByName(name, request, model);
            default:
                return "redirect:/login";
        }
    }

    //查找书籍
    private String getBookByName(String name, HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        List<BookEntity> entities = searchBookService.searchBookByName(name);
        model.addAttribute("entity", entities);
        model.addAttribute("myFriends", userController.getMyFriends(userInformation.getId()));
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("username", userInformation.getName());
        model.addAttribute("autograph", userInformation.getAutograph());
        model.addAttribute("action", 7);
        userController.getUserCounts(model, userInformation.getId());
//        model.addAttribute("action", 7);
//        model.addAttribute("userInformation", userInformation);
//        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
//        model.addAttribute("result", searchBookService.searchBookByName(name));
        model.addAttribute("title", name);
        return "book/search/result";
    }

    //查找音乐
    private String getMusicByName(String name, HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
//        List<BookEntity> entities = searchBookService.searchBookByName(name);
        WangYiResponseEntity entities = (WangYiResponseEntity) wangYiService.getMusic(name, WangYiTypeEnum.SINGLE );
        model.addAttribute("entity", entities.getData());
        model.addAttribute("myFriends", userController.getMyFriends(userInformation.getId()));
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("username", userInformation.getName());
        model.addAttribute("autograph", userInformation.getAutograph());
        model.addAttribute("action", 6);
        userController.getUserCounts(model, userInformation.getId());
//        model.addAttribute("action", 6);
//        model.addAttribute("userInformation", userInformation);
//        model.addAttribute("myFriends", userController.getMyFriends(userInformation.getId()));
////        model.addAttribute("result", );
        model.addAttribute("title", name);
        return "music/search/result";
    }

    //获取电影名
    @RequestMapping(value = "getMovieName")
    @ResponseBody
    public List<MovieName> getMovieName(@RequestParam String name, @RequestParam int start) {
        Map map = new HashMap();
        map.put("start", (start - 1) * 10);
        map.put("name", name);
        List<MovieName> list;
        if (Tool.getInstance().isNullOrEmpty(name)) {
            return new ArrayList<>();
        }
        try {
            list = movieNameService.getName(map);
            return list;
        } catch (Exception e) {
            e.printStackTrace();
            return new ArrayList<>();
        }
    }

    //进入电影的详情
    @RequestMapping(value = "movieInformation")
    public String movieInformation(@RequestParam String name) {
        return "information/movieInformation";
    }

    //搜索影评通过title
    @RequestMapping(value = "get/critic/title")
    public String getCriticByTitle(@RequestParam String title, HttpServletRequest request, Model model) {
        if (Tool.getInstance().isNullOrEmpty(title)) {
            return "redirect:/login";
        }
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            userInformation = new UserInformation();
            userInformation.setId(0);
        }
        int uid = userInformation.getId();
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("myFriends", userController.getMyFriends(uid));
        getUserCounts(model, uid);
        Map map = new HashMap();
        map.put("start", 0);
        map.put("title", title);
        List<PublishCritic> publishCritics = publishCriticService.selectByTitle(map);
        UserInformation user;
        UserPublish userPublish;
        List<UserPublish> list = new ArrayList<>();
        for (PublishCritic p : publishCritics) {
            userPublish = new UserPublish();
            user = userInformationService.selectByPrimaryKey(p.getUid());
            userPublish.setFriend(isFriends(uid, p.getUid()) ? 1 : 0);
            userPublish.setTime(Tool.getInstance().dateToStringWithHours(p.getTime()));
            userPublish.setGood(isGood(uid, p.getUid()) ? 1 : 0);
            userPublish.setCollection(isCollection(uid, p.getUid()) ? 1 : 0);
            userPublish.setPid(p.getId());
            userPublish.setTitle(p.getTitle());
            userPublish.setCritic(p.getCritic());
            userPublish.setPicture(p.getPicture());
            userPublish.setIsPrivate(p.getIsprivate());
            userPublish.setThumbnails(p.getThumbnails());
            userPublish.setUid(p.getUid());
            userPublish.setAvatar(user.getAvatar());
            userPublish.setName(user.getName());
            userPublish.setCollectionCounts(collectionCriticService.getCounts(p.getId()));
            userPublish.setGoodCounts(goodCriticService.getCounts(p.getId()));
            userPublish.setCommentCounts(commentCriticService.getCounts(p.getId()));
            list.add(userPublish);
        }
        model.addAttribute("result", list);
        model.addAttribute("title", title);
        return "information/searchCriticByTitle";
    }

    //搜索用户通过user
    @RequestMapping(value = "getUserByName")
    public String getUserByName(@RequestParam String name, HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            userInformation = new UserInformation();
            userInformation.setId(0);
        }
        int uid = userInformation.getId();
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("myFriends", userController.getMyFriends(uid));
        getUserCounts(model, uid);
        Map map = new HashMap();
        map.put("name", name);
        map.put("start", 0);
        List<UserInformation> list = userInformationService.selectByName(map);
        List<UserBean> result = new ArrayList<>();
        UserBean userBean;
        for (UserInformation u : list) {
            userBean = new UserBean();
            userBean.setAddress(u.getAddress());
            userBean.setAutograph(u.getAutograph());
            userBean.setAvatar(u.getAvatar());
            userBean.setBirthday(Tool.getInstance().dateToString(u.getBirthday()));
            userBean.setBuildtime(Tool.getInstance().dateToStringWithHours(u.getBuildtime()));
            userBean.setFriend(isFriends(uid, u.getId()) ? 1 : 0);
            userBean.setId(u.getId());
            userBean.setLabel(u.getLabel());
            userBean.setName(u.getName());
            userBean.setPhone(u.getPhone());
            userBean.setSex(u.getSex());
            result.add(userBean);
        }
        model.addAttribute("wsk", result);
        return "information/searchUserByName";
    }

    @RequestMapping(value = "getCriticByTitleAndStart", method = RequestMethod.POST)
    @ResponseBody
    public List getCriticByTitle(@RequestParam String title, @RequestParam int start, HttpServletRequest request) {
        List<UserPublish> list = new ArrayList<>();
        if (Tool.getInstance().isNullOrEmpty(title)) {
            return list;
        }
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            userInformation = new UserInformation();
            userInformation.setId(0);
        }
        int uid = userInformation.getId();
        Map map = new HashMap();
        map.put("start", (start - 1) * 10);
        map.put("title", title);
        List<PublishCritic> publishCritics = publishCriticService.selectByTitle(map);
        UserInformation user;
        UserPublish userPublish;
        for (PublishCritic p : publishCritics) {
            userPublish = new UserPublish();
            user = userInformationService.selectByPrimaryKey(p.getUid());
            userPublish.setTime(Tool.getInstance().dateToStringWithHours(p.getTime()));
            userPublish.setFriend(isFriends(uid, p.getUid()) ? 1 : 0);
            userPublish.setGood(isGood(uid, p.getUid()) ? 1 : 0);
            userPublish.setCollection(isCollection(uid, p.getUid()) ? 1 : 0);
            userPublish.setPid(p.getId());
            userPublish.setTitle(p.getTitle());
            userPublish.setCritic(p.getCritic());
            userPublish.setPicture(p.getPicture());
            userPublish.setIsPrivate(p.getIsprivate());
            userPublish.setThumbnails(p.getThumbnails());
            userPublish.setUid(p.getUid());
            userPublish.setAvatar(user.getAvatar());
            userPublish.setName(user.getName());
            userPublish.setCollectionCounts(collectionCriticService.getCounts(p.getId()));
            userPublish.setGoodCounts(goodCriticService.getCounts(p.getId()));
            userPublish.setCommentCounts(commentCriticService.getCounts(p.getId()));
            list.add(userPublish);
        }
        return list;
    }

    //搜索用户通过user
    @RequestMapping(value = "getUserByNameAndStart")
    @ResponseBody
    public List getUserByNameAndStart(@RequestParam String name, @RequestParam int start, HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            userInformation = new UserInformation();
            userInformation.setId(0);
        }
        int uid = userInformation.getId();
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("myFriends", userController.getMyFriends(uid));
        getUserCounts(model, uid);
        Map map = new HashMap();
        map.put("name", name);
        map.put("start", (start - 1) * 10);
        List<UserInformation> list = userInformationService.selectByName(map);
        List<UserBean> result = new ArrayList<>();
        UserBean userPublish;
        for (UserInformation u : list) {
            userPublish = new UserBean();
            userPublish.setAddress(u.getAddress());
            userPublish.setAutograph(u.getAutograph());
            userPublish.setAvatar(u.getAvatar());
            userPublish.setBuildtime(Tool.getInstance().dateToString(u.getBuildtime()));
            userPublish.setBirthday(Tool.getInstance().dateToStringWithHours(u.getBirthday()));
            userPublish.setFriend(isFriends(uid, u.getId()) ? 1 : 0);
            userPublish.setId(u.getId());
            userPublish.setLabel(u.getLabel());
            userPublish.setName(u.getName());
            userPublish.setPhone(u.getPhone());
            userPublish.setSex(u.getSex());
            result.add(userPublish);
        }
        return result;
    }

//    //获取好友列表
//    private List<MyFriendsBean> getMyFriends(int uid) {
//        List<MyFriends> list = myFriendsService.getFid(uid);
//        List<MyFriendsBean> ids = new ArrayList<>();
////        for (MyFriends myFriends : list) {
////            ids.add(myFriends.getUid());
////        }
////        if (ids.size() == 0) {
////            ids.add(0);
////        }
////        List<UserInformation> userInformations = userInformationService.getAllForeach(ids);
//        for (MyFriends myFriends : list) {
//            UserInformation userInformation = userInformationService.selectByPrimaryKey(myFriends.getFid());
//            MyFriendsBean myFriendsBean = new MyFriendsBean();
//            myFriendsBean.setAvatar(userInformation.getAvatar());
//            myFriendsBean.setFid(myFriends.getFid());
//            myFriendsBean.setId(myFriends.getId());
//            myFriendsBean.setName(userInformation.getName());
//            myFriendsBean.setUid(myFriends.getUid());
//            ids.add(myFriendsBean);
//        }
//        return ids;
//    }

    //获得点赞数量，收藏数量，评论数量
    private void getUserCounts(Model model, int uid) {
        model.addAttribute("comments", commentCriticService.getUserCounts(uid));
        model.addAttribute("critics", publishCriticService.getUserCounts(uid));
        model.addAttribute("goods", goodCriticService.getUserCounts(uid));
        model.addAttribute("collections", collectionCriticService.getUserCounts(uid));
    }

    //是否点赞过
    private boolean isGood(int uid, int pid) {
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("pid", pid);
        return !Tool.getInstance().isNullOrEmpty(goodCriticService.selectGood(map));
    }

    //是否收藏过
    private boolean isCollection(int uid, int pid) {
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("pid", pid);
        return !Tool.getInstance().isNullOrEmpty(collectionCriticService.selectCollection(map));
    }

    //判断是否为关注,好友
    private Boolean isFriends(int uid, int fid) {
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("fid", fid);
        MyFriends myFriends;
        try {
            myFriends = myFriendsService.isFriends(map);
        } catch (Exception e) {
            myFriends = null;
        }
        if (Tool.getInstance().isNullOrEmpty(myFriends)) {
            return false;
        } else {
            return true;
        }
    }
}
