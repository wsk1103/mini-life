/**
 * Created by Maibenben on 2017/6/5.
 */
$(function () {
    var to_top = $('.go_to_top');
    $(to_top).click(function () {
        $("body,html").animate({scrollTop: 0}, 800);
    });
    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 80) {
            $(to_top).show();
        } else {
            $(to_top).hide();
        }
    });
    $(".header_information,button.my_friends_message,button.letter").click(function () {
        if ($('.show_message').is(":hidden")) {
            var id = $(this).attr("value");
            aj(id);
        } else {
            $('.show_message').hide(500);
        }
    });

    function aj(id) {
        $.ajax({
            url: '/getMessage',
            data: {id: id},
            type: 'post',
            dataType: 'JSON',
            success: function (data) {
                $(".show_message").html("");
                var user = "";
                var html = "" +
                    "<div class='show_message_title'>" +
                    "<a class='show_message_title_name' style='display: inline' href='/find/information?id=" + data.fid + "'>" +
                    "<span id='show_message_title_username'>" + data.name + "</span></a>" +
                    "<div class='show_message_title_close'>×</div>" +
                    "</div>" +
                    "<div class='show_message_content'>" +
                    "   <div>";
                for (var i = 0; i < data.contents.length; i++) {
                    user +=
                        " <div class='show_message_content_name'><a href='/find/information?id=" + data.contents[i].uid + "'> &nbsp;" + data.contents[i].name + "</a>" +
                        "<span style='color: #8b8b8b;'> " + data.contents[i].time + "</span></div>" +
                        "  <div class='show_message_content_content' style='font-size: .9em;padding: .5em;'><span>" + data.contents[i].content + "</span></div>";
                }
                var end = "      </div>" +
                    "       </div>" +
                    "<div class='show_message_to'>" +
                    "     <div class='show_message_to_content' style='display: inline'>" +
                    "     <textarea style='resize: none' class='show_message_to_content_textarea'></textarea>" +
                    "    </div>" +
                    "    <button class='show_message_to_button' value='" + id + "' id='show_message_to_button'>发送</button>" +
                    "     </div>";
                $(".show_message").append(html + user + end);
                $(".show_message").show(500);
                $('.show_message_title_close').click(function () {
                        $(this).parent().parent().hide(500);
                    }
                );
            }
        });
    }

});
$(document).on('input propertychange', 'textarea.content', function () {
    var curLength = $(this).val().length;
    if (curLength >= 122) {
        var num = $(this).val().substr(0, 121);
        $(this).val(num);
        alert("超过字数限制，多出的字将被截断！");
    }
    if (curLength > 0) {
        $(this).parent().children('.all_friends_comment_publish').addClass('chang_btn2').removeClass('.chang_btn2');
        // $(".all_friends_comment_publish").addClass('chang_btn2');
    } else {
        $(this).parent().children('.chang_btn2').removeClass('chang_btn2').addClass('.all_friends_comment_publish');
    }
});
//点击图片后显示大图
$(document).on('click', 'img.friends_img_critic,img.all_friends_user_img', function () {
    var src = $(this).attr("value");
    var title = $(this).attr("title");
    var html = "<div style='display: table;height:550px;width: 600px'>" +
        "<div style='display: table-cell;text-align: center;vertical-align: middle'>" +
        "<img src='" + src + "' style='max-width:500px; max-height:500px;' class='showBigImage'/>" +
        "</div>" +
        "</div>";
    layer.open({
        type: 1,
        title: title,
        area: ['600px', '600px'],
        shadeClose: true, //点击遮罩关闭
        content: html
    });
});
$(document).on('click', 'span.show_action', function () {
    $(this).parent().children(".show_action_menu").fadeToggle(200);
});
$(document).on('click', 'img.friends_image_header,span.friends_username,.all_friends_username,button.my_friends_information', function () {
    var uid = $(this).attr("value");
    window.location.href = "/find/information?id=" + uid;
});
$(document).on('click', 'div.findMoreComment', function () {
    var pid = $(this).attr("value");
    window.location.href = "criticInformation?pid=" + pid;
});
$(document).on('click', 'li.my_friends_li', function () {
    var $my_friends_btn = $(this).siblings('.my_friends_btn');
    var $show_my_friends_btn = $(this).siblings(".show_my_friends_btn");
    if ($my_friends_btn.is(":hidden")) {
        $my_friends_btn.show(200);
        $show_my_friends_btn.text('-');
    } else {
        $my_friends_btn.hide(200);
        $show_my_friends_btn.text('+');
    }
});
$(document).on('click', 'span.action_menu,button.my_friends_close,button.follow,button.report', function () {
    var $action_menu = $(this);
    var action = $(this).attr('title');
    var id = $(this).attr('value');
    $.ajax({
        url: '/action',
        type: 'post',
        dataType: 'JSON',
        data: {action: action, id: id},
        success: function (data) {
            var result = data.result;
            if (result === 1) {
                alert("关注成功");
                // $action_menu.parent().parent().parent().parent().parent().html('');
            } else if (result === 0) {
                alert('请先登录');
            } else if (result === 2) {
                alert('请进行正确合法的操作');
            } else if (result === 3) {
                alert("举报成功！！！");
            } else if (result === 4) {
                alert("删除成功");
                $action_menu.parent().parent().parent().parent().parent().html('');
            } else if (result === 5) {
                alert("转为朋友圈成功！");
                $action_menu.parent().parent().siblings('.friends_name').children('.isPrivate').text('朋友圈');
                $action_menu.html('');
            } else if (result === 6) {
                alert("删除评论成功");
                $action_menu.parent().parent().parent().parent().parent().html('');
            } else if (result === 7) {
                alert("取消关注成功");
                // $action_menu.parent().parent().parent().parent().parent().html('');
            }
        },
        error: function () {
            alert("请检查网络！！！");
        }
    });
});
$(document).on('click', 'button.friends_comment', function () {
    var $btn = $(this);
    var pid = $(this).attr("value");
    var title = $(this).attr("title");
    if (title == 1) {
        var all_friends_comment = "";
        var all = "";
        $.ajax({
            url: '/getCommentByPid',
            type: 'post',
            dataType: 'JSON',
            data: {pid: pid, start: 1},
            success: function (data) {
                $btn.parent().siblings('.show_all_friends_comment').html('');
                var name = $('.myName').attr("title");
                var wss = $('.my_image_header').attr("src");
                var html = "";
                if (name !== '') {
                    html = "<div style='display:none;background: #f2f2f5;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;' class='show_all_friends_comment'>" +
                        "<div class='all_friends_comment' style=''>" +
                        "<img class='all_friends_comment_user_img' src='" + wss + "' style='' title='" + name + "' value='" + wss + "'/>" +
                        "<textarea class='content' style=''></textarea>" +
                        "<button class='all_friends_comment_publish' value='" + pid + "'>评论" +
                        "</button>" +
                        "</div>";
                } else {
                    html = "<div style='display:none;background: #f2f2f5;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;' class='show_all_friends_comment'>";
                }
                var end = "</div>";
                for (var i = 0; i < data.length; i++) {
                    all_friends_comment += "<!--评论盖楼-->" +
                        "<div class='all_friends_comment'>" +
                        "<div>" +
                        "<img class='all_friends_user_img' src='" + data[i].avatar + "' title='" + data[i].name + "' value='" + data[i].avatar + "'/>" +
                        "<div style='padding-left: 36px;font-size: .8em'>" +
                        "<span class='all_friends_username' style='' value='" + data[i].uid + "'>" + data[i].name + "：</span>" +
                        "<span>" + data[i].critic + "</span>" +
                        "<br/>" +
                        "<span style='color: #808080;'>" + data[i].time + "</span>" +
                        "</div>" +
                        "</div>" +
                        "</div>";
                }
                var cc = "<div style='' value='" + pid + "' class='findMoreComment' id='findMoreComment'>查看更多...</div>" +
                    "<div style='clear: both;content: '.''>" +
                    "</div>";
                all = html + all_friends_comment + cc + end;
                // $('.show_all_friends_comment').html('');
                $btn.parent().parent().append(all);
                // if ($(this).parent().siblings('.show_all_friends_comment').is(':hidden')){}
                $btn.parent().siblings('.show_all_friends_comment').show(500);
                $btn.attr("title", "0");
            },
            error: function () {
                // alert("请检查网络！！！");
                $btn.parent().siblings('.show_all_friends_comment').html('');
                var html = "<div style='display:none;background: #f2f2f5;padding: .5em;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;' class='show_all_friends_comment'>";
                var end = "</div>";
                var show = "<div style='text-align: center'><span>网络错误，请检查网络！！！</span></div>";
                $btn.parent().parent().append(html+show+end);
                $btn.parent().siblings('.show_all_friends_comment').show(500);
                $btn.attr("title", "0");

            }
        });

    } else {
        $(this).parent().siblings('.show_all_friends_comment').hide(500);
        $(this).attr("title", "1");
    }
});
$(document).on("click", "button#show_message_to_button", function () {
    var $content = $(".show_message_to_content_textarea");
    var id = $(this).val();
    if (id === 0 || id == 'undefined') {
        alert("请进行合法正确的操作！！");
        return;
    }
    var content = $content.val();
    if (content.length < 1) {
        alert("请输入信息！！！");
        return;
    }
    // alert(content);
    $.ajax({
        url: '/sendMessage',
        data: {id: id, content: content},
        type: 'post',
        dataType: 'JSON',
        success: function (data) {
            if (data === 1) {
                var name = $(".myName").attr("title");
                var myId = $("#myId").val();
                $content.val("");
                var user =
                    " <div class='show_message_content_name'><a href='/find/information?id=" + myId + "'>" + name + "</a><span style='color: #8b8b8b;'> " + timeStamp2String() + "</span></div>" +
                    "  <div class='show_message_content_content' style='font-size: .9em;padding: .5em;'><span>" + content + "</span></div>";
                $(".show_message_content").append(user);
            } else if (data === 2) {
                alert("请发送正确格式的信息！！！");
            } else if (data === 0) {
                alert("请先登录！！！");
            } else {
                alert("请进行合法正确的操作！！");
            }
        }
    });

});
//点赞，收藏按钮监听
$(document).on("click", "button.friends_collection_current", function () {
    var $btn = $(this);
    var id = $btn.children("span").text();
    var num = (--id);
    var $num_good = $('#num_collections');
    var num_good = $num_good.text();
    $num_good.text(--num_good);
    // $btn.text("收藏");
    $btn.children("span").text(num);
    $btn.removeClass("friends_collection_current").addClass("friends_collection");
    var pid = $(this).val();
    $.ajax({
        url: '/delCollection',
        type: 'post',
        dataType: 'JSON',
        data: {pid: pid},
        success: function (data) {

        },
        error: function () {
            alert("请检查网络！！！");
        }
    })
});

