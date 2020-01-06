package com.wsk.life.tool;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

/**
 * @author: wsk1103
 * @date: 18-1-15 下午9:29
 * @description: JAVA8
 */
public class Common {
    public static final List<Object> ERROR_404 = new ArrayList(Collections.singleton(new HashMap<String, Object>().put("code", 404)));

    public static void main(String[] args) throws IOException {
        String url = "http://m10.music.126.net/20180115214217/646ff4d3f4295a48a53ccfde60b62530/ymusic/61aa/0e58/eb16/9a028c17e08eba9d321f05205919d641.mp3";
        InputStream in=new URL(url).openConnection().getInputStream();  //创建连接、输入流
        FileOutputStream f = new FileOutputStream("/home/wsk1103/music/love.mp3");//创建文件输出流
        byte [] bb=new byte[1024];  //接收缓存
        int len;
        while( (len=in.read(bb))>0){ //接收
            f.write(bb, 0, len);  //写入文件
        }
        f.close();
        in.close();
    }
}
