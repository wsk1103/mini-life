/**
 * 
 */
function check(){
	var password=form.password.value;
	var password2=form.password2.value;
	var toolpassword=document.getElementById("toolpassword");
	var toolpassword2=document.getElementById("toolpassword2");
	var len=0;
	len=password.length;
	if (password==""||password==null){
		toolpassword.innerHTML="密码不能为空";
		toolpassword.style.color="red";
		return;
	}
	else if (password2==""||password2==null){
		toolpassword2.innerHTML="确认密码不能为空";
		toolpassword2.style.color="red";
		toolpassword.innerHTML="";
		toolpassword.style.color="red";
		return;
	}
	else if (len<6){
		toolpassword.innerHTML="密码不能少于6个字符";
	}
	else if (password!=password2){
		//alert(password==password2);
		toolpassword2.innerHTML="两次输入的密码不正确";
		toolpassword2.style.color="red";
		toolpassword.innerHTML="";
		toolpassword.style.color="red";
		return;
	}
	else {
		toolpassword.innerHTML="";
		toolpassword2.innerHTML="";
		document.getElementById("form").submit();
	}
}