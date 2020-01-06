package com.wsk.life.tool;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Map;

/**
 * Created by Maibenben on 2017/1/2.
 */
public class HttpUtils {
    /*
     * Function  :   发送Post请求到服务器
     * Param     :   params请求体内容，encode编码格式
     */
    public static String submitPostData(String strUrlPath, Map<String, String> params, String encode, String action) {

        byte[] data = getRequestData(params, encode).toString().getBytes();//获得请求体
        try {

            //String urlPath = "http://192.168.1.9:80/JJKSms/RecSms.php";
            URL url = new URL(strUrlPath);
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            httpURLConnection.setConnectTimeout(13000);     //设置连接超时时间
            httpURLConnection.setDoInput(true);                  //打开输入流，以便从服务器获取数据
            httpURLConnection.setDoOutput(true);                 //打开输出流，以便向服务器提交数据
            httpURLConnection.setRequestMethod(action);     //设置以Post方式提交数据
            httpURLConnection.setUseCaches(false);               //使用Post方式不能使用缓存
            httpURLConnection.setRequestProperty("Accept-Charset", "utf-8");
            httpURLConnection.setRequestProperty("contentType", "text/html;charset=UTF-8");
            //设置请求体的类型是文本类型
            httpURLConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            //设置请求体的长度
            httpURLConnection.setRequestProperty("Content-Length", String.valueOf(data.length));
            httpURLConnection.setRequestProperty("User-Agent", "Mozilla/31.0 (compatible; MSIE 10.0; Windows NT; DigExt)");
            //获得输出流，向服务器写入数据
            OutputStream outputStream = httpURLConnection.getOutputStream();
            outputStream.write(data);

            int response = httpURLConnection.getResponseCode();            //获得服务器的响应码
            if (response == HttpURLConnection.HTTP_OK) {
                InputStream inputStream = httpURLConnection.getInputStream();
                return dealResponseResult(inputStream);                     //处理服务器的响应结果
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "err: " + e.getMessage();
        }
        return "-1";
    }

    /*
     * Function  :   封装请求体信息
     * Param     :   params请求体内容，encode编码格式
     */
    private static StringBuffer getRequestData(Map<String, String> params, String encode) {
        StringBuffer stringBuffer = new StringBuffer();        //存储封装好的请求体信息
        try {
            if (params .size() != 0) {
                for (Map.Entry<String, String> entry : params.entrySet()) {
                    stringBuffer.append(entry.getKey())
                            .append("=")
                            .append(URLEncoder.encode(entry.getValue(), encode))
                            .append("&");
                }
                stringBuffer.deleteCharAt(stringBuffer.length() - 1);    //删除最后的一个"&"
            } else return stringBuffer;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return stringBuffer;
    }
    public static String maoyan(String urlPath){
        HttpURLConnection con = null;
        BufferedReader br = null;
        String result = "";
        try {
            URL url = new URL(urlPath);
            //打开连接
            con = (HttpURLConnection) url.openConnection();
            //设置用户代理
            con.setRequestProperty("User-agent", "  Mozilla/5.0 (Windows NT 6.1; WOW64; rv:33.0) Gecko/20100101 Firefox/33.0");

            br = new BufferedReader(new InputStreamReader(con.getInputStream(), "UTF-8"));

//            result = br.toString();
            String str;
            StringBuffer sb = new StringBuffer();
            while ((str = br.readLine()) != null) {
                //按行读取然后输出
//                System.out.println(str);
                sb.append(str);
            }
            result = sb.toString();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            //关闭连接
            if (br != null) {
                try {
                    br.close();
                    br = null;
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

            con.disconnect();
        }
        return result;
    }
    /*
     * Function  :   处理服务器的响应结果（将输入流转化成字符串）
     * Param     :   inputStream服务器的响应输入流
     */
    private static String dealResponseResult(InputStream inputStream) {
        String resultData;      //存储处理结果
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] data = new byte[1024];
        int len;
        try {
            while ((len = inputStream.read(data)) != -1) {
                byteArrayOutputStream.write(data, 0, len);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        resultData = new String(byteArrayOutputStream.toByteArray());
        return resultData;
    }
}
