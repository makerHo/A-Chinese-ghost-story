$(function(){
	/**
	 *-------------------背景随机切换------------------- 
	 */
	
$("[data-toggle='popover']").popover();
var timer = setInterval(function(){
	var	bodymath = Math.floor(Math.random()*6);
	$(".wrap").css({"background":"url(img/reg/banner"+bodymath+".jpg) no-repeat"});
},3000);
	

/**
 *input 获得焦点之后 弹出工具提示框 
 */

	$(".username").blur(function(){
		if($.trim($(".username").val()).length==0){
			$('.username').popover("show");
			$(".username").attr({"data-content":"username can't been empty"})
			return false;
		}
			$('.username').popover("destroy");
		
	});
	$(".username").keydown(function(){
		if($.trim($(".username").val()).length>0){
			$('.username').popover("hide");
		}
	})
 //pwd 验证
 	$(".pwd").blur(function(){
 		if($.trim($(".pwd").val()).length==0){
 			$('.pwd').popover("show");
 			$(".pwd").attr({"data-content":"password can't been empty"})
			return false;
 		}
 		$('.pwd').popover("destroy");
 	});
 	$(".pwd").keyup(function(){
 		$('.pwd').popover("show");
 		switch(valide_pwd($.trim($(".pwd").val()))){
 			case 3:
 				$(".pwd").attr({"data-content":"Password is so easy!"});
 				break;
 			case 2:
 				$(".pwd").attr({"data-content":"Password is easy!"});
 				break;
 			case 1:
 				$(".pwd").attr({"data-content":"Password strength!"});
 				break;
 			case 0:
 				$(".pwd").attr({"data-content":"High password strength"});
 				break;
 		}
 	});
 	
 	// repwd 验证过
 	$(".repwd").blur(function(){
 		if($.trim($(".repwd").val()).length==0){
 			$('.repwd').popover("show");
 			$(".repwd").attr({"data-content":"repassword can't been empty"})
			return false;
 		}
 		$('.repwd').popover("destroy");
 	});
 	
 	$(".repwd").keyup(function(){
 		$('.repwd').popover("show");
 		if($.trim($(".repwd").val())!=$.trim($("pwd").val())){
 			$(".repwd").attr({"data-contant":"The password not same"});
 			return false;
 		}
 		$(".repwd").attr({"data-contant":""});
 		$('.repwd').popover("destroy");
 	});
 	//email verification
 	$(".email").blur(function(){
 		if($.trim($(".email").val()).length==0){
 			$('.email').popover("show");
 			$(".email").attr({"data-content":"email can't been empty"})
			return false;
 		}
 		$('.email').popover("destroy");
 	});

   popoverShow($("email"),"Incorrect email format");
   	
 	 function popoverShow(ele,value){
 		ele.keyup(function(){
	 		ele.popover("show");
	 		if(valide_email($.trim(ele.val()))==false){
	 			ele.attr({"data-contant":value});
	 			return false;
	 		}
	 		ele.attr({"data-contant":value});
	 		ele.popover("destroy");
	 	});
 	}
 
 // 创建数据库对象
  var webDB = openDatabase("member","1.0","only",1024*1024*10,function(){console.log("ok")})
 //btn click 
 	
 	$(".btn").click(function(){
 		//邮箱验证
 		if($.trim($(".username").val()).length==0){
 			$(".users").prepend("<div class='dialogs'>username can't been empty<div>");
 			console.log("已经执行 click 监控username");
 			return false;
   		//密码验证
 		}else if($.trim($(".pwd").val()).length==0){
// 			$("div").remove(".form-group .dialogs");
 			$(".userpwd").prepend("<div class='dialogs'>password can't been empty<div>");
 			console.log("已经执行 click 监控pwd");
 			return false;
 		//密码强度验证
 		}else if(valide_pwd($.trim($(".pwd").val()))!=0){
 			$("div").remove(".form-group .dialogs");
 			$(".userpwd").prepend("<div class='dialogs'>Not high password strength <div>");
 			console.log("已经执行 click 监控repwd");
 			return false;
 		//repwd 为空验证
 		}else if($.trim($(".repwd").val()).length==0){
 			$("div").remove(".form-group .dialogs");
 			$(".userrepwd").prepend("<div class='dialogs'>username can't been empty<div>");
 			console.log("已经执行 click 监控repwd");
 			return false;
 		//repwd!=pwd 验证
 		}else if($.trim($(".repwd").val())!=$.trim($(".pwd").val())){
 			$("div").remove(".form-group .dialogs");
 			$(".userrepwd").prepend("<div class='dialogs'>The password not same<div>");
 			console.log("已经执行 click 监控repwd");
 			console.log(valide_email($.trim($(".email").val())));
 			return false;
 		//邮件为空等验证
 		}else if($.trim($(".email").val()).length==0){
 			$("div").remove(".form-group .dialogs");
 			$(".useremail").prepend("<div class='dialogs'>The E-mail can't been empty<div>");
 			console.log("已经执行 click 监控E-mail not empty");
 			return false;
 		//邮箱格式验证
 		}else if(valide_email($.trim($(".email").val()))==false){
 			$("div").remove(".form-group .dialogs");
 			$(".useremail").prepend("<div class='dialogs'>Incorrect email format<div>");
 			console.log("已经执行 click 监控email unIncorrect");
 			return false;
 		}
 		webDB.transaction(function(tx){
 			tx.executeSql("create table if not exists js(id integer primary key asc,username text)");
 			tx.executeSql("insert into js(username)values('"+$(".username").val()+"')");
 		});
 		console.log(webDB);
 	});
 	
 	
 	
	//-----------------------------
});
