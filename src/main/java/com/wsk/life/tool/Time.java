package com.wsk.life.tool;

import java.text.SimpleDateFormat;

/**
 * @DESCRIPTION :这是一个时间日期工具
 * @AUTHOR : sk
 * @TIME : 2017/12/31  19:36
 */
public class Time {
    //10分钟
    public static final long TEN_MINUTE = 60 * 10;
    //5分钟
    public static final long FIVE_MINUTE = 60 * 5;
    //半个小时
    public static final long HALF_OF_HOUR = 60 * 30;
    //一个小时
    public static final long ONE_HOUR = 60 * 60;
    //2个小时
    public static final long TWO_HOUR = 60 * 60 * 2;
    //半天
    public static final long HALF_OF_DAY = 60 * 60 * 12;
    //一天
    public static final long ONE_DAY = 60 * 60 * 24;
    //半个月，15天
    public static final long HALF_OF_MONTH = 60 * 60 * 24 * 15;
    //一个月,30天
    public static final long ONE_MONTH = 60 * 60 * 24 * 30;
    //很长时间
    public static final long LONG = Long.MAX_VALUE;
    public static final SimpleDateFormat DAY = new SimpleDateFormat("yyyy-MM-dd");
    public static final SimpleDateFormat FULL_DAY = new SimpleDateFormat("yyyy-MM-dd HH:mm");
}
