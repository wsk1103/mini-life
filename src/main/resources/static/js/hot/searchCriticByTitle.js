/**
 * Created by Maibenben on 2017/6/12.
 */
$(function () {
    var start = 2;
    var now = false;
    var num = 0.75;
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        var height = $('.all_content').height();
        if (sc > height * num) {
            if (!now) {
                now = true;
                getUP();
                if (num < 0.95) {
                    num += 0.05;
                }
            }
        }
    });

    $('.find_more').click(function () {
        getUP();
    });
    function getUP() {
        var criticTitle = $('#criticTitle').val();
        $.ajax({
            url: "/getCriticByTitleAndStart",
            type: "POST",
            dataType: "JSON",
            data: {start: start,title:criticTitle},
            success: function (result) {
                now = false;
                start++;
                var $all_stats = $('.friends_stats_fix');
                if (result.length === 0) {
                    $('.not_more').show();
                    $('.find_more').hide();
                    return;
                }
                var picture = "";
                var isPrivate = "";
                var action = "";
                var good = "";
                var collection = "";
                var uid = $('#uid').val();
                // var uidAction = "";
                for (var i = 1; i < result.length; i++) {
                    if (result[i].thumbnails != null && result[i].thumbnails != "") {
                        picture = "<div class='friends_image'>" +
                            "<img class='friends_img_critic' src='" + result[i].thumbnails + "' " +
                            "alt='图片加载中......' title='" + result[i].title + "' value='" + result[i].picture + "'/>" +
                            "</div>";
                    } else {
                        if (result[i].picture != '' && result[i].picture != null) {
                            picture = "<div class='friends_image'>" +
                                "<img class='friends_img_critic' src='" + result[i].picture + "' " +
                                "alt='图片加载中......' title='" + result[i].title + "' value='" + result[i].picture + "'/>" +
                                "</div>";
                        }
                    }
                    if (result[i].isPrivate == 1) {
                        isPrivate = "<span class='friends_time isPrivate'>朋友圈</span>";
                    } else {
                        isPrivate = "<span class='friends_time isPrivate'>所有人</span>";
                    }
                    if (uid == result[i].uid) {
                        if (result[i].isPrivate == 0) {
                            action = "<div class='wsk'>" +
                                "<span class='show_action'>Ⅲ</span>" +
                                "<div class='show_action_menu'>" +
                                "<span class='action_menu' value='"+result[i].pid+"' title='translation'>转为朋友圈</span>" +
                                "<span class='action_menu' value='"+result[i].pid+"' title='delcritic'>×删除</span>" +
                                "</div>" +
                                "</div>";
                        } else {
                            action = "<div class='wsk'>" +
                                "<span class='show_action'>Ⅲ</span>" +
                                "<div class='show_action_menu'>" +
                                "<span class='action_menu' value='"+result[i].pid+"' title='delcritic'>×删除</span>" +
                                "</div>" +
                                "</div>";
                        }
                    } else {
                        if (result[i].friend===1)
                            action = "<div class='wsk'>" +
                                "<span class='show_action'>Ⅲ</span>" +
                                "<div class='show_action_menu'>" +
                                "<span class='action_menu' value='"+result[i].uid+"' title='unsubscribe'>×关注</span>" +
                                "<span class='action_menu' value='"+result[i].uid+"' title='report'>●举报</span>" +
                                "</div>" +
                                "</div>";
                        else{
                            action = "<div class='wsk'>" +
                                "<span class='show_action'>Ⅲ</span>" +
                                "<div class='show_action_menu'>" +
                                "<span class='action_menu' value='"+result[i].uid+"' title='addattention'>+关注</span>" +
                                "<span class='action_menu' value='"+result[i].uid+"' title='report'>●举报</span>" +
                                "</div>" +
                                "</div>";
                        }
                    }
                    if (result[i].good===1){
                        good = "<button value='" + result[i].pid + "' class='friends_good_current'>♡已点赞 <span>" + result[i].goodCounts + "</span></button>";
                    } else {
                        good = "<button value='" + result[i].pid + "' class='friends_good'>♡点赞 <span>" + result[i].goodCounts + "</span></button>"
                    }
                    if (result[i].collection===1){
                        collection = "<button value='" + result[i].pid + "' class='friends_collection_current'>☆已收藏 <span>" + result[i].collectionCounts + "</span></button>";
                    } else {
                        collection = "<button value='" + result[i].pid + "' class='friends_collection'>☆收藏 <span>" + result[i].collectionCounts + "</span></button>";
                    }
                    $all_stats.append("<div class='friends_stats'>" +
                        "<div>" +
                        "<div class='friends_stats_top'>" +
                        "<div>" +
                        "<img src='" + result[i].avatar + "' class='friends_image_header' alt='图片加载中.....' value='" + result[i].uid + "'/>" +
                        "</div>" +
                        "<div class='friends_name'>" +
                        "<div>" +
                        "<span  value='" + result[i].uid + "' class='friends_username'>" + result[i].name +
                        "</span>" +
                        "</div>" +
                        // "<br/>" +
                        "<span class='friends_time'>" + result[i].time +
                        "</span>" +
                        "<br/>" +
                        isPrivate +
                        "</div>" +
                        action +
                        "</div>" +
                        "<div class='friends_stats_middle clearfix'>" +
                        "<div class='friends_text'>" +
                        "<span>" + result[i].critic +
                        "</span>" +
                        "</div>" +
                        "<span class='friends_title'>" + "--" + result[i].title +
                        "</span>" +
                        "</div>" + picture +
                        "<div class='friends_action'>" +
                        collection +
                        "<button value='" + result[i].pid + "' class='friends_comment'  title='1'>评论 <span>" + result[i].commentCounts + "</span></button>" +
                        good +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                }
                // showPicture();
            },
            error:function () {
                alert("请检查网络！！！");
            }
        });
    }

});