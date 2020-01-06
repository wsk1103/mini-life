package com.wsk.life.tool;

import sun.misc.BASE64Encoder;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URLEncoder;

/**
 * 图片转化base64后再UrlEncode结果
 * @Author : WuShukai
 * @Date :2018/2/12 10:43
 */

public class BaseImg64 {
    /**
     * 将一张本地图片转化成Base64字符串
     * @param imgPath 本地图片地址
     * @return 图片转化base64后再UrlEncode结果
     */
    public static String getImageStrFromPath(String imgPath) {
        InputStream in;
        byte[] data = null;
        // 读取图片字节数组
        try {
            in = new FileInputStream(imgPath);
            data = new byte[in.available()];
            in.read(data);
            in.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        // 对字节数组Base64编码
        BASE64Encoder encoder = new BASE64Encoder();
        // 返回Base64编码过再URLEncode的字节数组字符串
        return URLEncoder.encode(encoder.encode(data));
    }
}