$(document).on("click", "button.friends_collection", function () {
    var $btn = $(this);
    var id = $btn.children("span").text();
    var num = (++id);
    var $num_good = $('#num_collections');
    var num_good = $num_good.text();
    $num_good.text(++num_good);
    // $btn.text("已收藏");
    $btn.children("span").text(num);
    $btn.removeClass("friends_collection").addClass("friends_collection_current");
    var pid = $(this).val();
    $.ajax({
        url: '/addCollection',
        type: 'post',
        dataType: 'JSON',
        data: {pid: pid},
        success: function (data) {

        },
        error: function () {
            alert("请检查网络！！！");
        }
    })
});

$(document).on("click", "button.friends_good_current", function () {
    var $btn = $(this);
    var id = $btn.children("span").text();
    var num = (--id);
    var $num_good = $('#num_goods');
    var num_good = $num_good.text();
    $num_good.text(--num_good);
    // $btn.text("点赞");
    $btn.children("span").text(num);
    $btn.removeClass("friends_good_current").addClass("friends_good");
    var pid = $(this).val();
    $.ajax({
        url: '/delGood',
        type: 'post',
        dataType: 'JSON',
        data: {pid: pid},
        success: function (data) {

        },
        error: function () {
            alert("请检查网络！！！");
        }
    })
});

