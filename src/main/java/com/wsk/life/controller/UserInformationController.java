package com.wsk.life.controller;

import com.wsk.life.bean.*;
import com.wsk.life.pojo.*;
import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.service.*;
import com.wsk.life.tool.SensitivewordFilter;
import com.wsk.life.tool.Tool;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;

import static com.wsk.life.controller.RepeatSubmit.isRepeatSubmit;

/**
 * Created by wsk1103 on 2017/4/26.
 */
@Slf4j
@Controller
public class UserInformationController extends AsideController {


    @Resource(name = "userPasswordService")
    private UserPasswordService userPasswordService;

    public UserInformationController(IRedisUtils redisUtils) {
        super(redisUtils);
    }

    //This is a test which show all user`s information.
    @RequestMapping("/show")
    public String cc(HttpServletRequest request, Model model) {
//        log.info("===========wsk==============");
        int id = Integer.parseInt(request.getParameter("id"));
        UserInformation userInformation = userInformationService.selectByPrimaryKey(id);
//        UserInformation userInformation = new UserInformation();
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
        return "aside";
    }

    //This is a home when user login for my web
    @RequestMapping(value = "home", method = RequestMethod.GET)
    public String home(HttpServletRequest request, Model model) {
//        String phone_session = (String) request.getSession().getAttribute("phone_session");
//        String password_session = (String) request.getSession().getAttribute("password_session");
        if (!Tool.getInstance().isNullOrEmpty(request.getSession().getAttribute("userInformation"))) {
            return toHome(model, request);
        }
        return "redirect:/login";
    }

    @RequestMapping(value = "home", method = {RequestMethod.POST})
    public String home(@RequestParam String username, @RequestParam String password, @RequestParam String token,
                       Model model, HttpServletRequest request, HttpServletResponse response) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNotNull(userInformation)) {
            toHome(model, request);
        }
        if (Tool.getInstance().isNullOrEmpty(request.getSession().getAttribute("token"))) {
            return "redirect:login";
        }
        String clientToken = (String) request.getSession().getAttribute("token");
        boolean b = isRepeatSubmit(token, clientToken);
        if (b) {
//            return login(model, request, response);
            return "redirect:login";
        } else {
            request.getSession().removeAttribute("token");
        }
        if (login(username, password, request)) {
            userInformation = currentUserInfoFromRedis();
            model.addAttribute("userInformation", userInformation);
            int uid = userInformation.getId();
            getAllPublishCritic(model, uid);
            String remember_me = request.getParameter("remember_me");
            if (!Tool.getInstance().isNullOrEmpty(remember_me)) {
                Cookie cookie = new Cookie("MovieWeb_username", username.trim());
                cookie.setMaxAge(60 * 60 * 24 * 7);
                response.addCookie(cookie);
                cookie = new Cookie("MovieWeb_password", password);
                cookie.setMaxAge(60 * 60 * 24 * 7);
                response.addCookie(cookie);
//                hasCookie = true;
                redisUtils.set(request.getRequestedSessionId(), "1");
            }
            return "redirect:/my";
        } else {
            model.addAttribute("username", username);
            model.addAttribute("error", "账号或者密码错误");
//            hasCookie = false;
            return "redirect:login";
        }
    }

    @RequestMapping(value = "main")
    public String myself(Model model) {
//        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
//        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
//            return "redirect:/login";
//        }
        setAsideModel(model);
        model.addAttribute("action", 1);
        return "main";
    }

    @RequestMapping(value = "my")
    public String my(Model model) {
//        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
//        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
//            return "redirect:/login";
//        }
//        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
//        model.addAttribute("userInformation", currentUserInfo());
//        model.addAttribute("username", currentUserInfo().getName());
//        model.addAttribute("autograph", currentUserInfo().getAutograph());
//        int uid = currentUserInfo().getId();
//        getAllPublishCritic(model, uid);
//        getUserCounts(model, uid);
        setAsideModel(model);
        model.addAttribute("action", 1);
        return "home";
    }


