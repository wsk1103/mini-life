package com.wsk.life.controller.critic;

import com.wsk.life.bean.CriticCommentBean;
import com.wsk.life.bean.MyCollectionBean;
import com.wsk.life.bean.MyCommentBean;
import com.wsk.life.bean.UserPublish;
import com.wsk.life.config.FileConfig;
import com.wsk.life.controller.AsideController;
import com.wsk.life.pojo.*;
import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.springdata.admin.ReportRepository;
import com.wsk.life.springdata.admin.entity.CriticReportEntity;
import com.wsk.life.tool.SensitivewordFilter;
import com.wsk.life.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.*;

/**
 * Created by wsk1103 on 2017/5/1.
 */
@Controller
public class CriticController extends AsideController {

/*    @Resource(name = "publishCriticService")
    private PublishCriticService publishCriticService;
    @Resource
    private UserInformationService userInformationService;
    @Resource
    private CommentCriticService commentCriticService;
    @Resource
    private CollectionCriticService collectionCriticService;
    @Resource
    private GoodCriticService goodCriticService;
    @Resource
    private MyFriendsService myFriendsService;
*/
    @Autowired
    private ReportRepository reportRepository;
    @Autowired
    private FileConfig fileConfig;

    public CriticController(IRedisUtils redisUtils) {
        super(redisUtils);
    }

    //发表影评
    @RequestMapping(value = "/publishCritic", method = {RequestMethod.POST, RequestMethod.GET})
    @ResponseBody
    public Map publishCritic(HttpServletRequest request,
                             @RequestParam(value = "file_upload", required = false) MultipartFile file_upload,
                             @RequestParam String movie_name, @RequestParam String movie_content, @RequestParam int isPrivate) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        Map<String, String> map = new HashMap<>();
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            map.put("result", "0");
            return map;
        }
        String path = "", save = "";
