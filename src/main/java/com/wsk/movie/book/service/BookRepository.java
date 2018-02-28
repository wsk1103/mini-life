package com.wsk.movie.book.service;

import com.wsk.movie.book.entity.BookEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : WuShukai1103
 * @TIME : 2018/2/15  15:49
 */
public interface BookRepository extends JpaRepository<BookEntity, String>{

    //随机选择10条数据
    @Query(value = "select b.* from book b order by rand() limit 10 ", nativeQuery = true)
    List<BookEntity> randBook();

}
