package com.wsk.life.bean.maoyan.movie;

import lombok.Data;

import java.util.ArrayList;

/**
 * Created by wsk1103 on 2017/10/24.
 */
@Data
public class CommentResponseModel {
    private ArrayList<Cmts> cmts;
    private ArrayList<Cmts> hcmts;
    private String total;
}
