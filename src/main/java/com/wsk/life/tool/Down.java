package com.wsk.life.tool;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

/**
 * @DESCRIPTION :根据url下载，MP3下载为MP3，MP4下载为MP4，图片则为对应格式的图片
 * @AUTHOR : sk
 * @TIME : 2018/1/20  15:49
 */
public class Down {

    //默认地址
    private static final String PATH = "/data/musics/";

    /**
     * 下载，默认文件名为路径的文件名。
     * @param url
     * @return 文件的绝对路径
     * @throws IOException
     */
    public static String down(String url) throws IOException {
        return down(url, randomName(url));
    }

    /**
     * 返回文件的绝对地址
     * @param url 下载地址
     * @param fileName 只能传入文件名
     * @return 返回文件名的绝对地址
     * @throws IOException
     */
    public static String down(String url, String fileName) throws IOException {
        fileName = getFileName(fileName);
        File file = new File(PATH + fileName);
        if (!file.getParentFile().exists()) {
            if (!file.getParentFile().mkdir()) {
                throw new RuntimeException("创建父文件夹失败!");
            }
        }
        if (!file.exists()) {
            if (!file.createNewFile()) {
                throw new RuntimeException("创建文件失败!");
            }
        }
        try (InputStream in = new URL(url).openConnection().getInputStream(); FileOutputStream f = new FileOutputStream(file);) {
            byte[] bb = new byte[1024];  //接收缓存
            int len;
            while ((len = in.read(bb)) > 0) { //接收
                f.write(bb, 0, len);  //写入文件
            }
        } catch (IOException e) {
            if (file.exists()) {
                file.delete();
            }
            throw  new IOException("下载失败，url为：" + url);
        }
//        System.out.println("down success:" + file.getAbsolutePath());
        return file.getAbsolutePath();
    }


    /**
     * 获得文件名后缀
     *
     * @param fileName
     * @return 文件名后缀的小写格式
     */
    public static String subFileName(String fileName) {
        fileName = getFileName(fileName);
        String sub = fileName.substring(fileName.indexOf("."));
        if (Tool.getInstance().isNullOrEmpty(sub)) {
            throw new RuntimeException("文件名格式错误");
        }
        return sub.toLowerCase();
    }

    public static String getFileName(String url){
        url = url.replace(File.separator, "/");
        String[] s = url.split("/");
        if (s.length < 1) {
            throw new RuntimeException("文件名格式错误");
        }
        if (!s[s.length - 1].contains(".")) {
            throw new RuntimeException("文件名格式错误");
        }
        if (s[s.length - 1].contains("?")) {
            s[s.length - 1] = s[s.length - 1].substring(0, s[s.length - 1].indexOf("?"));
        }
        return s[s.length - 1];
    }

    /**
     * 根据文件的类型重新生成唯一的文件名
     * @param fileName
     * @return 文件名
     */
    public static String randomName(String fileName){
        return Tool.getInstance().getRandom() + OnlyOneId.getOnlyOneId() + subFileName(fileName);
    }

    public static void main(String[] args) {
        String url = "http://zhangmenshiting.qianqian.com/data2/music/3423b48bd35de901b3512fc1f28cd2e3/567299874/567299874.mp3?xcode=c8d98e2a4b83155637ff48ca31f559c2";
        try {
            System.out.println(OnlyOneId.getOnlyOneId());
            System.out.println(OnlyOneId.getOnlyOneId());
            System.out.println(OnlyOneId.getOnlyOneId());
            System.out.println(OnlyOneId.getOnlyOneId());
            System.out.println(OnlyOneId.getOnlyOneId());
            String result = down(url,url);
            System.out.println(result);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
