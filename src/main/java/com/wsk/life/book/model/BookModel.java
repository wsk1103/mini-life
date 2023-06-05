package com.wsk.life.book.model;

import lombok.Data;

/**
 * @DESCRIPTION : 图书解析model
 * @AUTHOR : sk
 * @TIME : 2018/2/15  15:01
 */
@Data
public class BookModel {
    private String id;//书籍id，对应豆瓣的id
    private String average;//书籍评分
    private String author;//作者
    private String pubdate;//发表时间
    private String origin_title;//外语名
    private String image;//图片
    private String binding;//封装类型-平装，精装
    private String translator;//译者，可能有多个，以,隔开
    private String catalog;//序
    private String pages;//页数
    private String publisher;//出版社
    private String isbn10;//
    private String isbn13;//
    private String title;//书名
    private String author_intro;//作者序
    private String summary;//简介
    private String price;//价格
}
