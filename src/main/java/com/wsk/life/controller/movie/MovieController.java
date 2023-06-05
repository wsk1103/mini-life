package com.wsk.life.controller.movie;

import com.alibaba.fastjson.JSON;
import com.wsk.life.bean.AllInformation;
import com.wsk.life.bean.MovieBean;
import com.wsk.life.bean.OneSubject;
import com.wsk.life.bean.celebrity.CelebrityBean;
import com.wsk.life.bean.celebrity.USbox;
import com.wsk.life.bean.maoyan.Hot;
import com.wsk.life.bean.maoyan.cinema.Cinemas;
import com.wsk.life.bean.maoyan.cinemas.Cinema;
import com.wsk.life.bean.maoyan.movie.MovieInformation;
import com.wsk.life.controller.AsideController;
import com.wsk.life.pojo.UserInformation;
import com.wsk.life.redis.IRedisUtils;
import com.wsk.life.tool.HttpUtils;
import com.wsk.life.tool.POSTtoJSON;
import com.wsk.life.tool.Tool;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/10/22.
 */
@Controller
public class MovieController extends AsideController {
    private static final String ENCODE = "UTF-8";
    private static final String GET = "GET";
    private static final String POST = "POST";
    private static final String URL = "http://op.juhe.cn/onebox/movie/video";
    private static final String KEY = "e712295ae7ca460ec31624dd3dfe2094";
    private static final String DOUBAN_URL = "https://api.douban.com";

    public MovieController(IRedisUtils redisUtils) {
        super(redisUtils);
    }

    //模糊查询电影信息
    @RequestMapping(value = "search/movie/result")
    public String searchMovieResult(Model model, HttpServletRequest request, @ModelAttribute("name") String q) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        if (Tool.getInstance().isNullOrEmpty(q)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = DOUBAN_URL + "/v2/movie/search";
        Map<String, String> map = new HashMap<>();
        map.put("q", q);
        AllInformation information = getMovieInformation(url, map, ENCODE, GET);
        model.addAttribute("action", 3);
        model.addAttribute("movie", information);
        model.addAttribute("movie_name", q + "搜索结果");
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/SearchMovieResult";
    }

    //查看电影信息
    @RequestMapping(value = "search/movie/information")
    public String searchMovie(Model model, HttpServletRequest request, @RequestParam String id) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = DOUBAN_URL + "/v2/movie/subject/" + id;
//        System.out.println(url);
        Map map = new HashMap();
        String name = "";
        try {
            String result = HttpUtils.submitPostData(url, map, ENCODE, GET);
//            System.out.println(result);
            OneSubject subject = JSON.parseObject(result, OneSubject.class);
            String down = "ftp://www.wsk1103.cc:8088/down/" + id + "/" + subject.getTitle() + ".mkv";
            model.addAttribute("down", down);
            model.addAttribute("subject", subject);
            name = subject.getTitle();
        } catch (Exception e) {
            e.printStackTrace();
            model.addAttribute("result", "error");
        }
        MovieBean movieBean;
        Map<String, String> params = new HashMap<>();
        params.put("key", KEY);
        params.put("q", name);
        params.put("dtype", "json");
        try {
//            String sr = HttpUtils.submitPostData(URL, params, ENCODE, POST);
            String sr = POSTtoJSON.getInstance().post(URL, params, POST);
            movieBean = JSON.parseObject(sr, MovieBean.class);
        } catch (Exception e) {
            e.printStackTrace();
            movieBean = new MovieBean();
        }
        model.addAttribute("movie", movieBean);
        model.addAttribute("result", "success");
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "information/movieInformation";
    }

    //查看影人条目信息
    @RequestMapping(value = "celebrity/{id}")
    public String celebrity(@PathVariable String id, Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = DOUBAN_URL + "/v2/movie/celebrity/" + id;
//        System.out.println(url);
        Map<String, String> params = new HashMap<>();
        String result = HttpUtils.submitPostData(url, params, ENCODE, GET);
//        System.out.println(result);
        model.addAttribute("result", "success");
        CelebrityBean celebrityBean;
        try {
            celebrityBean = JSON.parseObject(result, CelebrityBean.class);
        } catch (Exception e) {
            e.printStackTrace();
            celebrityBean = new CelebrityBean();
            model.addAttribute("result", "error");
        }
        model.addAttribute("celebrity", celebrityBean);
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/celebrity";
    }

    //即将上映的电影
    @RequestMapping(value = "coming/soon")
    public String comingSoon(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = DOUBAN_URL + "/v2/movie/coming_soon";
        HashMap<String, String> params = new HashMap<>();
        AllInformation comingSoon = getMovieInformation(url, params, ENCODE, GET);
        model.addAttribute("movie", comingSoon);
        model.addAttribute("movie_name", "即将上映");
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/SearchMovieResult";
    }

    //top250
    @RequestMapping(value = "top")
    public String top(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = DOUBAN_URL + "/v2/movie/top250";
        HashMap<String, String> params = new HashMap<>();
        AllInformation allInformation = getMovieInformation(url, params, ENCODE, GET);
        model.addAttribute("movie", allInformation);
        model.addAttribute("movie_name", "高分电影");
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/SearchMovieResult";
    }

    //正在上映
    @RequestMapping(value = "coming")
    public String coming(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = "http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=20";
        String result = HttpUtils.maoyan(url);
        Hot hot = JSON.parseObject(result, Hot.class);
        model.addAttribute("movie", hot);
//        model.addAttribute("movie_name", "正在上映");
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/hot_movie";
    }

    //热映电影的详情，
    @RequestMapping(value = "hot/movie/information/{id}")
    public String hotMovieInformation(@PathVariable String id, Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:../login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = "http://m.maoyan.com/movie/" + id + ".json";
        String result = HttpUtils.maoyan(url);
        MovieInformation information = JSON.parseObject(result, MovieInformation.class);
        model.addAttribute("movie", information);
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/hot_movie_information";
    }

    //北美票房榜
    @RequestMapping(value = "us/box")
    public String usBox(Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:/login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = DOUBAN_URL + "/v2/movie/us_box";
        HashMap<String, String> params = new HashMap<>();
        USbox allInformation = getUsBox(url, params, ENCODE, GET);
        model.addAttribute("movie", allInformation);
        model.addAttribute("movie_name", "北美票房");
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/us_box";
    }

    //附件电影院
    @RequestMapping(value = "cinemas/{id}")
    public String cinemas(Model model, HttpServletRequest request, @PathVariable String id) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:../login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = "http://m.maoyan.com/cinemas.json";
        String result = HttpUtils.maoyan(url);
        Cinema cinema = JSON.parseObject(result, Cinema.class);

        url = "http://m.maoyan.com/movie/" + id + ".json";
        result = HttpUtils.maoyan(url);
        MovieInformation information = JSON.parseObject(result, MovieInformation.class);
        String img = information.getData().getMovieDetailModel().getImg();
        model.addAttribute("img", img);
        model.addAttribute("movie", cinema);
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/cinemas";
    }

    //单个影院
    @RequestMapping(value = "cinema/{id}")
    public String cinema(@PathVariable String id, Model model, HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            return "redirect:../login";
        }
        model.addAttribute("userInformation", userInformation);
        String url = "http://m.maoyan.com/showtime/wrap.json?cinemaid=" + id;
        String result = HttpUtils.maoyan(url);
        Cinemas cinema = JSON.parseObject(result, Cinemas.class);

