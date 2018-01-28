package com.wsk.movie.task.runnable;

import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/23  23:05
 */
@Data
@Accessors(chain = true)
public abstract class MyRunnable<T,K> implements Runnable {
//    private T entity;
//    private K start;
//    private K next;
}
