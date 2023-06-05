package com.wsk.life.book.entity;

import javax.persistence.*;

/**
 * @DESCRIPTION :
 * @AUTHOR : sk
 * @TIME : 2018/5/1  17:44
 */
@Entity
@Table(name = "book", schema = "movie")
public class BookEntity {
    private String id;
    private String average;
    private String author;
    private String pubdate;
    private String originTitle;
    private String image;
    private String binding;
    private String translator;
    private String catalog;
    private String pages;
    private String publisher;
    private String isbn10;
    private String isbn13;
    private String title;
    private String authorIntro;
    private String summary;
    private String price;
    private Integer status;

    @Id
    @Column(name = "id")
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "average")
    public String getAverage() {
        return average;
    }

    public void setAverage(String average) {
        this.average = average;
    }

    @Basic
    @Column(name = "author")
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    @Basic
    @Column(name = "pubdate")
    public String getPubdate() {
        return pubdate;
    }

    public void setPubdate(String pubdate) {
        this.pubdate = pubdate;
    }

    @Basic
    @Column(name = "origin_title")
    public String getOriginTitle() {
        return originTitle;
    }

    public void setOriginTitle(String originTitle) {
        this.originTitle = originTitle;
    }

    @Basic
    @Column(name = "image")
    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Basic
    @Column(name = "binding")
    public String getBinding() {
        return binding;
    }

    public void setBinding(String binding) {
        this.binding = binding;
    }

    @Basic
    @Column(name = "translator")
    public String getTranslator() {
        return translator;
    }

    public void setTranslator(String translator) {
        this.translator = translator;
    }

    @Basic
    @Column(name = "catalog")
    public String getCatalog() {
        return catalog;
    }

    public void setCatalog(String catalog) {
        this.catalog = catalog;
    }

    @Basic
    @Column(name = "pages")
    public String getPages() {
        return pages;
    }

    public void setPages(String pages) {
        this.pages = pages;
    }

    @Basic
    @Column(name = "publisher")
    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    @Basic
    @Column(name = "isbn10")
    public String getIsbn10() {
        return isbn10;
    }

    public void setIsbn10(String isbn10) {
        this.isbn10 = isbn10;
    }

    @Basic
    @Column(name = "isbn13")
    public String getIsbn13() {
        return isbn13;
    }

    public void setIsbn13(String isbn13) {
        this.isbn13 = isbn13;
    }

    @Basic
    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Basic
    @Column(name = "author_intro")
    public String getAuthorIntro() {
        return authorIntro;
    }

    public void setAuthorIntro(String authorIntro) {
        this.authorIntro = authorIntro;
    }

    @Basic
    @Column(name = "summary")
    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    @Basic
    @Column(name = "price")
    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Basic
    @Column(name = "status")
    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BookEntity entity = (BookEntity) o;

        if (id != null ? !id.equals(entity.id) : entity.id != null) return false;
        if (average != null ? !average.equals(entity.average) : entity.average != null) return false;
        if (author != null ? !author.equals(entity.author) : entity.author != null) return false;
        if (pubdate != null ? !pubdate.equals(entity.pubdate) : entity.pubdate != null) return false;
        if (originTitle != null ? !originTitle.equals(entity.originTitle) : entity.originTitle != null) return false;
        if (image != null ? !image.equals(entity.image) : entity.image != null) return false;
        if (binding != null ? !binding.equals(entity.binding) : entity.binding != null) return false;
        if (translator != null ? !translator.equals(entity.translator) : entity.translator != null) return false;
        if (catalog != null ? !catalog.equals(entity.catalog) : entity.catalog != null) return false;
        if (pages != null ? !pages.equals(entity.pages) : entity.pages != null) return false;
        if (publisher != null ? !publisher.equals(entity.publisher) : entity.publisher != null) return false;
        if (isbn10 != null ? !isbn10.equals(entity.isbn10) : entity.isbn10 != null) return false;
        if (isbn13 != null ? !isbn13.equals(entity.isbn13) : entity.isbn13 != null) return false;
        if (title != null ? !title.equals(entity.title) : entity.title != null) return false;
        if (authorIntro != null ? !authorIntro.equals(entity.authorIntro) : entity.authorIntro != null) return false;
        if (summary != null ? !summary.equals(entity.summary) : entity.summary != null) return false;
        if (price != null ? !price.equals(entity.price) : entity.price != null) return false;
        if (status != null ? !status.equals(entity.status) : entity.status != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (average != null ? average.hashCode() : 0);
        result = 31 * result + (author != null ? author.hashCode() : 0);
        result = 31 * result + (pubdate != null ? pubdate.hashCode() : 0);
        result = 31 * result + (originTitle != null ? originTitle.hashCode() : 0);
        result = 31 * result + (image != null ? image.hashCode() : 0);
        result = 31 * result + (binding != null ? binding.hashCode() : 0);
        result = 31 * result + (translator != null ? translator.hashCode() : 0);
        result = 31 * result + (catalog != null ? catalog.hashCode() : 0);
        result = 31 * result + (pages != null ? pages.hashCode() : 0);
        result = 31 * result + (publisher != null ? publisher.hashCode() : 0);
        result = 31 * result + (isbn10 != null ? isbn10.hashCode() : 0);
        result = 31 * result + (isbn13 != null ? isbn13.hashCode() : 0);
        result = 31 * result + (title != null ? title.hashCode() : 0);
        result = 31 * result + (authorIntro != null ? authorIntro.hashCode() : 0);
        result = 31 * result + (summary != null ? summary.hashCode() : 0);
        result = 31 * result + (price != null ? price.hashCode() : 0);
        result = 31 * result + (status != null ? status.hashCode() : 0);
        return result;
    }
}