//        url = "http://m.maoyan.com/movie/"+id+".json";
//        result = HttpUtils.maoyan(url);
//        MovieInformation information = JSON.parseObject(result, MovieInformation.class);
//        String img = information.getData().getMovieDetailModel().getImg();
//        model.addAttribute("img", img);
        model.addAttribute("movie", cinema);
        model.addAttribute("action", 3);
        getUserCounts(model, userInformation.getId());
        model.addAttribute("myFriends", getMyFriends(currentUserInfo().getId()));
        return "movie/cinema";
    }

/*    //获得点赞数量，收藏数量，评论数量
    private void getUserCounts(Model model, int uid) {
        model.addAttribute("comments", commentCriticService.getUserCounts(uid));
        model.addAttribute("critics", publishCriticService.getUserCounts(uid));
        model.addAttribute("goods", goodCriticService.getUserCounts(uid));
        model.addAttribute("collections", collectionCriticService.getUserCounts(uid));
    }*/

    private AllInformation getMovieInformation(String url, Map params, String encode, String action) {
        AllInformation information;
        try {
            String re = HttpUtils.submitPostData(url, params, encode, action);
            System.err.println("豆瓣电影：" + re);
            information = JSON.parseObject(re, AllInformation.class);
        } catch (Exception e) {
            e.printStackTrace();
            information = new AllInformation();
        }
        return information;
    }

    private USbox getUsBox(String url, Map params, String encode, String action) {
        USbox information;
        try {
            information = JSON.parseObject(HttpUtils.submitPostData(url, params, encode, action), USbox.class);
        } catch (Exception e) {
            e.printStackTrace();
            information = new USbox();
        }
        return information;
    }

/*    private void getFriend(Model model, int uid) {
        List<MyFriends> list = myFriendsService.getFid(uid);
        List<MyFriendsBean> ids = new ArrayList<>();
        for (MyFriends myFriends : list) {
            UserInformation userInformation = userInformationService.selectByPrimaryKey(myFriends.getFid());
            MyFriendsBean myFriendsBean = new MyFriendsBean();
            myFriendsBean.setAvatar(userInformation.getAvatar());
            myFriendsBean.setFid(myFriends.getFid());
            myFriendsBean.setId(myFriends.getId());
            myFriendsBean.setUid(myFriends.getUid());
            myFriendsBean.setName(userInformation.getName());
            ids.add(myFriendsBean);
        }
        model.addAttribute("myFriends", ids);
    }*/
}
