/**
 * Created by Maibenben on 2017/6/10.
 */
var wsk = [
    "wsk"
];
$(function () {
    var $search = $("#search");
    $search.bind("input propertychange", function () {
        var text = $(this).val();
        $.ajax({
            url: '/getMovieName',
            type: 'post',
            dataType: 'JSON',
            data: {name: text, start: 1},
            success: function (data) {
                var result = data;
                // var cc = [];
                for (var i = 0; i < result.length; i++) {
                    wsk[i] = result[i].name;
                }
                // wsk = cc;
                // $search.removeClass("search_start");
                $search.autocomplete({
                    source: wsk
                });
            }
        });
    });
    // $('.search_start').autocomplete({
    //     source: wsk
    // });
    $('img.search_movie').click(function () {
        var text = $search.val();
        if (text == "" || text == null) {
            alert("请输入搜索的内容！！");
            return;
        }
        var $searchMovie = $("#searchMovie");
        $("#movie_action").attr("value", "movie");
        $searchMovie.submit();
    });
    $('img.search_publish').click(function () {
        var text = $search.val();
        if (text == "" || text == null) {
            alert("请输入搜索的内容！！");
            return;
        }
        var $searchMovie = $("#searchMovie");
        $("#movie_action").attr("value", "critic");
        $searchMovie.submit();
    });
    $('img.search_user').click(function () {
        var text = $search.val();
        if (text == "" || text == null) {
            alert("请输入搜索的内容！！");
            return;
        }
        var $searchMovie = $("#searchMovie");
        $("#movie_action").attr("value", "user");
        $searchMovie.submit();
    });
    $('img.search_book').click(function () {
        var text = $search.val();
        if (text == "" || text == null) {
            alert("请输入搜索的内容！！");
            return;
        }
        var $searchMovie = $("#searchMovie");
        $("#movie_action").attr("value", "book");
        $searchMovie.submit();
    });
    $('img.search_music').click(function () {
        var text = $search.val();
        if (text == "" || text == null) {
            alert("请输入搜索的内容！！");
            return;
        }
        var $searchMovie = $("#searchMovie");
        $("#movie_action").attr("value", "music");
        $searchMovie.submit();
    });
});