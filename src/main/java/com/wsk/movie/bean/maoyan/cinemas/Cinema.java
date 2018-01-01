package com.wsk.movie.bean.maoyan.cinemas;

import com.wsk.movie.bean.maoyan.Control;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashMap;

/**
 * Created by wsk1103 on 2017/10/24.
 */
//多个影院的信息
@Data
public class Cinema {
    private Control control;
    private int status;
    private HashMap<String, ArrayList<Information>> data;
}
