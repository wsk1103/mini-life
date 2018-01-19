package com.wsk.movie.error;

import lombok.Data;

/**
 * @DESCRIPTION :异常处理类
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/19  20:41
 */
@Data
public class LoginErrorException extends Exception {
    private String message;

    public LoginErrorException(String message) {
        super(message);
        this.message = message;
    }
}