$(document).on("click", "button.friends_good", function () {
    var $btn = $(this);
    var id = $btn.children("span").text();
    var $num_good = $('#num_goods');
    var num_good = $num_good.text();
    $num_good.text(++num_good);
    var num = (++id);
    // $btn.text("已点赞");
    $btn.children("span").text(num);
    $btn.removeClass("friends_good").addClass("friends_good_current");
    var pid = $(this).val();
    $.ajax({
        url: '/addGood',
        type: 'post',
        dataType: 'JSON',
        data: {pid: pid},
        success: function (data) {

        },
        error: function () {
            alert("请检查网络！！！");
        }
    })
});

//发表评论
$(document).on("click", "button.chang_btn2", function () {
    var $comment = $(this).siblings(".content");
    var text = $comment.val();
    var src = $('#my_image_header').attr("src");
    var name = $('.myName').attr("title");
    var id = $('#myId').val();
    var pid = $(this).val();
    var $friends_comment = $(this).parent().parent().siblings(".friends_action").children(".friends_comment").children("span");
    var num = $friends_comment.text();
    $friends_comment.text(++num);
    var $num_good = $('#num_comments');
    var num_good = $num_good.text();
    $num_good.text(++num_good);
    // alert(text);
    var $all_friends_comment = $(this).parent();
    var html = "<div class='all_friends_comment' style='margin: .5em 0 0 0;padding-bottom: 0;border-bottom: 0em'>" +
        "<div>" +
        "<img class='all_friends_user_img' src='" + src + "' title='" + name + "' value='" + src + "'/>" +
        "<div style='padding-left: 36px;font-size: .8em'>" +
        "<span class='all_friends_username' value='" + id + "'>" + name + "：</span>" +
        "<span>" + text + "</span>" +
        "<br/>" +
        "<span style='color: #808080;'>" + timeStamp2String() + "</span>" +
        "</div>" +
        "</div>" +
        "</div>";
    // $(html).appendTo($all_friends_comment);
    // $comment.val("");
    $(this).removeClass("chang_btn2");
    $.ajax({
        url: '/commentCritic',
        type: 'post',
        dataType: 'JSON',
        data: {pid: pid, comment: text},
        success: function (data) {
            if (data.result === 1) {
                $(html).appendTo($all_friends_comment);
                $comment.val("");
            } else {
                alert("请进行正确合法的操作！！！");
            }
        },
        error: function () {
            alert("请检查网络！！！");
        }
    })
});

function timeStamp2String() {
    var datetime = new Date();
    // datetime.setTime(time);
    var year = datetime.getFullYear();
    var month = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
    var date = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var hour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
    var minute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
    var second = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}