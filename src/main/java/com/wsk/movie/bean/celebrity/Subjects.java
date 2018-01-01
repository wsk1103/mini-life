package com.wsk.movie.bean.celebrity;

import com.wsk.movie.bean.OneSubject;
import lombok.Data;

import java.io.Serializable;

/**
 * Created by wsk1103 on 2017/10/23.
 */
@Data
public class Subjects implements Serializable {
    private int box;
    private int rank;
    private OneSubject subject;
}
