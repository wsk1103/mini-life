/**
 *
 */
function loadimage() {
	document.getElementById("identity").src = "image.jsp?" + new Date().getTime();
}
//function validate(){
//	var i=form.photo.value;
//	location.href="validate.jsp?rand="+i;
//}
// var http_request = false; //使用ajax
// function createRequest(url) {
// 	if (window.XMLHttpRequest) { // 非IE浏览器
// 		http_request = new XMLHttpRequest(); //创建XMLHttpRequest对象
// 	}
// 	else if (window.ActiveXObject) { // IE浏览器
// 		try {
// 			http_request = new ActiveXObject("Msxml2.XMLHTTP"); //创建XMLHttpRequest对象
// 		} catch (e) {
// 			try {
// 				http_request = new ActiveXObject("Microsoft.XMLHTTP"); //创建XMLHttpRequest对象
// 			} catch (e) {}
// 		}
// 	}
// 	if (!http_request) {
// 		alert("不能创建XMLHttpRequest对象实例！");
// 		return false;
// 	}
// 	http_request.open('GET', url, true); //创建与服务器的连接
// 	http_request.onreadystatechange = getResult; //调用返回结果处理函数
// 	http_request.send(null); //向服务器发送请求
// }
// function getResult() {
// 	if (http_request.readyState == 4) { // 判断请求状态
// 		if (http_request.status == 200) { // 请求成功，开始处理返回结果
//
// 			if (http_request.responseText == "failEmail") {
// 				document.getElementById("toolnum").style.color = "red";
// 				document.getElementById("toolnum").innerHTML = "手机验证码错误"; //设置提示内容
// 				document.getElementById("toolnum").style.display = "block"; //显示提示框
// 				//location.href="success.jsp?name="+form2.name.value;
// 				loadimage();
// 				return;
// 			}
// 			if (http_request.responseText == "successEmail") {
// 				//document.getElementById("form2").submit();
// 				location.href="useraction!register2?phone="+form2.phone.value+"&"+new Date().getTime();
// 			//alert("success");
// 			}
// 		}
// 		else { // 请求页面有错误
// 			alert("您所请求的页面有错误！");
// 			return;
// 		}
// 	}
// }
// function checkUser(phone) {
// 	var photo = form2.photo.value;
// 	var code_phone = form2.code_phone.value;
// 	var agree = document.getElementById("agree");
// 	if (!agree.checked) {
// 		alert("您未同意注册条款，无法进行注册");
// 		return;
// 	}
// 	if (phone.value == "") {
// 		document.getElementById("toolphone").innerHTML = "请输入手机号码"; //设置提示内容
// 		document.getElementById("toolphone").style.color = "red";
// 		return;
// 	}
// 	else if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone.value))) {
// 		document.getElementById("toolphone").innerHTML = "请输入有效的手机号码"; //设置提示内容
// 		document.getElementById("toolphone").style.color = "red";
// 		return;
// 	}
// 	else {
// 		document.getElementById("toolphone").innerHTML = ""; //设置提示内容
// 		document.getElementById("toolphone").style.color = "red";
// 		createRequest3('useraction!isNull?phone=' + phone.value + '&' + new Date().getTime());
// 		if (photo == null || photo == "") {
// 			document.getElementById("toolphoto").innerHTML = "请输入图片验证码"; //设置提示内容
// 			document.getElementById("toolphoto").style.color = "red";
// 			return;
// 		}
// 		else {
// 			document.getElementById("toolphoto").innerHTML = ""; //设置提示内容
// 			document.getElementById("toolphoto").style.color = "red";
// 			createRequest2('check!validate1?photo=' + photo + '&' + new Date().getTime());
// 			if (code_phone == "") {
// 				document.getElementById("toolnum").innerHTML = "请输入手机验证码"; //设置提示内容
// 				document.getElementById("toolnum").style.color = "red";
// 				return;
// 			}
// 			else {
// 				document.getElementById("toolnum").innerHTML = ""; //设置提示内容
// 				document.getElementById("toolnum").style.color = "red";
// 				createRequest('useraction!checkE?code_phone=' + code_phone + '&' + new Date().getTime());
// 			}
//
// 		}
// 	}
//
// }
// function enter() {
// 	if (event.keyCode == 13)
// 		checkUser(form2.phone);
// }
// function send(phone) {
// 	if (phone == "") {
// 		document.getElementById("toolphone").innerHTML = "请输入手机号码"; //设置提示内容
// 		document.getElementById("toolphone").style.color = "red";
// 		return;
// 	}
// 	else if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(phone))) {
// 		document.getElementById("toolphone").innerHTML = "请输入有效的手机号码"; //设置提示内容
// 		document.getElementById("toolphone").style.color = "red";
// 		return;
// 	}
// 	else {
// 		document.getElementById("toolphone").innerHTML = ""; //设置提示内容
// 		document.getElementById("toolphone").style.color = "red";
// 		createRequest('email!sendE?phone=' + phone + '&' + new Date().getTime());
// 		alert("已经发送，注意查收");
// 		document.getElementById("get").value="已经发送";
// 	}
// }
// //验证图片验证码
// var http_request2 = false; //使用ajax
// function createRequest2(url) {
// 	if (window.XMLHttpRequest) { // 非IE浏览器
// 		http_request2 = new XMLHttpRequest(); //创建XMLHttpRequest对象
// 	}
// 	else if (window.ActiveXObject) { // IE浏览器
// 		try {
// 			http_request2 = new ActiveXObject("Msxml2.XMLHTTP"); //创建XMLHttpRequest对象
// 		} catch (e) {
// 			try {
// 				http_request2 = new ActiveXObject("Microsoft.XMLHTTP"); //创建XMLHttpRequest对象
// 			} catch (e) {}
// 		}
// 	}
// 	if (!http_request2) {
// 		alert("不能创建XMLHttpRequest对象实例！");
// 		return false;
// 	}
// 	http_request2.open('GET', url, true); //创建与服务器的连接
// 	http_request2.onreadystatechange = getResult2; //调用返回结果处理函数
// 	http_request2.send(null); //向服务器发送请求
// }
// function getResult2() {
// 	if (http_request2.readyState == 4) { // 判断请求状态
// 		if (http_request2.status == 200) { // 请求成功，开始处理返回结果
// 			if (http_request2.responseText == "fail") {
// 				document.getElementById("toolphoto").style.color = "red";
// 				document.getElementById("toolphoto").innerHTML = "图片验证码错误"; //设置提示内容
// 				document.getElementById("toolphoto").style.display = "block"; //显示提示框
// 				//location.href="success.jsp?name="+form2.name.value;
// 				loadimage();
// 				return;
// 			}
// 			else {
// 				//document.getElementById("form2").submit();
// 				//alert("success");
// 			}
// 		}
// 		else { // 请求页面有错误
// 			alert("您所请求的页面有错误！");
// 			return;
// 		}
// 	}
// }
// var http_request3 = false; //使用ajax
// var cr3 = false;
// function createRequest3(url) {
// 	if (window.XMLHttpRequest) { // 非IE浏览器
// 		http_request3 = new XMLHttpRequest(); //创建XMLHttpRequest对象
// 	}
// 	else if (window.ActiveXObject) { // IE浏览器
// 		try {
// 			http_request3 = new ActiveXObject("Msxml2.XMLHTTP"); //创建XMLHttpRequest对象
// 		} catch (e) {
// 			try {
// 				http_request3 = new ActiveXObject("Microsoft.XMLHTTP"); //创建XMLHttpRequest对象
// 			} catch (e) {}
// 		}
// 	}
// 	if (!http_request3) {
// 		alert("不能创建XMLHttpRequest对象实例！");
// 		return false;
// 	}
// 	http_request3.open('GET', url, true); //创建与服务器的连接
// 	http_request3.onreadystatechange = getResult3; //调用返回结果处理函数
// 	http_request3.send(null); //向服务器发送请求
// }
// function getResult3() {
// 	if (http_request3.readyState == 4) { // 判断请求状态
// 		if (http_request3.status == 200) { // 请求成功，开始处理返回结果
// 			//alert(http_request3.responseText)
// 			if (http_request3.responseText == "exists") {
// 				document.getElementById("toolphone").innerHTML = "该手机号码已被注册过!<a href='forgetPassword.html' class='find'>找回密码</a>"; //设置提示内容
// 				document.getElementById("toolphone").style.color = "red";
// 				document.getElementById("toolphone").style.display = "block"; //显示提示框
// 				cr3 = false;
// 				return;
// 			}
// 			cr3 = true;
// 		}
// 		else { // 请求页面有错误
// 			alert("您所请求的页面有错误！");
// 			return;
// 		}
// 	}
// }
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
	var agree = $('.agree');
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
	});
	$('.getProtocol').click(function () {
        $('.show_protocol').show();
    });
	$('.protocol_close').click(function () {
        $('.show_protocol').hide();
    });
	//send Email to the user`s phont
	$('.get').click(function () {
		var receive = $('.receive');
		if (!agree.is(':checked')){
			$(receive).text('请先阅读并接收条款');
			$(receive).css({'color':'red'});
			return;
		} else {
			$(receive).text('我已仔细阅读并接受');
			$(receive).css({'color':'black'});
		}
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
				data:{phone:phone.val(),photo:photo.val(),action:'register'},
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

			})
		}
	});
	$('.next').click(function () {
		allValue();
		var receive = $('.receive');
		if (!agree.is(':checked')){
			$(receive).text('请先阅读并接受协议');
			$(receive).css({'color':'red'});
			return;
		} else {
			$(receive).text('我已仔细阅读并接受');
			$(receive).css({'color':'black'});
		}
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
			})
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