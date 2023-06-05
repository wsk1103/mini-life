package com.wsk.life.book.service;

import com.wsk.life.book.entity.BookEntity;

import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/2/15  14:59
 */
public interface SearchBookService {
    List<BookEntity> searchBookByName(String name);

    List<BookEntity> randBook();

    BookEntity findById(long id);
}
