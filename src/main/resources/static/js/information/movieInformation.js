/**
 * Created by Maibenben on 2017/6/11.
 */
$(function () {
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
    var $movie_name = $('.movie_name_text');
    var $movie_content = $('.release_message');
    var $isPrivate = $('.movie_state');
//        alert($isPrivate.val());
    $('.chang_btn').click(function () {
        if ($movie_name.val().length < 1) {
            alert("电影名不能为空");
            return;
        }
        if ($movie_content.val().length < 1) {
            alert("发布的内容不能为空");
            return;
        }
        var imgPath = $('#file_upload').val();
//        alert(imgPath);
        if (imgPath == "") {
            // alert("我要开始发送啦");
            $.ajax({
                type: "post",
                url: "/publishCritic",
                dataType: "JSON",
                data: {movie_name: $movie_name.val(), movie_content: $movie_content.val(), isPrivate: $isPrivate.val()},//一同上传的数据
                success: function (data) {
                    //send code by email;
                    var result = data.result;
                    if (result == '1') {
                        // alert("上传成功");
                        window.location = '';
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
            formData.append("file_upload", $("#file_upload")[0].files[0]);
            formData.append("movie_name", $movie_name.val());
            formData.append("movie_content", $movie_content.val());
            formData.append("isPrivate", $isPrivate.val());
            // formData.append("name",name);
            $.ajax({
                type: "POST",
                url: "/publishCritic",
                contentType: false,
                dataType: 'json',//返回数据的类型
                processData: false,
                data: formData,//一同上传的数据
                success: function (msg) {
                    if (msg.result == 1) {
                        // alert("上传成功");
                        window.location = '';
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
//            $('.release_form').submit();
    });
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