//        movie_content = Tool.getInstance().txtReplace(movie_content);
        movie_content = SensitivewordFilter.replaceSensitiveWord(movie_content);
        movie_name = SensitivewordFilter.replaceSensitiveWord(movie_name);

        if (movie_content.length() < 1 || movie_name.length() < 1) {
            map.put("result", "0");
            return map;
        }
        if (movie_content.length() > 122 || movie_name.length() > 122) {
            map.put("result", "0");
            return map;
        }

        if (Tool.getInstance().isNullOrEmpty(file_upload)) {
            map.put("result", "0");
        } else {
            path = fileConfig.getSaveImages();
//            path += "/image/userPicture/";
            String fileName = Tool.getInstance().getRandom() + System.currentTimeMillis() + ".jpg";
            File image = new File(path + fileName);
            File isTest = new File(path);
            if (!isTest.exists()) {
//                path = "/data/images/";
                image = new File(path + fileName);
                boolean result = false;
                try {
                    result = image.createNewFile();
                } catch (IOException e) {
                    e.printStackTrace();
                }
                if (!result){
                    map.put("result", "0");
                    return map;
                }
            } else if (!image.getParentFile().exists()) {
                boolean result = image.mkdir();
                if (!result){
                    map.put("result", "0");
                    return map;
                }
            }
            try {
                file_upload.transferTo(image);
            } catch (Exception e) {
                map.put("result", "0");
                e.printStackTrace();
                return map;
            }
//            StringBuilder thumbnails = new StringBuilder();
//            thumbnails.append(path);
//            thumbnails.append("thumbnails/");
//            thumbnails.append(fileName);
//            path = path + fileName;
            //色情图片识别
//            if (!Tool.getInstance().checkPornograp(path)){
//                map.put("result", "2");
//                return map;
//            }
            if (Tool.getInstance().thumbnails(path + fileName, fileConfig.getSaveThum() + fileName)) {
                save = fileConfig.getSaveThumbnails() + fileName;
            } else {
                map.put("result", "0");
                return map;
            }
//            path = "/images/" + fileName;
            path = fileConfig.getSaveImage() + fileName;
//            save = fileConfig.getSaveThumbnails() + fileName;
        }
        PublishCritic publishCritic = new PublishCritic();
        publishCritic.setCritic(movie_content);
        publishCritic.setGood(0);
        publishCritic.setIsprivate(isPrivate);
        publishCritic.setPicture(path);
        publishCritic.setThumbnails(save);
        publishCritic.setTime(new Date());
        publishCritic.setTitle(movie_name);
        publishCritic.setUid((Integer) request.getSession().getAttribute("uid"));
        publishCritic.setAllow((short) 1);
        publishCritic.setModified(new Date());
        int id_result = publishCriticService.insertObject(publishCritic);
        if (id_result != 1) {
            map.put("result", "0");
            return map;
        }
        map.put("result", "1");
        return map;
    }

    @RequestMapping(value = "test")
    public String test(Model model) {
        try {
            List<Integer> list = new ArrayList<>();
            list.add(1);
            list.add(2);
//        list.add(3);
//        list.add(4);
            List<UserInformation> userInformations;
            List<PublishCritic> publishCritics;
            userInformations = userInformationService.getAllForeach(list);
            List<Integer> ids = new ArrayList<>();
            for (UserInformation userInformation : userInformations) {
                ids.add(userInformation.getId());
            }
            Map<String, Object> map = new HashMap<>();
            map.put("list", ids);
            map.put("start", 1);
            publishCritics = publishCriticService.getAllForeach(map);
            for (PublishCritic publishCritic : publishCritics) {
//                System.out.println(publishCritic.getCritic());
            }
            model.addAttribute("users", publishCritics);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "all";
    }

    @RequestMapping(value = "/getCommentCounts", method = RequestMethod.POST)
    @ResponseBody
    public int getCommentCounts(@RequestParam int id) {
        return commentCriticService.getCounts(id);
    }

    //获取用户的影评
    @RequestMapping(value = "/getUP", method = RequestMethod.POST)
    @ResponseBody
    public List getUserPublish(HttpServletRequest request, @RequestParam int start) {
//        System.out.println("run getUP   " + new Date() + "     " + start);
        List<UserPublish> list = new ArrayList<>();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return list;
        }
        int uid = userInformation.getId();
        list = getPublishCritic(uid, start);
        return list;
    }

    //通过用户id获取用户的影评
    @RequestMapping(value = "/getPublishCriticByUid", method = RequestMethod.POST)
    @ResponseBody
    public List getPublishCriticByUid(HttpServletRequest request, @RequestParam int uid, @RequestParam int start) {
        List<PublishCritic> list;
        List<UserPublish> userPublishes = new ArrayList<>();
        Map<String, Integer> map = new HashMap<>();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            map.put("isPrivate", 0);
        } else {
            int id = userInformation.getId();
            Map<String, Integer> myFriendMap = new HashMap<>();
            myFriendMap.put("uid", id);
            myFriendMap.put("fid", uid);
            MyFriends myFriends = myFriendsService.isFriends(myFriendMap);
            if (Tool.getInstance().isNullOrEmpty(myFriends)) {
                map.put("isPrivate", 0);
            } else {
                map.put("isPrivate", 1);
            }
        }
        map.put("uid", uid);
        map.put("start", (start - 1) * 10);
        list = publishCriticService.getPublishCriticByUid(map);
        UserInformation user = userInformationService.selectByPrimaryKey(uid);
        for (PublishCritic p : list) {
            UserPublish userPublish = new UserPublish();
            userPublish.setUid(user.getId());
            userPublish.setAvatar(user.getAvatar());
            userPublish.setName(user.getName());
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
            userPublishes.add(userPublish);
        }
        return userPublishes;
    }

    //获取热门的10条影评
    @RequestMapping(value = "/getHotCritic", method = RequestMethod.POST)
    @ResponseBody
    public List getHotCritic(@RequestParam int start, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            userInformation = new UserInformation();
            userInformation.setId(0);
        }
        List<PublishCritic> publishCritics = publishCriticService.getHotCritic((start - 1) * 10);
        List<Integer> list = new ArrayList<>();
        for (PublishCritic p : publishCritics) {
            list.add(p.getUid());
        }
        List<UserInformation> userInformations = userInformationService.getAllForeach(list);
        List<UserPublish> userPublishes = new ArrayList<>();
        for (PublishCritic p : publishCritics) {
            UserPublish userPublish = new UserPublish();
            a:
            for (UserInformation u : userInformations) {
                if (Objects.equals(p.getUid(), u.getId())) {
                    userPublish.setName(u.getName());
                    userPublish.setAvatar(u.getAvatar());
                    userPublish.setUid(u.getId());
                    break a;
                }
            }
            userPublish.setCommentCounts(commentCriticService.getCounts(p.getId()));
            userPublish.setGoodCounts(goodCriticService.getCounts(p.getId()));
            userPublish.setThumbnails(p.getThumbnails());
            userPublish.setIsPrivate(p.getIsprivate());
            userPublish.setCollectionCounts(collectionCriticService.getCounts(p.getId()));
            userPublish.setPicture(p.getPicture());
            userPublish.setCritic(p.getCritic());
            userPublish.setTitle(p.getTitle());
            userPublish.setPid(p.getId());
            userPublish.setFriend(isFriends(userInformation.getId(), p.getUid()) ? 1 : 0);
            userPublish.setTime(Tool.getInstance().dateToStringWithHours(p.getTime()));
            userPublish.setGood(isGood(userInformation.getId(), p.getId()) ? 1 : 0);
            userPublish.setCollection(isCollection(userInformation.getId(), p.getId()) ? 1 : 0);
            userPublishes.add(userPublish);
        }
