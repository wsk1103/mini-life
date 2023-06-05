package com.wsk.life.springdata.admin.more;

import lombok.Data;

import java.util.Date;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/3/9  15:54
 */
@Data
public class CriticEntity {
    private Integer pid;
    private String critic;
    private String picture;
    private Date ptime;
    private String title;
    private Integer uid;
    private String username;
    private String phone;
}
