package com.wsk.movie.book.service;

import com.wsk.movie.book.entity.BookEntity;

import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/2/15  14:59
 */
public interface SearchBookService {
    List<BookEntity> searchBookByName(String name);

    List<BookEntity> randBook();
}
