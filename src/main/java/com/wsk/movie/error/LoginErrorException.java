package com.wsk.movie.error;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @DESCRIPTION :异常处理类,账号未登录，不需要捕获
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/1/19  20:41
 */
@EqualsAndHashCode(callSuper = true)
@Data
public class LoginErrorException extends RuntimeException {
    private String message;

    public LoginErrorException(String message) {
        super(message);
        this.message = message;
    }
}
