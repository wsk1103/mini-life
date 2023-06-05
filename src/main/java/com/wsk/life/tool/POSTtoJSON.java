package com.wsk.life.tool;

import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by wsk1103 on 2017/6/10.
 */
public class POSTtoJSON {
    private static class Lazy {
        private static final POSTtoJSON INSTANCE = new POSTtoJSON();
    }

    private POSTtoJSON() {

    }

    public static final POSTtoJSON getInstance() {
        return Lazy.INSTANCE;
    }

    public String post(String url, Map<String, String> map, String action) {
        String responseBody;
        String data = getRequestData(map);
        url += "?" + data;
        try {
//            JSONObject obj = new JSONObject();
//            obj.put("start", "2");
            CloseableHttpClient httpclient = HttpClients.createDefault();
//            System.out.println(obj);
            if ("GET".equals(action.toUpperCase())) {
                HttpGet http = new HttpGet(url);
                http.addHeader("connection","keep-alive");
                http.addHeader("content-encoding","gzip");
                http.addHeader("content-language","zh-CN");
                http.addHeader("content-security-policy","default-src *.meituan.com *.dianping.com *.qq.com *.gtimg.cn *.gtimg.com *.idqqimg.com *.idqqimg.cn *.tenpay.com *.qpic.cn jsbridge://* js://* 192.168.4.223:9999 cdn.bootcss.com *.maoyan.com *.sankuai.com *.meituan.net *.google-analytics.com wvjbscheme://* imeituan://* meituanmovie://* 'self' 'unsafe-inline' 'unsafe-eval' data:; report-uri http://csp.sankuai.com/reportURL/?bToken=4493e1bb;");
                http.addHeader("content-type ","text/html;charset=UTF-8");
                http.addHeader("m-appkey","com.meituan.movie.touch");
                http.addHeader("m-host ","10.32.94.209");
                http.addHeader("m-spanname","MovieListController.movielistJson");
                http.addHeader("server ","Tengine");
                http.addHeader("transfer-encoding","chunked");

//                http.addHeader("Content-Type", "application/json;charset=UTF-8");
//                http.addHeader("Accept", "text/html");
//                http.addHeader("Accept-Charset", "utf-8");
//                http.addHeader("Accept-Encoding", "gzip");
//                http.addHeader("Accept-Language", "en-US,en");
//                http.addHeader("User-Agent",
//                        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.22 (KHTML, like Gecko) Chrome/25.0.1364.160 Safari/537.22");
                // 解决中文乱码问题
//            StringEntity stringEntity = new StringEntity(obj.toString(), "UTF-8");
//            stringEntity.setContentEncoding("UTF-8");

//            httpPost.setEntity(stringEntity);
//                System.out.println("Executing request " + http.getRequestLine());
                // Create a custom response handler
                ResponseHandler<String> responseHandler = response -> {
                    int status = response.getStatusLine().getStatusCode();
                    if (status >= 200 && status < 300) {

                        org.apache.http.HttpEntity entity = response.getEntity();

                        return entity != null ? EntityUtils.toString(entity) : null;
                    } else {
                        throw new ClientProtocolException(
                                "Unexpected response status: " + status);
                    }
                };
                responseBody = httpclient.execute(http, responseHandler);
//                System.out.println("----------------------------------------");
//                System.out.println(responseBody);
            } else {
                HttpPost http = new HttpPost(url);
                http.addHeader("Content-Type", "application/json;charset=UTF-8");
                // 解决中文乱码问题
//            StringEntity stringEntity = new StringEntity(obj.toString(), "UTF-8");
//            stringEntity.setContentEncoding("UTF-8");

//            httpPost.setEntity(stringEntity);
//                System.out.println("Executing request " + http.getRequestLine());
                // Create a custom response handler
                ResponseHandler<String> responseHandler = response -> {
                    int status = response.getStatusLine().getStatusCode();
                    if (status >= 200 && status < 300) {

                        org.apache.http.HttpEntity entity = response.getEntity();

                        return entity != null ? EntityUtils.toString(entity) : null;
                    } else {
                        throw new ClientProtocolException(
                                "Unexpected response status: " + status);
                    }
                };
                responseBody = httpclient.execute(http, responseHandler);
//                System.out.println("----------------------------------------");
//                System.out.println(responseBody);
            }
        } catch (Exception e) {
//            System.out.println(e);
            responseBody = "";
        }
        return responseBody;
    }

    private static String getRequestData(Map<String, String> params) {
        StringBuffer sb = new StringBuffer();        //存储封装好的请求体信息
        try {
            for (Map.Entry<String, String> entry : params.entrySet()) {
                sb.append(entry.getKey())
                        .append("=")
                        .append(entry.getValue())
                        .append("&");
            }
            sb.deleteCharAt(sb.length() - 1);    //删除最后的一个"&"
        } catch (Exception e) {
            e.printStackTrace();
            return sb.toString();
        }
        return sb.toString();
    }

    public static void main(String args[]) {
        Map<String, String> map = new HashMap<>();
        map.put("q", "泰坦尼克号");
        String wsk = POSTtoJSON.getInstance().post("https://api.douban.com/v2/movie/search", map,"GET");
    }
}
