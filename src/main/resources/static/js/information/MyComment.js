/**
 * Created by Maibenben on 2017/6/6.
 */
$(function () {
    var start = 2;
    var now = false;
    $('#findMoreComment').click(function () {
        var pid = $(this).attr("value");
        var $all_friends_comment = $('.friends_stats_fix');
        if (!now) {
            now = true;
            $.ajax({
                url: '/getMyComment',
                type: 'post',
                dataType: 'JSON',
                data: {pid: pid, start: start},
                success: function (data) {
                    start++;
                    now = false;
                    var html = "";
                    var username = $('.myName').attr("title");
                    // var avatar = $('#my_image_header').attr("src");
                    if (data.length === 0) {
                        $('#notMoreComment').show(500);
                        $('#findMoreComment').hide(500);
                        return;
                    }
                    for (var i = 0; i < data.length; i++) {
                        html += "<div class='friends_stats'>" +
                            "<div>" +
                            "<div class='friends_stats_top'>" +
                            "<div>" +
                            "<img class='friends_image_header' src='"+data[i].avatar+"' alt='??' value='"+data[i].fid+"'/>" +
                            "</div>" +
                            "<div class='friends_name'>" +
                            "<div>" +
                            "<span value='"+data[i].fid+"' class='friends_username'>"+username+"</span>" +
                            "</div>" +
                            "<span class='friends_time'>"+"评论时间："+data[i].commentTime+"</span>" +
                            "<br/>" +
                            "</div>" +
                            "<div class='wsk' style=''>" +
                            "<span class='show_action'>Ⅲ</span>" +
                            "<div style='' class='show_action_menu'>" +
                            "<span style='' class='action_menu' value='"+data[i].cid+"' title='delcomment'>×删除</span>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "<div class='friends_stats_middle clearfix'>" +
                            "<div class='friends_text'>" +
                            "<span style='font-size: .9em'>"+data[i].comment+"</span>" +
                            "</div>" +
                            "</div>" +
                            "</div>" +
                            "<div style='background: #F2F2F5;margin: 0 2em;padding: .5em 1em;font-size: .8em;'>" +
                            "<span style='color: #808080;'>"+"评论 "+data[i].name+"的影评:"+"</span>" +
                            "<a href='/criticInformation?pid='"+data[i].pid+" style='text-decoration: none;'>"+data[i].critic+"</a>" +
                            "</div>" +
                            "<div class='clearfix' style='padding-bottom: 1em'></div>" +
                            "</div>";
                    }
                    $all_friends_comment.append(html);
                },
                error: function () {
                    alert('请进行正确合法的操作！！');
                    now = false;
                },
            });
        }
    });
});