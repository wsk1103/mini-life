package com.wsk.life.controller.admin;

import com.wsk.life.book.service.BookRepository;
import com.wsk.life.dao.AdminActionMapper;
import com.wsk.life.dao.PublishCriticMapper;
import com.wsk.life.jdbc.BaseDao;
import com.wsk.life.pojo.AdminAction;
import com.wsk.life.pojo.PublishCritic;
import com.wsk.life.springdata.WangYiMusicRepository;
import com.wsk.life.springdata.admin.AdminRepository;
import com.wsk.life.springdata.admin.UserInformationRepository;
import com.wsk.life.springdata.admin.entity.AdmininformationEntity;
import com.wsk.life.springdata.admin.entity.UserinformationEntity;
import com.wsk.life.springdata.admin.more.CriticEntity;
import com.wsk.life.springdata.admin.more.LogEntity;
import com.wsk.life.springdata.admin.more.ReportEntity;
import com.wsk.life.tool.Tool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

/**
 * @DESCRIPTION : 管理员控制台
 * @AUTHOR : sk
 * @TIME : 2018/3/8  14:16
 */
@Controller
@RequestMapping("admin")
public class AdminController {
    @Autowired
    private UserInformationRepository userInformationRepository;

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private AdminActionMapper adminActionMapper;

    @Autowired
    private PublishCriticMapper publishCriticMapper;

    @Autowired
    private WangYiMusicRepository musicRepository;

    @Autowired
    private BookRepository bookRepository;


    @RequestMapping("login")
    public String login(Model model, HttpServletRequest request) {

        return "admin/login";
    }

    @RequestMapping(value = "index")
    public String login(@RequestParam String username, @RequestParam String password,
                        Model model, HttpServletRequest request) {
//        ModelAndView modelAndView = new ModelAndView();
        if (Tool.getInstance().isNullOrEmpty(username) || Tool.getInstance().isNullOrEmpty(password)) {
            model.addAttribute("error", "账号或者密码不能为空");
            return "admin/login";
        }
        AdmininformationEntity entity = adminRepository.findAdmininformationEntityByPhone(username);
        if (Tool.getInstance().isNullOrEmpty(entity) || !password.equals(entity.getPassword())) {
            model.addAttribute("error", "账号或者密码错误");
            return "admin/login";
        }
        request.getSession().setAttribute("adminInformation", entity);
        model.addAttribute("name", entity.getName());
        return "admin/index";
    }

    @RequestMapping(value = "findAllUser")
    public String findAll(@RequestParam(required = false) String start, @RequestParam(required = false) String end,
                          Model model, HttpServletRequest request) {
        int s, e;
        if (Tool.getInstance().isNullOrEmpty(start)) {
            s = 0;
        } else {
            s = Integer.parseInt(start);
        }
        if (Tool.getInstance().isNullOrEmpty(end)) {
            e = 0;
        } else {
            e = Integer.parseInt(end);
        }
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            return "admin/login";
        }
        List<UserinformationEntity> entities = userInformationRepository.getAll(s, e);
        model.addAttribute("entity", entities);
//        model.addAttribute("name", entity.getName());
        return "admin/all_user";
    }

    @RequestMapping(value = "findUser")
    public String findUser(@RequestParam String id, @RequestParam String username, @RequestParam String phone,
                           Model model, HttpServletRequest request) {
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            return "admin/login";
        }
        List<UserinformationEntity> entities;
        if (Tool.getInstance().isNotNull(id)) {
            entities = userInformationRepository.findById(Integer.parseInt(id));
        } else if (Tool.getInstance().isNotNull(username)) {
            entities = userInformationRepository.findByNameStartsWith(username);
        } else if (Tool.getInstance().isNotNull(phone)) {
            entities = userInformationRepository.findByPhone(phone);
        } else {
            entities = userInformationRepository.getAll(0, 50);
        }
        model.addAttribute("entity", entities);
        return "admin/all_user";
    }

    @RequestMapping(value = "findAllReport")
    public String findReport(Model model, HttpServletRequest request) {
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            return "admin/login";
        }
