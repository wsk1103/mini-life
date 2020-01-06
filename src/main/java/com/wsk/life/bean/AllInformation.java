package com.wsk.life.bean;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.util.ArrayList;

/**
 * Created by wsk1103 on 2017/10/21.
 */
@Accessors(chain = true)
@Data
public class AllInformation implements Serializable {
    private int count;
    private int start;
    private int total;
    private ArrayList<Subjects> subjects;

}