//    @RequestMapping(value = {"/", "login"}, method = RequestMethod.GET)
//    public String login(Model model, HttpServletRequest request, HttpServletResponse response) {
//        System.out.println(new Date() + ",run login");
//        String token = TokenProccessor.getInstance().makeToken();
//        request.getSession().setAttribute("token", token);
//        model.addAttribute("token", token);
//        Cookie[] cookies = request.getCookies();
//        String username = "", password = "";
//        if (cookies != null)
//            for (Cookie c : cookies) {
//                if (c.getName().equals("MovieWeb_username")) {
//                    username = c.getValue();
////                    System.out.println("username" + username);
//                } else if (c.getName().equals("MovieWeb_password")) {
//                    password = c.getValue();
////                    System.out.println("password" + password);
//                }
//            }
//        if (!username.equals("") && !password.equals("") && hasCookie) {
//            return home(username, password, token, model, request, response);
//        }
//        return "login";
//    }

    //退出
    @RequestMapping(value = "logout", method = {RequestMethod.POST, RequestMethod.GET})
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        System.out.println(new Date() + ",run logout");
        Cookie cookie = new Cookie("MovieWeb_username", "");
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        cookie = new Cookie("MovieWeb_password", "");
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        if (request.getSession().getAttribute("userInformation") != null) {
            request.getSession().removeAttribute("userInformation");
        }
        cleanSessionAndRedis();
//        hasCookie = false;
        return "redirect:/login";
    }

    //进入论坛
    @RequestMapping(value = "forum/forum")
    public String forum(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        } else {
            model.addAttribute("userInformation", userInformation);
        }
        model.addAttribute("action", 3);
        return "forum/forum";
    }

    //进入热门论坛
    @RequestMapping(value = "hot/forum")
    public String hotForum(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        } else {
            model.addAttribute("userInformation", userInformation);
        }
        model.addAttribute("action", 2);
        return "forum/hot";
    }

    //进入热门影评
    @RequestMapping(value = "hot/critic")
    public String hotCritic(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            userInformation = new UserInformation();
            userInformation.setId(0);
        }
        List<PublishCritic> publishCritics = publishCriticService.getHotCritic(0);
        List<Integer> list = new ArrayList<>();
        for (PublishCritic p : publishCritics) {
            list.add(p.getUid());
        }
        List<UserInformation> userInformations = userInformationService.getAllForeach(list);
        List<UserPublish> userPublishes = new ArrayList<>();

        int uid;
        if (Tool.getInstance().isNullOrEmpty(userInformation.getId())) {
            uid = 0;
        } else {
            uid = userInformation.getId();
        }
        for (PublishCritic p : publishCritics) {
            UserPublish userPublish = new UserPublish();
            a:
            {
                for (UserInformation u : userInformations) {
                    if (u.getId().equals(p.getUid())) {
                        userPublish.setName(u.getName());
                        userPublish.setAvatar(u.getAvatar());
                        userPublish.setUid(u.getId());
                        break a;
                    }
                }
            }
            userPublish.setFriend(isFriends(uid, p.getUid()) ? 1 : 0);
            userPublish.setThumbnails(p.getThumbnails());
            userPublish.setIsPrivate(p.getIsprivate());
            userPublish.setGoodCounts(goodCriticService.getCounts(p.getId()));
            userPublish.setCommentCounts(commentCriticService.getCounts(p.getId()));
            userPublish.setCollectionCounts(collectionCriticService.getCounts(p.getId()));
            userPublish.setPicture(p.getPicture());
            userPublish.setCritic(p.getCritic());
            userPublish.setTitle(p.getTitle());
            userPublish.setPid(p.getId());
            userPublish.setTime(Tool.getInstance().dateToStringWithHours(p.getTime()));
            userPublish.setGood(isGood(uid, p.getId()) ? 1 : 0);
            userPublish.setCollection(isCollection(uid, p.getId()) ? 1 : 0);
            userPublishes.add(userPublish);
        }
        model.addAttribute("result", userPublishes);
        model.addAttribute("action", 2);
        model.addAttribute("userInformation", userInformation);
        List<MyFriendsBean> myFriends = getMyFriends(uid);
        model.addAttribute("myFriends", myFriends);
        getUserCounts(model, uid);
        return "hot/critic";
    }
