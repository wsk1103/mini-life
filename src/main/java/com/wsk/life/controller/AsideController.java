package com.wsk.life.controller;

import com.wsk.life.bean.MyFriendsBean;
import com.wsk.life.bean.UserPublish;
import com.wsk.life.pojo.MyFriends;
import com.wsk.life.pojo.PublishCritic;
import com.wsk.life.pojo.UserInformation;
import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.service.*;
import com.wsk.life.tool.Tool;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;

import javax.annotation.Resource;
import java.util.*;

/**
 * Author: wsk
 * Date: 2018/7/11 0011
 * Des: 侧边栏控制
 */
@Controller
public class AsideController extends BaseController {

    @Resource(name = "userInformationService")
    public UserInformationService userInformationService;
    @Resource
    public PublishCriticService publishCriticService;
    @Resource
    public MyFriendsService myFriendsService;
    @Resource
    public CommentCriticService commentCriticService;
    @Resource
    public CollectionCriticService collectionCriticService;
    @Resource
    public GoodCriticService goodCriticService;

    public AsideController(IRedisUtils redisUtils) {
        super(redisUtils);
    }

    //获取所有影评，包括好友
    public void getAllPublishCritic(Model model, int uid) {
        try {
            try {
//                System.out.println("run getUP  " + new Date());
                List<UserPublish> list = new ArrayList<>();
                List<MyFriends> myFriends;
                List<PublishCritic> publishCritics;
                List<UserInformation> userInformations;
                myFriends = myFriendsService.getFid(uid);
                List<Integer> ids = new ArrayList<>();
                ids.add(uid);
                for (MyFriends myFriend : myFriends) {
                    ids.add(myFriend.getFid());
//                request.getSession().setAttribute("user"+myFriend.getFid(),myFriend);
                }
                userInformations = userInformationService.getAllForeach(ids);
                Map<String, Object> map = new HashMap<>();
                map.put("list", ids);
                map.put("start", 0);
                publishCritics = publishCriticService.getAllForeach(map);
                for (PublishCritic p : publishCritics) {
                    UserPublish userPublish = new UserPublish();
                    for (UserInformation u : userInformations) {
                        if (u.getId().equals(p.getUid())) {
                            userPublish.setName(u.getName());
                            userPublish.setUid(u.getId());
                            userPublish.setAvatar(u.getAvatar());
                        }
                    }
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

    //通过id获取用户的基本信息
    public UserInformation getUserInformationById(int id) {
        return userInformationService.selectByPrimaryKey(id);
    }

    //判断是否为关注,好友
    public Boolean isFriends(int uid, int fid) {
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

    //获取好友列表
    public List<MyFriendsBean> getMyFriends(int uid) {
        List<MyFriends> list = myFriendsService.getFid(uid);
        List<MyFriendsBean> ids = new ArrayList<>();
        for (MyFriends myFriends : list) {
            UserInformation userInformation = userInformationService.selectByPrimaryKey(myFriends.getFid());
            MyFriendsBean myFriendsBean = new MyFriendsBean();
            myFriendsBean.setAvatar(userInformation.getAvatar());
            myFriendsBean.setId(myFriends.getId());
            myFriendsBean.setFid(myFriends.getFid());
            myFriendsBean.setName(userInformation.getName());
            myFriendsBean.setUid(myFriends.getUid());
            ids.add(myFriendsBean);
        }
        return ids;
    }

    //获得点赞数量，收藏数量，评论数量
    public void getUserCounts(Model model, int uid) {
        model.addAttribute("comments", commentCriticService.getUserCounts(uid));
        model.addAttribute("critics", publishCriticService.getUserCounts(uid));
        model.addAttribute("goods", goodCriticService.getUserCounts(uid));
        model.addAttribute("collections", collectionCriticService.getUserCounts(uid));
    }

    //是否点赞过
    public boolean isGood(int uid, int pid) {
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("pid", pid);
        return !Tool.getInstance().isNullOrEmpty(goodCriticService.selectGood(map));
    }

    //是否收藏过
    public boolean isCollection(int uid, int pid) {
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("pid", pid);
        return !Tool.getInstance().isNullOrEmpty(collectionCriticService.selectCollection(map));
    }

    public void setAsideModel(Model model) {
        model.addAttribute("myFriends", getMyFriends(currentUserInfoFromRedis().getId()));
        model.addAttribute("userInformation", currentUserInfoFromRedis());
        model.addAttribute("username", currentUserInfoFromRedis().getName());
        model.addAttribute("autograph", currentUserInfoFromRedis().getAutograph());
        int uid = currentUserInfoFromRedis().getId();
        getAllPublishCritic(model, uid);
        getUserCounts(model, uid);
    }
}
