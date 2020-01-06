package com.wsk.life.bean;

import com.wsk.life.tool.Tool;

import java.io.Serializable;

/**
 * Created by wsk1103 on 2017/6/10.
 */
public class MovieBean implements Serializable {
    private String reason;
    private int error_code;
    private ResultBean result;

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public int getError_code() {
        return error_code;
    }

    public void setError_code(int error_code) {
        this.error_code = Tool.getInstance().isNullOrEmpty(error_code)?-1:error_code;
    }

    public ResultBean getResult() {
        return result;
    }

    public void setResult(ResultBean result) {
        this.result = result;
    }
}
