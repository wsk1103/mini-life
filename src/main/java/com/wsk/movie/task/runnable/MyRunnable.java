package com.wsk.movie.task.runnable;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/23  23:05
 */
@Data
@AllArgsConstructor
public abstract class MyRunnable<T> implements Runnable {
    private T entity;
}
