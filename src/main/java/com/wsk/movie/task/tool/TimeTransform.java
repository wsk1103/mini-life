package com.wsk.movie.task.tool;

import com.wsk.movie.tool.Tool;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * @DESCRIPTION :将时间表达式转化为秒
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/24  23:21
 */
public class TimeTransform {

    public static SimpleDateFormat day = new SimpleDateFormat("yyyy-MM-dd");
    public static SimpleDateFormat fullDay = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static long getTime(String expression) {
        if (Tool.getInstance().isNullOrEmpty(expression)) {
            throw new RuntimeException("不是正确的时间表达式");
        }
        String[] times = expression.split(" ");
        if (times.length > 4) {
            throw new RuntimeException("不是正确的时间表达式");
        }
        //最后总时间
        long start = 0;
        try {
            for (int i = 0; i < times.length; i++) {
                long time = Integer.parseInt(times[i]);
                switch (i) {
                    //秒
                    case 0:
                        start += time;
                        break;
                    //分
                    case 1:
                        start += 60 * time;
                        break;
                    case 2:
                        start += 60 * 60 * time;
                        break;
                    case 3:
                        start += 60 * 60 * 24 * time;
                }
            }
        } catch (Exception e) {
            try {
                start = fullDay.parse(expression).getTime() - new Date().getTime();
                start = start > 0 ? start / 1000 : 0;
            } catch (ParseException e1) {
                try {
                    start = day.parse(expression).getTime() - new Date().getTime();
                    start = start > 0 ? start / 1000 : 0;
                } catch (ParseException e2) {
                    throw new RuntimeException("不是正确的时间表达式");
                }
            }
        }
        return start;
    }

    public static long getTime(Date date) {
        //最后总时间
        long start;
        start = date.getTime() - new Date().getTime();
        start = start > 0 ? start / 1000 : 0;
        return start;
    }
}
