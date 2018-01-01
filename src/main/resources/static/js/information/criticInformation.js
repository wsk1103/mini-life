/**
 * Created by Maibenben on 2017/6/6.
 */
$(function () {
    var start=2;
    var now = false;
    $('#findMoreComment').click(function () {
        var pid = $(this).attr("value");
        var $all_friends_comment = $('.all_friends_comment');
        if (!now) {
            now = true;
            $.ajax({
                url:'getCommentByPid',
                type: 'post',
                dataType: 'JSON',
                data: {pid: pid, start: start},
                success: function (data) {
                    start++;
                    now =false;
                    var html="";
                    if (data.length===0){
                        $('#notMoreComment').show(500);
                        $('#findMoreComment').hide(500);
                        return;
                    }
                    for (var  i = 0;i<data.length;i++) {
                        html+="<div class='specific_comment'>" +
                            "<img class='all_friends_user_img' src='"+data[i].avatar+"' style='' title='"+data[i].name+"' ' value='"+data[i].avatar+"'/>" +
                            "<div style='padding-left: 36px;font-size: .8em'>" +
                            "<span class='all_friends_username' style='' value='"+data[i].uid+"'>"+data[i].name+"：</span>" +
                            "<span>"+data[i].critic+"</span>" +
                            "<br/>" +
                            "<span style='color: #808080;'>"+data[i].time+"</span>" +
                            "</div>" +
                            "</div>";
                    }
                    $all_friends_comment.append(html);
                },
                error:function () {
                    alert('请进行正确合法的操作！！');
                    now =false;
                }
            });
        }
    });
});