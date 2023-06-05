package com.wsk.life.tool.bean;

import com.wsk.life.tool.Tool;
import lombok.Data;

/**
 * @DESCRIPTION :百度色情图像识别pojo
 * @AUTHOR : sk
 * @TIME : 2017/12/31  14:00
 */
@Data
public class Baidu {
    private String log_id;
    private String error_code;
    private String error_msg;
    private String conclusion;
    private BaiduData[] result;
    private BaiduData[] data;
    private String confidence_coefficient;
    private int result_num;

    public static void main(String[] args) {
        boolean b = Tool.getInstance().checkPornograp("D:\\image\\EewrFngGVKD5Vb4kzesA20170113.jpg");
        System.out.println(b);
    }
}
