package com.wsk.life.tool;

import com.wsk.life.music.HttpUnits;
import com.wsk.life.music.bean.HttpMethodType;
import com.wsk.life.music.bean.WangYiBean;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;

import static com.wsk.life.music.WangYiTypeEnum.GET_URL;
import static com.wsk.life.music.WangYiTypeEnum.SINGLE;

/**
 * 图像文字识别
 *
 * @Author : WuShukai
 * @Date :2018/2/12 10:25
 */

public class Check {
    private static final String POST_URL = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic?access_token=" + AuthService.getAuth();

    /**
     * 识别本地图片的文字
     *
     * @param path 本地图片地址
     * @return 识别结果，为json格式
     * @throws URISyntaxException URI打开异常
     * @throws IOException        io流异常
     */
    public static String checkFile(String path) throws URISyntaxException, IOException {
        File file = new File(path);
        if (!file.exists()) {
            throw new NullPointerException("图片不存在");
        }
        String image = BaseImg64.getImageStrFromPath(path);
        String param = "image=" + image;
        return post(param);
    }

    /**
     * @param url 图片url
     * @return 识别结果，为json格式
     */
    public static String checkUrl(String url) throws IOException, URISyntaxException {
        String param = "url=" + url;
        return post(param);
    }

    /**
     * 通过传递参数：url和image进行文字识别
     *
     * @param param 区分是url还是image识别
     * @return 识别结果
     * @throws URISyntaxException URI打开异常
     * @throws IOException        IO流异常
     */
    private static String post(String param) throws URISyntaxException, IOException {
        //开始搭建post请求
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost post = new HttpPost();
        URI url = new URI(POST_URL);
        post.setURI(url);
        //设置请求头，请求头必须为application/x-www-form-urlencoded，因为是传递一个很长的字符串，不能分段发送
        post.setHeader("Content-Type", "application/x-www-form-urlencoded");
        StringEntity entity = new StringEntity(param);
        post.setEntity(entity);
        HttpResponse response = httpClient.execute(post);
//        System.out.println(response.toString());
        if (response.getStatusLine().getStatusCode() == 200) {
            String str;
            try {
                /*读取服务器返回过来的json字符串数据*/
                str = EntityUtils.toString(response.getEntity());
//                System.out.println(str);
                return str;
            } catch (Exception e) {
                e.printStackTrace();
                return null;
            }
        }
        return null;
    }

//    public static void main(String[] args) {
//        String path = "E:\\2.jpg";
//        try {
//            long now = System.currentTimeMillis();
//            checkFile(path);
////            checkUrl("https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=08c05c0e8444ebf8797c6c6db890bc4f/fc1f4134970a304e46bfc5f7d2c8a786c9175c19.jpg");
//            System.out.println("耗时：" + (System.currentTimeMillis() - now) / 1000 + "s");
//        } catch (URISyntaxException | IOException e) {
//            e.printStackTrace();
//        }
//    }

    //链接的数据
    private static final Map<String, String> DATA = new HashMap<>();
    private static final Map<String, String> HEADERS = new HashMap<>();
    public static void main(String[] args) {
        DATA.put("s", "我爱的人");
        DATA.put("limit", "10");
        DATA.put("offset", "0");
        DATA.put("type", SINGLE);

        HEADERS.put("Content-Type", "application/x-www-form-urlencoded");
        HEADERS.put("Cookie", "appver=1.5.0.75771");
        HEADERS.put("Referer", "http://music.163.com");
        WangYiBean bean;
        try {
            bean = HttpUnits.urlToBean(GET_URL, WangYiBean.class, DATA, HEADERS, null, HttpMethodType.POST);
            System.err.println(bean.toString());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}

