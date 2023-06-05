package com.wsk.life.tool.bean;

import lombok.Data;

/**
 * @DESCRIPTION :百度色情图像识别pojo
 * @AUTHOR : sk
 * @TIME : 2017/12/31  14:01
 */
@Data
public class BaiduData {
    private String msg;
    private double probability;
    private int type;
    private String class_name;
    private BaiduDataStars[] stars;
}
