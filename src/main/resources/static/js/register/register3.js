/**
 * 
 */
function check(){
	var name=form.name.value;
	var password=form.password.value;
	var password2=form.password2.value;
	var toolname=document.getElementById("toolname");
	var toolpassword=document.getElementById("toolpassword");
	var toolpassword2=document.getElementById("toolpassword2");
	var len=0;
	len=password.length;
	if (name==""||name==null){
		toolname.innerHTML="用户名不能为空";
		toolname.style.color="red";
		return;
	}
	else if (password==""||password==null){
		toolpassword.innerHTML="密码不能为空";
		toolpassword.style.color="red";
		toolname.innerHTML="";
		toolname.style.color="red";
		return;
	}
	else if (password2==""||password2==null){
		toolpassword2.innerHTML="确认密码不能为空";
		toolpassword2.style.color="red";
		toolpassword.innerHTML="";
		toolpassword.style.color="red";
		toolname.innerHTML="";
		toolname.style.color="red";
		return;
	}
	else if (len<6){
		toolname.innerHTML="";
		toolpassword.innerHTML="密码不能少于6个字符";
	}
	else if (password!=password2){
		//alert(password==password2);
		toolpassword2.innerHTML="两次输入的密码不正确";
		toolpassword2.style.color="red";
		toolname.innerHTML="";
		toolname.style.color="red";
		toolpassword.innerHTML="";
		toolpassword.style.color="red";
		return;
	}
	else {
		toolname.innerHTML="";
		toolpassword.innerHTML="";
		toolpassword2.innerHTML="";
		document.getElementById("form").submit();
	}
}