//        model.addAttribute("result", userPublishes);
//        model.addAttribute("userInformation", userInformation);
        return userPublishes;
    }

    //通过影评id获取对应的评论
    @RequestMapping(value = "/getCommentByPid", method = RequestMethod.POST)
    @ResponseBody
    public List getCommentByPid(@RequestParam int start, @RequestParam int pid) {
        Map<String, Integer> map = new HashMap<>();
        map.put("start", (start - 1) * 10);
        map.put("pid", pid);
        List<CommentCritic> commentCritics = commentCriticService.getCommentByPid(map);
        List<Integer> ids = new ArrayList<>();
        for (CommentCritic c : commentCritics) {
            if (!ids.contains(c.getUid())) {
                ids.add(c.getUid());
            }
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
                if (Objects.equals(c.getUid(), u.getId())) {
                    criticCommentBean.setAvatar(u.getAvatar());
                    criticCommentBean.setName(u.getName());
                    criticCommentBean.setUid(u.getId());
                    break a;
                }
            }
            criticCommentBean.setCritic(c.getCritic());
            criticCommentBean.setGood(c.getGood());
            criticCommentBean.setId(c.getId());
            criticCommentBean.setPid(c.getPid());
            criticCommentBean.setTime(Tool.getInstance().dateToStringWithHours(c.getTime()));
            criticCommentBeans.add(criticCommentBean);
        }
        return criticCommentBeans;
    }

    //取消关注，举报，+关注
    @RequestMapping(value = "/action", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Integer> action(HttpServletRequest request, @RequestParam int id,
                                       @RequestParam String action) {
        Map<String, Integer> map = new HashMap<>();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            map.put("result", 0);
            return map;
        }
//        action = action.substring(1);
        int uid = userInformation.getId();
        int result = -1;
        Map<String, Integer> map1;
        try {
            switch (action) {
                case "addattention":
                    if (Tool.getInstance().isNullOrEmpty(id)) {
                        map.put("result", 2);//关注失败
                        return map;
                    }
                    Map<String, Integer> ids = new HashMap<>();
                    ids.put("uid", uid);
                    ids.put("fid", id);
                    if (Tool.getInstance().isNullOrEmpty(myFriendsService.getFriends(ids))) {
                        MyFriends myFriends = new MyFriends();
                        myFriends.setAddtime(new Date());
                        myFriends.setAllow((short) 1);
                        myFriends.setFid(id);
                        myFriends.setModified(new Date());
                        myFriends.setUid(uid);
                        result = myFriendsService.insertSelective(myFriends);
                        if (result != 1) {
                            map.put("result", 2);//关注失败
                            return map;
                        } else {
                            map.put("result", 1);//关注成功
                            return map;
                        }
                    } else {
                        MyFriends myFriends = myFriendsService.getFriends(ids);
                        myFriends.setAllow((short) 1);
                        myFriends.setModified(new Date());
                        result = myFriendsService.updateByPrimaryKeySelective(myFriends);
                        if (result == 1) {
                            map.put("result", 1);
                            return map;
                        } else {
                            map.put("result", 2);
                            return map;
                        }
                    }
                case "unsubscribe":
                    ids = new HashMap<>();
                    ids.put("uid", uid);
                    ids.put("fid", id);
                    MyFriends myFriends = myFriendsService.getFriends(ids);
                    if (!Tool.getInstance().isNullOrEmpty(myFriends)) {
                        if (myFriends.getAllow() == 1) {
                            myFriends.setAllow((short) 0);
                            myFriends.setModified(new Date());
                            try {
                                result = myFriendsService.updateByPrimaryKey(myFriends);
                            } catch (Exception e) {
                                e.printStackTrace();
                            }
                            if (result == 1) {
                                map.put("result", 7);
                                return map;
                            } else {
                                map.put("result", 2);
                                return map;
                            }
                        } else {
                            map.put("result", 2);
                            return map;
                        }
                    } else {
                        map.put("result", 2);
                        return map;
                    }
                case "report":
                    map.put("result", 3);
                    CriticReportEntity criticReportEntity = new CriticReportEntity();
                    criticReportEntity.setCtime(new Timestamp(System.currentTimeMillis()));
                    criticReportEntity.setPid(id);
                    criticReportEntity.setUid(uid);
                    reportRepository.save(criticReportEntity);
                    return map;
                case "delcritic":
                    if (Tool.getInstance().isNullOrEmpty(id)) {
                        map.put("result", 2);
                        return map;
                    }
                    map1 = new HashMap<>(4);
                    map1.put("id", id);
                    map1.put("uid", uid);
                    PublishCritic publishCritic = publishCriticService.selectByIdAndAllow(map1);
                    if (Tool.getInstance().isNullOrEmpty(publishCritic)) {
                        map.put("result", 2);
                        return map;
                    }
                    publishCritic.setAllow((short) 0);
                    publishCritic.setModified(new Date());
                    result = publishCriticService.updateObject(publishCritic);
                    if (result == 1) {
                        map.put("result", 4);
                        return map;
                    } else {
                        map.put("result", 2);
                        return map;
                    }
                case "translation":
                    if (Tool.getInstance().isNullOrEmpty(id)) {
                        map.put("result", 2);
                        return map;
                    }
                    publishCritic = publishCriticService.getObjectById(id);
//                publishCritic.setAllow((short) 0);
                    publishCritic.setIsprivate(1);
                    publishCritic.setModified(new Date());
                    result = publishCriticService.updateObject(publishCritic);
                    if (result == 1) {
                        map.put("result", 5);
                        return map;
                    } else {
                        map.put("result", 2);
                        return map;
                    }
                case "delcomment":
                    if (Tool.getInstance().isNullOrEmpty(id)) {
                        map.put("result", 2);
                        return map;
                    }
                    map1 = new HashMap<>();
                    map1.put("id", id);
                    map1.put("uid", uid);
                    CommentCritic commentCritic = commentCriticService.selectByIdAndAllow(map1);
                    if (Tool.getInstance().isNullOrEmpty(commentCritic)) {
                        map.put("result", 2);
                        return map;
                    }
                    commentCritic.setAllow((short) 0);
                    commentCritic.setModified(new Date());
                    result = commentCriticService.updateByPrimaryKeySelective(commentCritic);
                    if (result == 1) {
                        map.put("result", 6);
                        return map;
                    } else {
                        map.put("result", 2);
                        return map;
                    }
                default:
                    map.put("result", 2);
                    return map;
            }
        } catch (Exception e) {
            map.put("result", 2);
            return map;
        }
    }

    //获取更多我的评论
    @RequestMapping(value = "/getMyComment", method = RequestMethod.POST)
    @ResponseBody
    public List getMyComment(@RequestParam int start, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        List<MyCommentBean> list = new ArrayList<>();
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return list;
        }
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", userInformation.getId());
        map.put("start", (start - 1) * 10);
        List<CommentCritic> commentCritics = commentCriticService.selectByUid(map);
        MyCommentBean myCommentBean;
        UserInformation user;
        PublishCritic publishCritic;
        for (CommentCritic c : commentCritics) {
            user = userInformationService.selectByPrimaryKey(c.getUid());
            publishCritic = publishCriticService.getObjectById(c.getPid());
            myCommentBean = new MyCommentBean();
            myCommentBean.setAvatar(userInformation.getAvatar());
            myCommentBean.setCritic(publishCritic.getCritic());
            myCommentBean.setComment(c.getCritic());
            myCommentBean.setFid(userInformation.getId());
            myCommentBean.setPid(publishCritic.getId());
            myCommentBean.setCommentTime(Tool.getInstance().dateToStringWithHours(c.getTime()));
            myCommentBean.setName(user.getName());
            myCommentBean.setCid(c.getId());
            list.add(myCommentBean);
        }
        return list;
    }

    //获得更多我的收藏
    @RequestMapping(value = "/getMyCollection")
    @ResponseBody
    public List getMyCollection(@RequestParam int start, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        List<MyCollectionBean> list = new ArrayList<>();
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return list;
        }
        Map<String, Integer> map = new HashMap<>();
        int uid = userInformation.getId();
        map.put("uid", uid);
        map.put("start", (start - 1) * 10);
        List<CollectionCritic> collectionCritics;
        try {
            collectionCritics = collectionCriticService.selectByUid(map);
        } catch (Exception e) {
            e.printStackTrace();
            return list;
        }
        PublishCritic publishCritic;
        MyCollectionBean myCollectionBean;
        UserInformation user;
        for (CollectionCritic c : collectionCritics) {
            myCollectionBean = new MyCollectionBean();
            try {
                publishCritic = publishCriticService.getObjectById(c.getPid());
                user = userInformationService.selectByPrimaryKey(publishCritic.getUid());
                myCollectionBean.setCollectionCounts(collectionCriticService.getCounts(c.getPid()));
                myCollectionBean.setCommentCounts(commentCriticService.getCounts(c.getPid()));
                myCollectionBean.setGoodCounts(goodCriticService.getCounts(c.getPid()));
            } catch (Exception e) {
                return list;
            }
            myCollectionBean.setCollection(1);
            myCollectionBean.setGood(isGood(uid, user.getId()) ? 1 : 0);
            myCollectionBean.setFriend(isFriends(uid, user.getId()) ? 1 : 0);
            myCollectionBean.setTime(Tool.getInstance().dateToStringWithHours(publishCritic.getTime()));
            myCollectionBean.setCollectionTime(Tool.getInstance().dateToStringWithHours(c.getTime()));
            myCollectionBean.setAvatar(user.getAvatar());
            myCollectionBean.setCritic(publishCritic.getCritic());
            myCollectionBean.setIsPrivate(publishCritic.getIsprivate());
            myCollectionBean.setName(user.getName());
            myCollectionBean.setPicture(publishCritic.getPicture());
            myCollectionBean.setPid(c.getPid());
            myCollectionBean.setThumbnails(publishCritic.getThumbnails());
            myCollectionBean.setTitle(publishCritic.getTitle());
            myCollectionBean.setUid(publishCritic.getUid());
            list.add(myCollectionBean);
        }
        return list;
    }

    //查看我更多的赞
    @RequestMapping(value = "/getMyGood")
    @ResponseBody
    public List getMyGood(@RequestParam int start, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        List<MyCollectionBean> list = new ArrayList<>();
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return list;
        }
        Map<String, Integer> map = new HashMap<>();
        int uid = userInformation.getId();
        map.put("uid", uid);
        map.put("start", (start - 1) * 10);
        List<GoodCritic> goodCritics;
        try {
            goodCritics = goodCriticService.selectByUid(map);
        } catch (Exception e) {
            e.printStackTrace();
            return list;
        }
        PublishCritic publishCritic;
        MyCollectionBean myCollectionBean;
        UserInformation user;
        for (GoodCritic c : goodCritics) {
            myCollectionBean = new MyCollectionBean();
            try {
                publishCritic = publishCriticService.getObjectById(c.getPid());
                user = userInformationService.selectByPrimaryKey(publishCritic.getUid());
                myCollectionBean.setCommentCounts(commentCriticService.getCounts(c.getPid()));
                myCollectionBean.setGoodCounts(goodCriticService.getCounts(c.getPid()));
                myCollectionBean.setCollectionCounts(collectionCriticService.getCounts(c.getPid()));
            } catch (Exception e) {
                return list;
            }
            myCollectionBean.setCollection(isCollection(uid, publishCritic.getId()) ? 1 : 0);
            myCollectionBean.setGood(1);
            myCollectionBean.setFriend(isFriends(uid, user.getId()) ? 1 : 0);
            myCollectionBean.setTime(Tool.getInstance().dateToStringWithHours(publishCritic.getTime()));
            myCollectionBean.setCollectionTime(Tool.getInstance().dateToStringWithHours(c.getTime()));
            myCollectionBean.setAvatar(user.getAvatar());
            myCollectionBean.setCritic(publishCritic.getCritic());
            myCollectionBean.setIsPrivate(publishCritic.getIsprivate());
            myCollectionBean.setName(user.getName());
            myCollectionBean.setPicture(publishCritic.getPicture());
            myCollectionBean.setPid(c.getPid());
            myCollectionBean.setThumbnails(publishCritic.getThumbnails());
            myCollectionBean.setTitle(publishCritic.getTitle());
            myCollectionBean.setUid(publishCritic.getUid());
            list.add(myCollectionBean);
        }
        return list;
    }

    //评论影评
    @RequestMapping(value = "/commentCritic")
    @ResponseBody
    public Map commentCritic(HttpServletRequest request, @RequestParam String comment, @RequestParam int pid) {
        Map<String, Integer> map = new HashMap<>();
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            map.put("result", 0);
            return map;
        }
