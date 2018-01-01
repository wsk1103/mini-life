/**
 *
 */
function loadimage() {
    document.getElementById("identity").src = "image.jsp?" + new Date().getTime();
}
$(function () {
    var right_phone = false;
    var right_photo = false;
    var right_code_phone = false;
    var phone = $('.phone');
    var photo = $('.photo');
    var code_phone = $('.code-phone');
    var toolphone = $('.toolphone');
    var toolphone2 = $('.toolphone2');
    var toolphoto = $('.toolphoto');
    var toolphoto2 = $('.toolphoto2');
    var toolnum = $('.toolnum');
    var toolnum2 = $('.toolnum2');
    phone.bind('input propertychange', function () {
        if (!(/^1[0-9]{10}$/.test(phone.val()))) {
            toolphone.show();
            toolphoto.hide();
            toolphone2.hide();
        } else {
            toolphone.hide();
        }
    });
    photo.focus(function () {
        if (!(/^1[0-9]{10}$/.test(phone.val()))) {
            toolphone.show();
            toolphoto.hide();
            toolphone2.hide();
        } else {
            toolphone.hide();
        }
    });
    photo.bind('input propertychange',function () {
            toolphoto.hide();
            toolphone2.hide();
    })
    code_phone.focus(function () {
        if (!(/^1[0-9]{10}$/.test(phone.val()))) {
            toolphone.show();
            toolphoto.hide();
            toolphone2.hide();
        } else {
            toolphone.hide();
            right_phone = true;
        }
        if (photo.val() == "") {
            toolphoto2.show();
            toolphoto.hide();
            toolphone2.hide();
        } else {
            toolphoto2.hide();
            right_photo = true;
        }
    })
    //send Email to the user`s phont
    $('.get').click(function () {
        if (!(/^1[0-9]{10}$/.test(phone.val()))) {
            toolphone.show();
            right_phone = false;
            return;
        } else {
            toolphone.hide();
            right_phone = true;
        }
        if (photo.val() == "") {
            toolphoto2.show();
            right_photo = false;
            return;
        } else {
            toolphoto2.hide();
            right_photo = true;
        }
        if (right_phone && right_photo){
            $.ajax({
                type:"post",
                url:"sendEmail",
                dataType:"JSON",
                data:{phone:phone.val(),photo:photo.val(),action:'forget'},
                success:function (data) {
                    //send code by email;
                    var result = data.result;
                    if (result == '0'){
                        toolphoto.show();
                        loadimage();
                    } else if (result == '1'){
                        changeSendEmailButton();
                        toolphone2.hide();
                    } else if (result == '-1'){
                        toolphone2.show();
                        loadimage();
                    }
                },
                error:function () {
                    toolphone2.show();
                    loadimage();
                }

            });
        }
    });
    $('.next').click(function () {
        allValue();
        if (right_code_phone && right_phone && right_photo){
            $.ajax({
                type:"post",
                url:"checkPhone",
                dataType:"JSON",
                data:{photo:photo.val(),code_phone:code_phone.val()},
                success:function (data) {
                    //photo code 
                    var result = data.result;
                    if (result == '2'){
                        toolphoto.show();
                        loadimage();
                    } else if (result == '3'){
                        toolnum.show();
                        loadimage();
                    } else  if (result == '1'){
                        $('.form').submit();
                    }
                },
                error:function () {
                    toolphoto.show();
                    loadimage();
                }
            });
        }
    });
    $("body").keydown(function() {
        if (event.keyCode == "13") {//keyCode=13是回车键
            $('.next').click();
        }
    });
    function allValue() {
        if (!(/^1[0-9]{10}$/.test(phone.val()))) {
            toolphone.show();
            right_phone = false;
            return;
        } else {
            toolphone.hide();
            right_phone = true;
        }
        if (photo.val() == "") {
            toolphoto2.show();
            right_photo = false;
            return;
        } else {
            toolphoto2.hide();
            right_photo = true;
        }
        if (code_phone.val() == ""){
            toolnum2.show();
            return;
        } else {
            toolnum2.hide();
            right_code_phone = true;
        }
    }
    function changeSendEmailButton() {
        var wsk = setInterval(change, 1000);
        var sendEmailButton = $('.get');
        var count = 60;
        function change() {
            count--;
            if (count == 0){
                sendEmailButton.removeAttr('disabled');
                count = 60;
                sendEmailButton.val('发送验证码');
                clearInterval(wsk);
            } else {
                sendEmailButton.attr('disabled', true);
                sendEmailButton.val('还剩'+count+'秒');
            }
        }
    }

})