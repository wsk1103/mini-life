/**
 * Created by Maibenben on 2017/5/1.
 */
$(function () {
    var start = 2;
    var now = false;
    // var to_top = $('.go_to_top');
    // $(to_top).click(function () {
    //     $("body,html").animate({scrollTop: 0}, 800);
    // });
    var num = 0.75;
    //自动加载
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
//显示图片
    $("#file_upload").change(function () {
        var $file = $(this);
        var fileObj = $file[0];
        var windowURL = window.URL || window.webkitURL;
        var dataURL;
        var $img = $("#preview");

        if (fileObj && fileObj.files && fileObj.files[0]) {
            dataURL = windowURL.createObjectURL(fileObj.files[0]);
            $img.attr('src', dataURL);
        } else {
            dataURL = $file.val();
            var imgObj = document.getElementById("preview");
// 两个坑:
// 1、在设置filter属性时，元素必须已经存在在DOM树中，动态创建的Node，也需要在设置属性前加入到DOM中，先设置属性在加入，无效；
// 2、src属性需要像下面的方式添加，上面的两种方式添加，无效；
            imgObj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
            imgObj.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = dataURL;
        }
        $('.image_container').show(100);
    });
    $('.close_img_tip').click(function () {
        $('.image_container').hide(100);
        $('#preview').attr('src', '');
        $('#file_upload').val('');
    });
    // var $movie_name = $('.movie_name_text');
    var $movie_content = $('.release_message');

    $('.find_more').click(function () {
        getUP();
    });

    //向下滚动时，自动加载
    function getUP() {
        $.ajax({
            url: "/getUP",
            type: "POST",
            dataType: "JSON",
            data: {start: start},
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
                for (var i = 0; i < result.length; i++) {
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
                                "<span class='action_menu' value='" + result[i].pid + "' title='translation'>转为朋友圈</span>" +
                                "<span class='action_menu' value='" + result[i].pid + "' title='delcritic'>×删除</span>" +
                                "</div>" +
                                "</div>";
                        } else {
                            action = "<div class='wsk'>" +
                                "<span class='show_action'>Ⅲ</span>" +
                                "<div class='show_action_menu'>" +
                                "<span class='action_menu' value='" + result[i].pid + "' title='delcritic'>×删除</span>" +
                                "</div>" +
                                "</div>";
                        }
                    } else {
                        action = "<div class='wsk'>" +
                            "<span class='show_action'>Ⅲ</span>" +
                            "<div class='show_action_menu'>" +
                            "<span class='action_menu' value='" + result[i].pid + "' title='unsubscribe'>×关注</span>" +
                            "<span class='action_menu' value='" + result[i].pid + "' title='report'>●举报</span>" +
                            "</div>" +
                            "</div>";
                    }
                    if (result[i].good === 1) {
                        good = "<button value='" + result[i].pid + "' class='friends_good_current'>♡点赞 <span>" + result[i].goodCounts + "</span></button>";
                    } else {
                        good = "<button value='" + result[i].pid + "' class='friends_good'>♡点赞 <span>" + result[i].goodCounts + "</span></button>"
                    }
                    if (result[i].collection === 1) {
                        collection = "<button value='" + result[i].pid + "' class='friends_collection_current'>☆收藏 <span>" + result[i].collectionCounts + "</span></button>";
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
                        "<button value='" + result[i].pid + "' class='friends_comment' title='1'>◇评论 <span>" + result[i].commentCounts + "</span></button>" +
                        good +
                        "</div>" +
                        "</div>" +
                        "</div>"
                    );
                }
                // showPicture();
            }
        });
    }

    var $size_tip = $('.size_tip');
    $movie_content.bind('input propertychange', function () {
        var curLength = $(this).val().length;
        $size_tip.text("还可以输入" + (122 - curLength) + "个字");
        if (curLength >= 122) {
            var num = $(this).val().substr(0, 121);
            $(this).val(num);
            alert("超过字数限制，多出的字将被截断！");
        }
        if (curLength > 0) {
            $(".movie_release").addClass('chang_btn');
        } else {
            $(".movie_release").removeClass('chang_btn');
        }
    });
});
//发表影评
$(document).on("click", ".chang_btn", function () {
    var $movie_name = $('.movie_name_text');
    var $movie_content = $('.release_message');
    var $isPrivate = $('.movie_state');
    if ($movie_name.val().length < 1) {
        alert("电影名不能为空");
        return;
    }
    if ($movie_content.val().length < 1) {
        alert("发布的内容不能为空");
        return;
    }
    var imgPath = $('#file_upload').val();

    var $username = $(".myName").attr("title");//用户名
    var $userImage = $(".my_image_header").attr("src");//用户头像
    var $userId = $("#myId").val();//用户ID
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var min = date.getMinutes();
    var seconds = date.getSeconds();
    var nowTime = year + "-" + month + "-" + day + " " + hours + ":" + min + ":" + seconds;
//        alert(imgPath);
    //没有图片
    if (imgPath == "") {
        //先将发表的内容显示出来
        // alert("我要开始发送啦");
        var isPri = "<span class='friends_time isPrivate' \" +\n" +
            "                \"value='1'>朋友圈</span>";
        if ($isPrivate.val() == "1") {
            isPri = "<span class='friends_time isPrivate' " +
                "value='1'>朋友圈</span>";
        } else {
            isPri = "<span class='friends_time isPrivate' " +
                "value='2'>所有人</span>";
        }
        var show = "<div class='friends_stats my_stats' style='display: none'>" +
            "                    <div>" +
            "                        <div class='friends_stats_top'>" +
            "                            <div>" +
            "                                <img src='" + $userImage + "' class='friends_image_header' alt='??'" +
            "                                     value='" + $userId + "'/>" +
            "                            </div>" +
            "                            <div class='friends_name'>" +
            "                                <div>" +
            "                                    <span value='" + $userId + "'" +
            "                                          class='friends_username'>" + $username + "</span>" +
            "                                </div>" +
            "                                <span class='friends_time' " +
            "                                      '>" + nowTime + "</span>" +
            "                                <br/>" + isPri +
            "                            </div>" +
            "                            <div class='wsk' >" +
            "                                <span class='show_action'>Ⅲ</span>" +
            "                                <div  class='show_action_menu' >" +
            "                                </div>" +
            "                            </div>" +
            "                        </div>" +
            "                        <div class='friends_stats_middle clearfix'>" +
            "                            <div class='friends_text'>" +
            "                            <span >" + $movie_content.val() +
            "                            </span>" +
            "                            </div>" +
            "                            <span class='friends_title'>" + $movie_name.val() +
            "                        </span>" +
            "                        </div>" +
            "                        <div class='friends_action'>" +
            "                            <button class='friends_collection'>" +
            "                                ☆收藏" +
            "                                <span>0</span>" +
            "                            </button>" +
            "                            <button  class='friends_comment' title='1'>" +
            "                                ◇评论" +
            "                                <span>0</span>" +
            "                            </button>" +
            "                            <button  class='friends_good'>" +
            "                                ♡点赞" +
            "                                <span >0</span>" +
            "                            </button>" +
            "                        </div>" +
            "                    </div>" +
            "                </div>";
        var friends_stats_fix = $(".friends_stats_fix");
        friends_stats_fix.prepend(show);
        $(".my_stats").show(500);
        $.ajax({
            type: "post",
            url: "/publishCritic",
            dataType: "JSON",
            data: {movie_name: $movie_name.val(), movie_content: $movie_content.val(), isPrivate: $isPrivate.val()},//一同上传的数据
            success: function (data) {
                //send code by email;
                var result = data.result;
                if (result == '1') {
                    // alert("发布成功");
                    $movie_content.attr("value", "");
                    // window.location = '';
                }
                else {
                    window.location = 'login';
                }
            },
            error: function () {
            }

        });
    }
    else {
        // alert("我要开始发送啦，有图片");
        var formData = new FormData();
        // var name = $("#file_upload").val();
        var imageSrc = $("#preview").attr('src');
        formData.append("file_upload", $("#file_upload")[0].files[0]);
        formData.append("movie_name", $movie_name.val());
        formData.append("movie_content", $movie_content.val());
        formData.append("isPrivate", $isPrivate.val());
        // formData.append("name",name);
        //发表的内容显示出来
        //先将发表的内容显示出来
        // alert("我要开始发送啦");
        var isPri = "<span class='friends_time isPrivate' \" +\n" +
            "                \"value='1'>朋友圈</span>";
        if ($isPrivate.val() == "1") {
            isPri = "<span class='friends_time isPrivate' " +
                "value='1'>朋友圈</span>";
        } else {
            isPri = "<span class='friends_time isPrivate' " +
                "value='2'>所有人</span>";
        }
        var show = "<div class='friends_stats my_stats' style='display: none'>" +
            "                    <div>" +
            "                        <div class='friends_stats_top'>" +
            "                            <div>" +
            "                                <img src='" + $userImage + "' class='friends_image_header' alt='??'" +
            "                                     value='" + $userId + "'/>" +
            "                            </div>" +
            "                            <div class='friends_name'>" +
            "                                <div>" +
            "                                    <span value='" + $userId + "'" +
            "                                          class='friends_username'>" + $username + "</span>" +
            "                                </div>" +
            "                                <span class='friends_time' " +
            "                                      '>" + nowTime + "</span>" +
            "                                <br/>" + isPri +
            "                            </div>" +
            "                            <div class='wsk' >" +
            "                                <span class='show_action'>Ⅲ</span>" +
            "                                <div  class='show_action_menu' >" +
            "                                </div>" +
            "                            </div>" +
            "                        </div>" +
            "                        <div class='friends_stats_middle clearfix'>" +
            "                            <div class='friends_text'>" +
            "                            <span >" + $movie_content.val() +
            "                            </span>" +
            "                            </div>" +
            "                            <span class='friends_title'>" + $movie_name.val() +
            "                        </span>" +
            "                        </div>" +
            "<div class='friends_image' >" +
            "                            <img class='friends_img_critic' src='" + imageSrc + "'" +
            "                                 alt='" + $movie_name.val() + "' ttitle='" + $movie_name.val() + "' value = '" + imageSrc + "'/>" +
            "                        </div>" +
            "                        <div class='friends_action'>" +
            "                            <button class='friends_collection'>" +
            "                                ☆收藏" +
            "                                <span>0</span>" +
            "                            </button>" +
            "                            <button  class='friends_comment' title='1'>" +
            "                                ◇评论" +
            "                                <span>0</span>" +
            "                            </button>" +
            "                            <button  class='friends_good'>" +
            "                                ♡点赞" +
            "                                <span >0</span>" +
            "                            </button>" +
            "                        </div>" +
            "                    </div>" +
            "                </div>";
        var friends_stats_fix = $(".friends_stats_fix");
        friends_stats_fix.prepend(show);
        $(".my_stats").show(500);
        $.ajax({
            type: "POST",
            url: "/publishCritic",
            contentType: false,
            dataType: 'json',//返回数据的类型
            processData: false,
            data: formData,//一同上传的数据
            success: function (msg) {
                if (1 == msg.result) {
                    // alert("发布成功");
                    $movie_content.attr("value", "");
                    // window.location = '';
                } else if (2 == msg.result) {
                    alert("不能上传非法图片");
                    window.location = 'login';
                } else if (0 == msg.result) {
                    alert("操作失败！请检查网络!");
                    window.location = 'login';
                }
                else {
                    window.location = 'login';
                }
//                        $('.img').attr('src', msg.url);
            },
            error: function () {
                alert("上传失败，请检查网络后重试");
            }
        });
    }
});