//        List<ReportEntity> entities = reportRepository.find();
        BaseDao dao = new BaseDao();
        String sql = "SELECT cr.uid,cr.pid,cr.ctime,pc.time AS ptime,pc.critic,pc.picture AS image,ui.`name` AS username, ui.phone FROM `critic_report` cr LEFT JOIN publishcritic pc ON cr.pid = pc.id LEFT JOIN userinformation ui ON ui.id = cr.uid ";
        List<ReportEntity> entities = null;
        try {
            entities = dao.list(sql, ReportEntity.class);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        for (ReportEntity re : entities) {
            if (Tool.getInstance().isNotNull(re.getImage()) && !re.getImage().startsWith("/")) {
                re.setImage("/" + re.getImage());
            }
        }
        model.addAttribute("entity", entities);
//        return "admin/report";
        return "admin/all_report";
    }

    @RequestMapping(value = "findAllCritic")
    public String findCritic(Model model, HttpServletRequest request) {
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            return "admin/login";
        }
        BaseDao dao = new BaseDao();
        String sql = "SELECT pc.id,pc.critic,pc.picture,pc.time as ptime,pc.title,ui.id as uid, ui.`name` as username,ui.phone FROM `publishcritic` pc LEFT JOIN userinformation ui ON pc.uid = ui.id ORDER BY pc.time desc limit 50 ;";
        List<CriticEntity> entities = null;
        try {
            entities = dao.list(sql, CriticEntity.class);
            for (CriticEntity re : entities) {
                if (Tool.getInstance().isNotNull(re.getPicture()) && !re.getPicture().startsWith("/")) {
                    re.setPicture("/" + re.getPicture());
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        model.addAttribute("entity", entities);
//        return "admin/report";
        return "admin/all_critic";
    }

    //禁用用户
    @RequestMapping(value = "changeAllowed")
    public void changeAllowed(@RequestParam(value = "allowed") int allowed, @RequestParam("uid") int uid, HttpServletRequest request) {
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            System.out.println("管理员未登录!");
            return;
        }
        try {
            int result = userInformationRepository.update(uid, allowed);
            AdminAction adminAction = new AdminAction();
            adminAction.setAction("管理员" + entity.getName() + ":禁用用户:" + uid + ",成功");
            adminAction.setAid(entity.getId());
            adminAction.setModified(new Date());
            if (result < 1) {
                System.out.println("更新失败!");
                adminAction.setAction("管理员" + entity.getName() + ":禁用用户:" + uid + ",失败");
            }
            adminActionMapper.insert(adminAction);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //信息审核和举报审核
    @RequestMapping(value = "change")
    public void change(@RequestParam(value = "allowed") int allowed, @RequestParam("uid") int uid, HttpServletRequest request) {
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            System.out.println("管理员未登录!");
            return;
        }
        try {
            PublishCritic publishCritic = new PublishCritic();
            publishCritic.setId(uid);
            publishCritic.setModified(new Date());
            publishCritic.setAllow((short) 0);
            int result = publishCriticMapper.updateByPrimaryKeySelective(publishCritic);
            AdminAction adminAction = new AdminAction();
            adminAction.setAction("管理员" + entity.getName() + ":禁用用户:" + uid + ",成功");
            adminAction.setAid(entity.getId());
            adminAction.setModified(new Date());
            if (result < 1) {
                System.out.println("更新失败!");
                adminAction.setAction("管理员" + entity.getName() + ":禁用用户:" + uid + ",失败");
            }
            adminActionMapper.insert(adminAction);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    //查看操作记录
    @RequestMapping(value = "findAction")
    public String findAction(Model model, HttpServletRequest request){
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            return "admin/login";
        }
        String sql = "select a1.id, a2.`name` as adminname, a2.phone, a1.modified as time, a1.action from adminaction a1 LEFT JOIN admininformation a2 ON a1.aid = a2.id ";
        BaseDao dao = new BaseDao();
        List<LogEntity> entities = null;
        try {
            entities = dao.list(sql, LogEntity.class);
        } catch (SQLException e) {
            e.printStackTrace();
        }
        model.addAttribute("entity", entities);
        return "admin/all_log";
    }

    //改变音乐的禁用状态
    @RequestMapping(value = "changeMusicStatus")
    public void changeMusicStatus(@RequestParam(value = "songId") long songid,
                                  @RequestParam(value = "status") int status,
                                  HttpServletRequest request) {
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            System.out.println("管理员未登录!");
            return;
        }
        try {
            int result = musicRepository.changeMusicStatus(songid, status);
            AdminAction adminAction = new AdminAction();
            adminAction.setAction("管理员" + entity.getName() + ":禁用音乐:" + songid + ",成功");
            adminAction.setAid(entity.getId());
            adminAction.setModified(new Date());
            if (result < 1) {
                System.out.println("更新失败!");
                adminAction.setAction("管理员" + entity.getName() + ":禁用音乐:" + songid + ",失败");
            }
            adminActionMapper.insert(adminAction);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    //改变图书的禁用状态
    @RequestMapping(value = "changeBookStatus")
    public void changeBookStatus(@RequestParam(value = "bookId") int bookid,
                                 @RequestParam(value = "status") int status,
                                 HttpServletRequest request) {
        AdmininformationEntity entity = (AdmininformationEntity) request.getSession().getAttribute("adminInformation");
        if (Tool.getInstance().isNullOrEmpty(entity)) {
            System.out.println("管理员未登录!");
            return;
        }
        try {
            int result = bookRepository.changeBookStatus(bookid + "", status);
//            int result = 1;
            AdminAction adminAction = new AdminAction();
            adminAction.setAction("管理员" + entity.getName() + ":禁用书籍:" + bookid + ",成功");
            adminAction.setAid(entity.getId());
            adminAction.setModified(new Date());
            if (result < 1) {
                System.out.println("更新失败!");
                adminAction.setAction("管理员" + entity.getName() + ":禁用书籍:" + bookid + ",失败");
            }
            adminActionMapper.insert(adminAction);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
