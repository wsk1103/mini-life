package com.wsk.life.controller.book;

import com.wsk.life.book.entity.BookEntity;
import com.wsk.life.book.service.SearchBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/2/15  16:03
 */
@RestController
@RequestMapping(value = "book/search")
public class SearchBookController {
    private final SearchBookService searchBookService;

    @Autowired
    public SearchBookController(SearchBookService searchBookService) {
        this.searchBookService = searchBookService;
    }

    @RequestMapping(value = "name/{name}")
    public List<BookEntity> searchByName(@PathVariable(value = "name") String name) {
        return searchBookService.searchBookByName(name);
    }

    @RequestMapping(value = "init")
    public List<BookEntity> bookRand(){
        return searchBookService.randBook();
    }

}
