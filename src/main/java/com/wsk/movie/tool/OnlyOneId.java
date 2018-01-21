package com.wsk.movie.tool;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/20  16:24
 */
public class OnlyOneId {

    public synchronized static long getOnlyOneId() {
        try {
            Thread.sleep(1);
            return System.currentTimeMillis();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return System.currentTimeMillis();
        }
    }
}