//        comment = Tool.getInstance().txtReplace(comment);
        comment = SensitivewordFilter.replaceSensitiveWord(comment);
        CommentCritic commentCritic = new CommentCritic();
        commentCritic.setModified(new Date());
        commentCritic.setCritic(comment);
        commentCritic.setPid(pid);
        commentCritic.setUid(userInformation.getId());
        commentCritic.setTime(new Date());
        int result;
        try {
            result = commentCriticService.insertSelective(commentCritic);
        } catch (Exception e) {
            result = 0;
        }
        if (result == 1) {
            map.put("result", 1);
            return map;
        } else {
            map.put("result", 0);
            return map;
        }
    }

    //点赞
    @RequestMapping(value = "/addGood")
    @ResponseBody
    public int addGood(HttpServletRequest request, @RequestParam int pid) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return 0;
        }
        int uid = userInformation.getId();
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("pid", pid);
        GoodCritic goodCritic;
        try {
            goodCritic = goodCriticService.selectGoodAndAllow(map);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
        if (Tool.getInstance().isNullOrEmpty(goodCritic)) {
            goodCritic = new GoodCritic();
            goodCritic.setAllow((short) 1);
            goodCritic.setModified(new Date());
            goodCritic.setPid(pid);
            goodCritic.setTime(new Date());
            goodCritic.setUid(uid);
            int result;
            try {
                result = goodCriticService.insertSelective(goodCritic);
            } catch (Exception e) {
                return 0;
            }
            return result;
        }
        goodCritic.setModified(new Date());
        goodCritic.setAllow((short) 1);
        return goodCriticService.updateByPrimaryKeySelective(goodCritic);
    }

    //取消点赞
    @RequestMapping(value = "/delGood")
    @ResponseBody
    public int delGood(HttpServletRequest request, @RequestParam int pid) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return 0;
        }
        int uid = userInformation.getId();
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("pid", pid);
        GoodCritic goodCritic;
        try {
            goodCritic = goodCriticService.selectGoodAndAllow(map);
        } catch (Exception e) {
            e.printStackTrace();
            return 0;
        }
        if (Tool.getInstance().isNullOrEmpty(goodCritic)) {
            goodCritic = new GoodCritic();
            goodCritic.setAllow((short) 0);
            goodCritic.setModified(new Date());
            goodCritic.setPid(pid);
            goodCritic.setTime(new Date());
            goodCritic.setUid(uid);
            return goodCriticService.insertSelective(goodCritic);
        }
        goodCritic.setModified(new Date());
        goodCritic.setAllow((short) 0);
        return goodCriticService.updateByPrimaryKeySelective(goodCritic);
    }

    //收藏
    @RequestMapping(value = "/addCollection")
    @ResponseBody
    public int addCollection(HttpServletRequest request, @RequestParam int pid) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return 0;
        }
        int uid, result;
        uid = userInformation.getId();
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("pid", pid);
        CollectionCritic collectionCritic = collectionCriticService.selectCollectionAndAllow(map);
        if (Tool.getInstance().isNullOrEmpty(collectionCritic)) {
            collectionCritic = new CollectionCritic();
            collectionCritic.setAllow((short) 1);
            collectionCritic.setModified(new Date());
            collectionCritic.setPid(pid);
            collectionCritic.setUid(uid);
            collectionCritic.setTime(new Date());
            try {
                result = collectionCriticService.insertSelective(collectionCritic);
                return result;
            } catch (Exception e) {
                return 0;
            }
        }
        collectionCritic.setAllow((short) 1);
        collectionCritic.setModified(new Date());
        try {
            result = collectionCriticService.updateByPrimaryKeySelective(collectionCritic);
            return result;
        } catch (Exception e) {
            return 0;
        }
    }

    //取消收藏
    @RequestMapping(value = "/delCollection")
    @ResponseBody
    public int delCollection(HttpServletRequest request, @RequestParam int pid) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return 0;
        }
        int uid, result;
        uid = userInformation.getId();
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", uid);
        map.put("pid", pid);
        CollectionCritic collectionCritic = collectionCriticService.selectCollectionAndAllow(map);
        if (Tool.getInstance().isNullOrEmpty(collectionCritic)) {
            collectionCritic = new CollectionCritic();
            collectionCritic.setAllow((short) 0);
            collectionCritic.setModified(new Date());
            collectionCritic.setPid(pid);
            collectionCritic.setUid(uid);
            collectionCritic.setTime(new Date());
            try {
                result = collectionCriticService.insertSelective(collectionCritic);
                return result;
            } catch (Exception e) {
                return 0;
            }
        }
        collectionCritic.setAllow((short) 0);
        collectionCritic.setModified(new Date());
        try {
            result = collectionCriticService.updateByPrimaryKeySelective(collectionCritic);
            return result;
        } catch (Exception e) {
            return 0;
        }
    }

    private List<UserPublish> getPublishCritic(int uid, int start) {
        List<UserPublish> list = new ArrayList<>();
//        int uid = userInformation.getId();
        List<MyFriends> myFriends;
        List<PublishCritic> publishCritics;
        List<UserInformation> userInformations;
        myFriends = myFriendsService.getFid(uid);
        List<Integer> ids = new ArrayList<>();
        ids.add(uid);
        for (MyFriends myFriend : myFriends) {
            ids.add(myFriend.getFid());
        }
        start = (start - 1) * 10;
        userInformations = userInformationService.getAllForeach(ids);
        Map<String, Object> map = new HashMap<>();
        map.put("list", ids);
        map.put("start", start);
        publishCritics = publishCriticService.getAllForeach(map);
        for (PublishCritic p : publishCritics) {
            UserPublish userPublish = new UserPublish();
            a:
            for (UserInformation u : userInformations) {
                if (u.getId() == p.getUid()) {
                    userPublish.setAvatar(u.getAvatar());
                    userPublish.setName(u.getName());
                    userPublish.setUid(u.getId());
                    break a;
                }
            }
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
        return list;
    }

/*    //判断是否为关注,好友
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
    }*/
}
