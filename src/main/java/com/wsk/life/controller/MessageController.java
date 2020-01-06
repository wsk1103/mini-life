package com.wsk.life.controller;

import com.wsk.life.bean.Content;
import com.wsk.life.bean.MessageBean;
import com.wsk.life.bean.MessageOne;
import com.wsk.life.pojo.Message;
import com.wsk.life.pojo.UserInformation;
import com.wsk.life.service.MessageService;
import com.wsk.life.service.UserInformationService;
import com.wsk.life.tool.SensitivewordFilter;
import com.wsk.life.tool.Tool;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * Created by wsk1103 on 2017/6/12.
 */
@Controller
public class MessageController {
    @Resource
    private MessageService messageService;
    @Resource
    private UserInformationService userInformationService;

    //获得信息
    @RequestMapping(value = "getMessage")
    @ResponseBody
    public MessageBean getMessage(HttpServletRequest request, @RequestParam int id){
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)||Tool.getInstance().isNullOrEmpty(id)) {
            return new MessageBean();
        }
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", userInformation.getId());
        map.put("fid", id);
        List<Message> message = messageService.getMessage(map);
        MessageBean messageBean = new MessageBean();
        List<Content> contents = new ArrayList<>();
        for (Message m : message) {
            UserInformation user = userInformationService.selectByPrimaryKey(m.getUid());
            Content content = new Content();
            content.setName(user.getName());
            content.setContent(m.getMessage());
            content.setTime(Tool.getInstance().dateToStringWithHours(m.getModified()));
            content.setUid(user.getId());
            contents.add(content);
//            messages.add(m.getMessage());
//            modifieds.add(Tool.getInstance().dateToStringWithHours(m.getModified()));
            m.setModified(new Date());
            m.setOnread(1);
            messageService.updateByPrimaryKeySelective(m);
        }
        messageBean.setFid(id);
        messageBean.setUid(userInformation.getId());
        messageBean.setContents(contents);
//        messageBean.setMessage(messages);
//        messageBean.setModified(modifieds);
        UserInformation user = userInformationService.selectByPrimaryKey(id);
        messageBean.setName(user.getName());
        messageBean.setOnread(1);

        return messageBean;
    }

    //获得单条信息
    @RequestMapping(value = "getMessageAndOnread")
    @ResponseBody
    public MessageOne getMessageAndOnread(HttpServletRequest request, @RequestParam int id) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation)||Tool.getInstance().isNullOrEmpty(id)) {
            return new MessageOne();
        }
        Map<String, Integer> map = new HashMap<>();
        map.put("uid", userInformation.getId());
        map.put("fid", id);
        UserInformation user = userInformationService.selectByPrimaryKey(id);
        Message message = messageService.getMessageAndOnread(map);
        if (Tool.getInstance().isNullOrEmpty(message)) {
            return new MessageOne();
        }
        MessageOne messageOne = new MessageOne();
        messageOne.setFid(id);
        messageOne.setMessage(message.getMessage());
        messageOne.setModified(Tool.getInstance().dateToStringWithHours(message.getModified()));
        messageOne.setUid(userInformation.getId());
        messageOne.setName(user.getName());
        messageOne.setOnread(0);
//        ----
        message.setOnread(1);
        message.setModified(new Date());
        messageService.updateByPrimaryKeySelective(message);

        return messageOne;
    }

    //发送信息
    @RequestMapping(value = "sendMessage")
    @ResponseBody
    public int sendMessage(HttpServletRequest request, @RequestParam int id, @RequestParam String content){
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        if (Tool.getInstance().isNullOrEmpty(userInformation) || Tool.getInstance().isNullOrEmpty(id) || Tool.getInstance().isNullOrEmpty(content)) {
            return 0;
        }
//        content = Tool.getInstance().txtReplace(content);
        content = SensitivewordFilter.replaceSensitiveWord(content);
        Message message = new Message();
        message.setFid(id);
        message.setMessage(content);
        message.setUid(userInformation.getId());
        message.setOnread(0);
        message.setModified(new Date());
        try {
            int result = messageService.insertSelective(message);
            if (result == 1) {
                return 1;
            } else {
                return 2;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return 2;
        }
    }

    //是否有新信息
    @RequestMapping(value = "getMessageOne")
    @ResponseBody
    public Message getMessageOne(HttpServletRequest request) {
        UserInformation userInformation = (UserInformation) request.getSession().getAttribute("userInformation");
        Message message = new Message();
        if (Tool.getInstance().isNullOrEmpty(userInformation)) {
            message.setOnread(1);
            return message;
        }
        int uid = userInformation.getId();
        message = messageService.getMessageOne(uid);
        if (Tool.getInstance().isNullOrEmpty(message)) {
            message = new Message();
            message.setUid(uid);
            message.setOnread(1);
            return message;
        } else {
            return message;
        }
    }

}
