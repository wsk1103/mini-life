package com.wsk.life.music;

import com.alibaba.fastjson.JSONObject;
import com.wsk.life.music.bean.HttpMethodType;
import com.wsk.life.tool.Tool;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;

import java.io.IOException;
import java.util.Map;

/**
 * @author: wsk1103
 * @date: 18-1-14 下午1:17
 * @description: JAVA8
 */
public class HttpUnits {
    public static <T> T urlToBean(String url, Class<T> clazz) throws Exception {
        return urlToBean(url, clazz, null, null, null, HttpMethodType.GET);
    }

    public static <T> T urlToBean(String url, Class<T> clazz, Map<String, String> data, Map<String, String> header, Map<String, String> cookies, HttpMethodType type) throws Exception {
        if (Tool.getInstance().isNullOrEmpty(url)) {
            throw new Exception("URL is null");
        }
        Document document;
        Connection connection = Jsoup.connect(url).ignoreContentType(true).timeout(5000);
        if (Tool.getInstance().isNotNull(data)) {
            connection.data(data);
        }
        if (Tool.getInstance().isNotNull(header)) {
            connection.headers(header);
        }
        if (Tool.getInstance().isNotNull(cookies)) {
            connection.cookies(cookies);
        }
        if (type == HttpMethodType.POST) {
            document = connection.post();
        } else {
            document = connection.get();
        }
        if (Tool.getInstance().isNullOrEmpty(document)) {
            return null;
        }
        String response = document.getElementsByTag("body").first().html();
        JSONObject object = JSONObject.parseObject(response);
        return JSONObject.toJavaObject(object, clazz);
    }

    public static Element urlToString(String url) throws IOException {
        Document document;
        Connection connection = Jsoup.connect(url).ignoreContentType(true).timeout(5000);
        document = connection.get();
        return document.getElementsByTag("body").first();
    }

    public static String urlToStringPost(String url) throws IOException {
        Document document;
        Connection connection = Jsoup.connect(url).ignoreContentType(true).timeout(5000);
        document = connection.post();
        return document.getElementsByTag("body").first().text();
    }

    public static void main(String[] args) throws IOException {
        System.out.println(urlToString(""));
    }
}