/**
 * Created by Maibenben on 2017/5/16.
 */
$(function () {
    wsk();

    function wsk() {
        var cc = setInterval(start, 5000);

        function start() {
            $.ajax({
                url: '/getMessageOne',
                type: 'post',
                dataType: 'JSON',
                success: function (data) {
                    if (data.onread === 0) {
                        $('.img_information').attr("src", "/image/new_information.png");
                        $(".header_information").attr("value", data.uid);
                    } else {
                        $('.img_information').attr("src", "/image/information.png");
                        $(".header_information").attr("value", data.uid);
                    }
                }
            });
        };
    };

    var menu = $('.menu');
    var hot_menu = $('.hot_menu');
    var header_hot = $('.header_hot');
    var header_set = $('.header_set');
    var $header_movie = $('#header_movie');
    var $movie_menu = $('#movie_menu');
    var $music_menu = $("#music_menu");
    var header_music = $("#header_music");
    var $book_menu = $("#book_menu");
    $($header_movie).bind({
        mouseenter: function () {
            var width = $(this).offset().left;
            $movie_menu.css({left: width - 24 + 'px'});
            $movie_menu.show(100);
        }
    });
    $($movie_menu).mouseleave(function () {
        $movie_menu.hide(100);
    });
    $(header_set).bind({
        mouseenter: function () {
            var width = $(this).offset().left;
            menu.css({left: width - 24 + "px"});
            menu.show(100);
        },
    });
    $(menu).mouseleave(function () {
        menu.hide(100);
    });
    $(header_music).bind({
        mouseenter: function () {
            var width = $(this).offset().left;
            $music_menu.css({left: width - 24 + 'px'});
            $music_menu.show(100);
        }
    });
    $($music_menu).mouseleave(function () {
        $music_menu.hide(100);
    });
    // $(header_hot).bind({
    //     mouseenter: function () {
    //         hot_menu.css({left: 1300 + "px"});
    //         hot_menu.show(100);
    //     },
    //     mouseleaver: function () {
    //         hot_menu.hide(100);
    //     }
    // });
    // $(hot_menu).mouseleave(function () {
    //     hot_menu.hide(100);
    // });
    $('.show_header').mouseleave(function () {
        $('.show_header').removeClass('header_current_li');
    });

    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        var $all_search = $('.all_search');
        var $my_friends = $('.my_friends');
        var cc = $my_friends.offset().top + $my_friends.height();
        if (sc > cc) {
            $all_search.addClass('all_search_current');
        } else {
            $all_search.removeClass('all_search_current');
        }
    });
});
$(function () {
    var $logout = $('.header_logout');
    $($logout).click(function () {
        window.location.href = 'logout';
    });
    var host = window.location.host;
    var me = new Date().getTime();
    var websocket = new WebSocket("ws://" + host + "/sockjs/webSocketIMServer");
    var phone = $('#user_name_a').val();
    if (phone !== 'wsk') {
        websocket.onopen = function () {
            console.log("websocket连接上");
            websocket.send(phone + "," + me + ",start");
        };
        websocket.onmessage = function (evnt) {
            // console.log(evnt.data);
            var result = evnt.data;
            if (result == "error") {
                window.location.href = '/logout';
                alert("该账号在其他地方登录了，请检查是否为本人操作，防止密码丢失！！！");
                return;
            }
            setTimeout(function () {
                messageHandle();
            }, 2000);
        };
        websocket.onerror = function () {
            console.log("websocket错误");
        };
        websocket.onclose = function () {
            console.log("websocket关闭");
        };

        function messageHandle() {
            // alert(phone);
            websocket.send(phone + "," + me + ",send");
        };
    }
});