//    @RequestMapping("getAllUsers")
//    public String getAllUsers(Model model) {
//        List<UserInformation> users = this.userInformationService.getAllUsers();
//        model.addAttribute("users", users);
//        return "all";
//    }

    //查看用户个人主页
    @RequestMapping(value = "/find/information")
    public String information(HttpServletRequest request, @RequestParam(value = "id") int id) {
        request.getSession().setAttribute("userId", id);
        UserInformation user = getUserInformationById(id);
        request.getSession().setAttribute("user", user);
        return "redirect:/user/information";
    }

    //重定向到个人主页，为了安全
    @RequestMapping(value = "/user/information")
    public String information(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            userInformation = new UserInformation();
            userInformation.setId(0);
        }
        UserInformation user = (UserInformation) request.getSession().getAttribute("user");
        if (Tool.getInstance().isNullOrEmpty(user)) {
            user = new UserInformation();
        }
        request.getSession().removeAttribute("user");

        if (Tool.getInstance().isNullOrEmpty(request.getSession().getAttribute("userId"))) {
            return "redirect:/home";
        }
        int id = (int) request.getSession().getAttribute("userId");
        request.getSession().removeAttribute("userId");
        model.addAttribute("user", user);
        model.addAttribute("userInformation", userInformation);
        int uid, fid;
        if (Tool.getInstance().isNullOrEmpty(userInformation.getId())) {
            uid = 0;
        } else {
            uid = userInformation.getId();
        }
        if (Tool.getInstance().isNullOrEmpty(user.getId())) {
            fid = 0;
        } else {
            fid = user.getId();
        }
        boolean b = isFriends(uid, fid);
        if (b) {
            model.addAttribute("isFriends", 1);
        } else {
            model.addAttribute("isFriends", 0);
        }
        getMyCritic(model, id, user);
        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
        getUserCounts(model, uid);
        return "information/userInformation";
    }

    //进入影评的详细内容
    @RequestMapping(value = "criticInformation")
    public String criticInformation(HttpServletRequest request, @RequestParam int pid) {
        request.getSession().setAttribute("pid", pid);
        int uid;
        try {
            uid = publishCriticService.getObjectById(pid).getUid();
        } catch (Exception e) {
            uid = 0;
        }
        UserInformation user = getUserInformationById(uid);
        if (Tool.getInstance().isNullOrEmpty(uid)) {
            return "redirect:/home";
        }
        request.getSession().setAttribute("user", user);
        return "redirect:/critic/information";
    }

    //查看具体影评，重定向，为了安全
    @RequestMapping(value = "critic/information")
    public String criticInformation(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            userInformation = new UserInformation();
            userInformation.setId(0);
        }
        model.addAttribute("userInformation", userInformation);
        UserInformation user = (UserInformation) request.getSession().getAttribute("user");
        if (Tool.getInstance().isNullOrEmpty(user)) {
            user = new UserInformation();
        }
        request.getSession().removeAttribute("user");
        if (Tool.getInstance().isNullOrEmpty(request.getSession().getAttribute("pid"))) {
            return "redirect:/home";
        }
        int pid = (int) request.getSession().getAttribute("pid");
        request.getSession().removeAttribute("pid");
        model.addAttribute("user", user);
        int uid, fid;
        if (Tool.getInstance().isNullOrEmpty(userInformation.getId())) {
            uid = 0;
        } else {
            uid = userInformation.getId();
        }
        if (Tool.getInstance().isNullOrEmpty(user.getId())) {
            fid = 0;
        } else {
            fid = user.getId();
        }
        boolean b = isFriends(uid, fid);
        if (b) {
            model.addAttribute("isFriends", 1);
        } else {
            model.addAttribute("isFriends", 0);
        }
