package com.wsk.life.task.tool;

import com.wsk.life.tool.Tool;

import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.*;
import java.util.Date;

/**
 * @DESCRIPTION :将时间表达式转化为秒，自定义的定时任务中，都是以秒为单位运行的
 * 时间表达式
 * 1:00 00 00 00-中间以空格分开
 * :秒 分 时 日
 * 2:yyyy-MM-dd HH:mm:ss
 * 3:yyyy-MM-dd
 * 4.时间戳Timestamp
 * @AUTHOR : sk
 * @TIME : 2018/1/24  23:21
 */
public class TimeTransform {

    private static final SimpleDateFormat DAY = new SimpleDateFormat("yyyy-MM-dd");
    private static final SimpleDateFormat FULL_DAY = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

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
                start = FULL_DAY.parse(expression).getTime() - System.currentTimeMillis();
                start = start > 0 ? start / 1000 : 0;
            } catch (ParseException e1) {
                try {
                    start = DAY.parse(expression).getTime() - System.currentTimeMillis();
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
        start = date.getTime() - System.currentTimeMillis();
        start = start > 0 ? start / 1000 : 0;
        return start;
    }

    public static long getTime(long date) {
        long start;
        start = date - System.currentTimeMillis();
        start = start > 0 ? start / 1000 : 0;
        return start;
    }

    public static long getTime(Timestamp date) {
        long start;
        start = date.getTime() - System.currentTimeMillis();
        start = start > 0 ? start / 1000 : 0;
        return start;
    }

    public static void main(String[] args) {
//        System.out.println(Instant.now());
//        System.out.println(LocalDateTime.now());
//        System.out.println(LocalDate.now());
//        System.out.println(LocalTime.now());
        //获取秒数
        Long second = LocalDateTime.now().toEpochSecond(ZoneOffset.of("+8"));
        //获取毫秒数
        Long milliSecond = LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli();
        System.out.println(second);
        System.out.println(milliSecond);
        System.out.println(new Date().getTime());
        System.out.println(getTime("2018-04-19 15:00:00"));
    }
}
