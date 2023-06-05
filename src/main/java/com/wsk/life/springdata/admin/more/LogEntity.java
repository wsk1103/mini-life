package com.wsk.life.springdata.admin.more;

import lombok.Data;

import java.sql.Timestamp;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/5/1  23:33
 */
@Data
public class LogEntity {
    private long aid;
    private String adminName;
    private String phone;
    private Timestamp time;
    private String action;
}