//        getMyCritic(model, pid, user);
        //获取影评及其内容
        PublishCritic publishCritic = publishCriticService.getObjectById(pid);
        model.addAttribute("collection", collectionCriticService.getCounts(pid));
        model.addAttribute("good", goodCriticService.getCounts(pid));
        model.addAttribute("comment", commentCriticService.getCounts(pid));
        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
        model.addAttribute("publishCritic", publishCritic);
        List<CriticCommentBean> CriticCommentBeans = getCommentByPid(1, pid);
        model.addAttribute("CriticCommentBeans", CriticCommentBeans);
        getUserCounts(model, uid);
        return "information/criticInformation";
    }

    //进入账号设置
    @RequestMapping(value = "accountSettings")
    public String accountSettings(HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
        model.addAttribute("action", 5);
        getUserCounts(model, userInformation.getId());
        return "setting/AccountSettings";
    }

    //进入安全设置
    @RequestMapping(value = "security")
    public String security(HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
        model.addAttribute("action", 5);
        getUserCounts(model, userInformation.getId());
        return "setting/Security";
    }

    //进入查看我的评论
    @RequestMapping(value = "my/comment")
    public String myComment(HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
        getUserCounts(model, userInformation.getId());
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", userInformation.getId());
        map.put("start", 0);
        List<CommentCritic> commentCritics = commentCriticService.selectByUid(map);
        List<MyCommentBean> list = new ArrayList<>();
        MyCommentBean myCommentBean;
        UserInformation user;
        PublishCritic publishCritic;
        for (CommentCritic c : commentCritics) {
            user = userInformationService.selectByPrimaryKey(c.getUid());
            publishCritic = publishCriticService.getObjectById(c.getPid());
            if (user == null || publishCritic == null) {
                continue;
            }
            myCommentBean = new MyCommentBean();
//            myCommentBean.setList(commentCritics);
            myCommentBean.setAvatar(user.getAvatar());
//            myCommentBean.setCollection(collectionCriticService.getCounts(c.getPid()));
            myCommentBean.setCritic(publishCritic.getCritic());
            myCommentBean.setComment(c.getCritic());
            myCommentBean.setPublishTime(Tool.getInstance().dateToStringWithHours(publishCritic.getTime()));
            myCommentBean.setFid(user.getId());
            myCommentBean.setPid(publishCritic.getId());
            myCommentBean.setCommentTime(Tool.getInstance().dateToStringWithHours(c.getTime()));
//            myCommentBean.setGood(goodCriticService.getCounts(c.getPid()));
            myCommentBean.setPicture(publishCritic.getPicture());
            myCommentBean.setIsprivate(publishCritic.getIsprivate());
            myCommentBean.setName(user.getName());
            myCommentBean.setThumbnails(publishCritic.getThumbnails());
            myCommentBean.setCid(c.getId());
            myCommentBean.setTitle(publishCritic.getTitle());
            myCommentBean.setFid(isFriends(userInformation.getId(), user.getId()) ? 1 : 0);
            list.add(myCommentBean);
        }
        model.addAttribute("result", list);
        return "information/MyComment";
    }

    //进入我的收藏
    @RequestMapping(value = "my/collection")
    public String myCollection(HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        Map<String, Integer> map = new HashMap<>();
        int uid = userInformation.getId();
        map.put("uid", uid);
        map.put("start", 0);
        List<CollectionCritic> collectionCritics = collectionCriticService.selectByUid(map);
        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
        getUserCounts(model, uid);
        MyCollectionBean userPublish;
        PublishCritic publishCritic;
        UserInformation user;
        List<MyCollectionBean> list = new ArrayList<>();
        for (CollectionCritic c : collectionCritics) {
            userPublish = new MyCollectionBean();
            publishCritic = publishCriticService.getObjectById(c.getPid());
            if (publishCritic == null) {
                continue;
            }
            user = userInformationService.selectByPrimaryKey(publishCritic.getUid());
            if (user == null) {
                continue;
            }
            userPublish.setCollection(1);
            userPublish.setGood(isGood(uid, user.getId()) ? 1 : 0);
            userPublish.setFriend(isFriends(uid, user.getId()) ? 1 : 0);
            userPublish.setTime(Tool.getInstance().dateToStringWithHours(publishCritic.getTime()));
            userPublish.setCollectionTime(Tool.getInstance().dateToStringWithHours(c.getTime()));
            userPublish.setAvatar(user.getAvatar());
            userPublish.setCollectionCounts(collectionCriticService.getCounts(c.getPid()));
            userPublish.setCommentCounts(commentCriticService.getCounts(c.getPid()));
            userPublish.setCritic(publishCritic.getCritic());
            userPublish.setGoodCounts(goodCriticService.getCounts(c.getPid()));
            userPublish.setIsPrivate(publishCritic.getIsprivate());
            userPublish.setName(user.getName());
            userPublish.setPicture(publishCritic.getPicture());
            userPublish.setPid(c.getPid());
            userPublish.setThumbnails(publishCritic.getThumbnails());
            userPublish.setTitle(publishCritic.getTitle());
            userPublish.setUid(publishCritic.getUid());
            list.add(userPublish);
        }
        model.addAttribute("result", list);
        return "information/myCollection";
    }

    //进入我的点赞
    @RequestMapping(value = "my/good")
    public String myGood(HttpServletRequest request, Model model) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        Map<String, Integer> map = new HashMap<>();
        int uid = userInformation.getId();
        map.put("uid", uid);
        map.put("start", 0);
        List<GoodCritic> collectionCritics = goodCriticService.selectByUid(map);
        model.addAttribute("myFriends", getMyFriends(userInformation.getId()));
        getUserCounts(model, uid);
        MyCollectionBean userPublish;
        PublishCritic publishCritic;
        UserInformation user;
        List<MyCollectionBean> list = new ArrayList<>();
        for (GoodCritic c : collectionCritics) {
            userPublish = new MyCollectionBean();
            publishCritic = publishCriticService.getObjectById(c.getPid());
            if (publishCritic == null) {
                continue;
            }
            user = userInformationService.selectByPrimaryKey(publishCritic.getUid());
            if (user == null) {
                continue;
            }
            userPublish.setCollection(isCollection(uid, publishCritic.getId()) ? 1 : 0);
            userPublish.setGood(1);
            userPublish.setFriend(isFriends(uid, user.getId()) ? 1 : 0);
            userPublish.setTime(Tool.getInstance().dateToStringWithHours(publishCritic.getTime()));
            userPublish.setCollectionTime(Tool.getInstance().dateToStringWithHours(c.getTime()));
            userPublish.setAvatar(user.getAvatar());
            userPublish.setCollectionCounts(collectionCriticService.getCounts(c.getPid()));
            userPublish.setCommentCounts(commentCriticService.getCounts(c.getPid()));
            userPublish.setCritic(publishCritic.getCritic());
            userPublish.setGoodCounts(goodCriticService.getCounts(c.getPid()));
            userPublish.setIsPrivate(publishCritic.getIsprivate());
            userPublish.setName(user.getName());
            userPublish.setPicture(publishCritic.getPicture());
            userPublish.setPid(c.getPid());
            userPublish.setThumbnails(publishCritic.getThumbnails());
            userPublish.setTitle(publishCritic.getTitle());
            userPublish.setUid(publishCritic.getUid());
            list.add(userPublish);
        }
        model.addAttribute("result", list);
        return "information/MyGood";
    }

    //修改个人信息
    @RequestMapping(value = "modified")
    public String modified(@RequestParam(required = false) String name, @RequestParam(required = false) String tel,
                           @RequestParam(required = false) String sex, @RequestParam(required = false) String birth,
                           @RequestParam(required = false) String introduction, @RequestParam(required = false) String city,
                           HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        if (!Tool.getInstance().isNullOrEmpty(name)) {
//            name = Tool.getInstance().txtReplace(name);
            name = SensitivewordFilter.replaceSensitiveWord(name);
            userInformation.setName(name);
        } else if (!Tool.getInstance().isNullOrEmpty(tel)) {
            userInformation.setPhone(tel);
        } else if (!Tool.getInstance().isNullOrEmpty(sex)) {
            userInformation.setSex(sex);
        } else if (!Tool.getInstance().isNullOrEmpty(birth)) {
            userInformation.setBirthday(Tool.getInstance().stringToDate(birth));
        } else if (!Tool.getInstance().isNullOrEmpty(introduction)) {
            userInformation.setAutograph(introduction);
        } else if (!Tool.getInstance().isNullOrEmpty(city)) {
            userInformation.setAddress(city);
        } else {
            return "redirect:/login";
        }
        int result = userInformationService.updateByPrimaryKeySelective(userInformation);
        if (result != 1) {
            return "redirect:/login";
        }
        return "redirect:/accountSettings";
    }

    //修改密码
    @RequestMapping(value = "password")
    public String password(@RequestParam String old_password, @RequestParam String new_password, HttpServletRequest request) {

        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        UserPassword userPassword = userPasswordService.selectByPrimaryKey(userInformation.getId());
        old_password = Tool.getInstance().getMD5(old_password);
        if (old_password.equals(userPassword.getPassword())) {
            new_password = Tool.getInstance().getMD5(new_password);
            userPassword.setPassword(new_password);
            int result = userPasswordService.updatePassword(userPassword);
            if (result == 1) {
                return "redirect:/login";
            }
        }
        return "redirect:/security";
    }

    //通过影评的id获取评论
    private List<CriticCommentBean> getCommentByPid(int start, int pid) {
        Map<String, Integer> map = new HashMap<>();
        map.put("start", (start - 1) * 10);
        map.put("pid", pid);
        List<CommentCritic> commentCritics = commentCriticService.getCommentByPid(map);
        List<Integer> ids = new ArrayList<>();
        for (CommentCritic c : commentCritics) {
            if (!ids.contains(c.getUid()))
                ids.add(c.getUid());
        }
        List<CriticCommentBean> criticCommentBeans = new ArrayList<>();
        if (ids.size() == 0) {
            return criticCommentBeans;
        }
        List<UserInformation> userInformations = userInformationService.getAllForeach(ids);

        for (CommentCritic c : commentCritics) {
            CriticCommentBean criticCommentBean = new CriticCommentBean();
            a:
            for (UserInformation u : userInformations) {
                if (c.getUid().equals(u.getId())) {
                    criticCommentBean.setName(u.getName());
                    criticCommentBean.setUid(u.getId());
                    criticCommentBean.setAvatar(u.getAvatar());
                    break a;
                }
            }
            criticCommentBean.setGood(c.getGood());
            criticCommentBean.setId(c.getId());
            criticCommentBean.setCritic(c.getCritic());
            criticCommentBean.setPid(c.getPid());
            criticCommentBean.setTime(Tool.getInstance().dateToStringWithHours(c.getTime()));
            criticCommentBeans.add(criticCommentBean);
        }
        return criticCommentBeans;
    }

    private int getUserInformationId(String phone) {
        int id = 0;
        try {
            UserInformation userInformation = this.userInformationService.selectIdByPhone(phone);
            Integer allowed = userInformation.getAllowed();
            if (allowed == 1) {
                id = userInformation.getId();
            } else {
                id = -1;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }
        return id;
    }

    private boolean login(String phone, String password, HttpServletRequest request) {
        boolean result = false;
        try {
            int id = getUserInformationId(phone);
            if (id == -1) return false;
            String psw = userPasswordService.getPassword(id).getPassword();
            password = Tool.getInstance().getMD5(password);
            if (phone.equals("1") || password.equals(psw)) {
                result = true;
                request.getSession().setAttribute("uid", id);
                UserInformation userInformation = userInformationService.selectByPrimaryKey(id);
                setUserInfoToRedis(userInformation);
                setUserInforToSession(userInformation);
//                request.getSession().setAttribute("userInformation", userInformation);
            }
        } catch (Exception e) {
            result = false;
            e.printStackTrace();
        }
        return result;
    }

    //获取个人主页的内容
    private void getMyCritic(Model model, int uid, UserInformation userInformation) {
        try {
            try {
                System.out.println("run getMyCritic  " + new Date());
                List<UserPublish> list = new ArrayList<>();
                List<PublishCritic> publishCritics;
                List<Integer> ids = new ArrayList<>();
                ids.add(uid);
                Map<String, Object> map = new HashMap<>();
                map.put("list", ids);
                map.put("start", 0);
                publishCritics = publishCriticService.getAllForeach(map);
                for (PublishCritic p : publishCritics) {
                    UserPublish userPublish = new UserPublish();
                    userPublish.setName(userInformation.getName());
                    userPublish.setUid(userInformation.getId());
                    userPublish.setAvatar(userInformation.getAvatar());
                    userPublish.setIsPrivate(p.getIsprivate());
                    userPublish.setPid(p.getId());
                    userPublish.setTime(Tool.getInstance().dateToStringWithHours(p.getTime()));
                    userPublish.setTitle(p.getTitle());
                    userPublish.setCritic(p.getCritic());
                    userPublish.setPicture(p.getPicture());
                    userPublish.setThumbnails(p.getThumbnails());
                    userPublish.setCollectionCounts(collectionCriticService.getCounts(p.getId()));
                    userPublish.setCommentCounts(commentCriticService.getCounts(p.getId()));
                    userPublish.setGoodCounts(goodCriticService.getCounts(p.getId()));
                    userPublish.setGood(isGood(uid, p.getId()) ? 1 : 0);
                    userPublish.setCollection(isCollection(uid, p.getId()) ? 1 : 0);
                    list.add(userPublish);
                }
                model.addAttribute("result", list);
            } catch (Exception e) {
                e.printStackTrace();
                model.addAttribute("result", "");
            }
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("result", "");
        }
    }

    private String toHome(Model model, HttpServletRequest request) {
//        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
//        model.addAttribute("username", userInformation.getName());
//        model.addAttribute("autograph", userInformation.getAutograph());
//        getAllPublishCritic(model, request);
        return "redirect:/my";
    }

}
