package com.wsk.life.bean.celebrity;

import lombok.Data;

import java.io.Serializable;
import java.util.ArrayList;

/**
 * Created by wsk1103 on 2017/10/23.
 */
@Data
public class USbox implements Serializable {
    private String date;
    private ArrayList<Subjects> subjects;
}
