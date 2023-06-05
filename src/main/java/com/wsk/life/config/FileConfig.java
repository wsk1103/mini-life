package com.wsk.life.config;

import cn.hutool.core.io.FileUtil;
import com.wsk.life.tool.RarUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import javax.annotation.PostConstruct;
import java.io.File;

/**
 * @author sk
 * @date 2023/4/18
 */
@Configuration
public class FileConfig {

    @Value("${my.file.save}")
    private String fileSave;
    @Value("${my.file.saveImage}")
    private String saveImage;
    @Value("${my.file.saveThumbnails}")
    private String saveThumbnails;

    private String saveThum;
    private String saveImages;

    @PostConstruct
    public void init() {
        String si = "file:" + fileSave + ":" + saveImage;
        FileUtil.mkdir(si);
        String st = "file:" + fileSave + ":" + saveThumbnails;
        FileUtil.mkdir(st);
        saveThum = fileSave + ":" + saveThumbnails;
        saveImages = fileSave + ":" + saveImage;

//        //解压缩
//        String path = this.getClass().getResource("").getPath();
//        String target = "target";
//        int in = path.indexOf(target);
//        String toI = path.substring(0, in);
//        String im = toI + "image/image.rar";
//        File file = new File(im);
//        if (!file.exists()) {
//            System.err.println("图片压缩文件包不存在:" + im);
//        } else {
//            try {
//                RarUtil.unRarFile(im, saveImages);
//            } catch (Exception e) {
//                e.printStackTrace();
//            }
//        }
    }

    public String getSaveThum() {
        return saveThum;
    }

    public String getSaveImages() {
        return saveImages;
    }

    public String getSaveImage() {
        return saveImage;
    }

    public String getSaveThumbnails() {
        return saveThumbnails;
    }

    public String getFileSave() {
        return fileSave;
    }
}
