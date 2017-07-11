$(function(){
	
	
$("[data-toggle='popover']").popover();
 // 创建数据库对象
  var db = openDatabase("member","1.0","only",1024*1024*10,function(){console.log("ok")});
  /**
	 *-------------------背景随机切换------------------- 
	 */
var timer = setInterval(function(){
	var	bodymath = Math.floor(Math.random()*6);
	$(".wrap").css({
		"background":"url(img/reg/banner"+bodymath+".jpg) no-repeat",
		"background-size":"100% 100%"
	});
},6000);
	

/**
 *input 获得焦点之后 弹出工具提示框 
 */
	var email = document.querySelector(".email");
	var username = document.querySelector(".username");
	
	$(".username").blur(function(){
		if($.trim($(".username").val()).length==0){
			$('.username').popover("show");
			$(".username").attr({"data-content":"username can't been empty"})
			$(".users span").addClass("glyphicon-remove");
			$(".users").addClass("has-error");
			return false;
		}
			$('.username').popover("destroy");
			db.transaction(function(tx){
				tx.executeSql("create table if not exists member(id integer primary key asc,username text,email text)");
				tx.executeSql("select * from member where username=?",[username.value],function(tx,data){
					console.log(data.rows.length);
					if(data.rows.length){
						$(".users span").addClass("glyphicon-remove");
						$(".users").addClass("has-error");
						$(".users").prepend("<div class='dialogs'>Login is already taken</div>");
						return;
					}
					$(".users").removeClass("has-error").addClass("has-success");
					$(".users span").removeClass("glyphicon-remove").addClass('glyphicon-ok');
					$(".users .dialogs").remove();
				});
			});
		console.log(username.value.length)
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
 			$(".pwd").attr({"data-content":"password can't been empty"});
 			$(".userpwd span").addClass("glyphicon-remove");
			$(".userpwd").addClass("has-error");
			return false;
 		}
// 		$(".userpwd span").removeClass("glyphicon-remove");
//		$(".userpwd").removeClass("has-error");
// 		$('.pwd').popover("destroy");
 	});
 	$(".pwd").keyup(function(){
 		$('.pwd').popover("show");
 		switch(valide_pwd($.trim($(".pwd").val()))){
 			case 3:
 				$(".pwd").attr({"data-content":"Password is so easy!"});
 				$(".userpwd span").addClass("glyphicon-remove");
				$(".userpwd").addClass("has-error");
 				break;
 			case 2:
 				$(".pwd").attr({"data-content":"Password is easy!"});
 				$(".userpwd span").addClass("glyphicon-remove");
				$(".userpwd").addClass("has-error");
 				break;
 			case 1:
 				$(".pwd").attr({"data-content":"Password strength!"});
 				$(".userpwd span").addClass("glyphicon-remove");
				$(".userpwd").addClass("has-error");
 				break;
 			case 0:
 				$(".pwd").attr({"data-content":"High password strength"});
 				$(".userpwd span").removeClass("glyphicon-remove").addClass("glyphicon-ok");
				$(".userpwd").removeClass("has-error").addClass("has-success");
 				break;
 		}
 	});
 	
 	// repwd 验证过
 	$(".repwd").blur(function(){
 		if($.trim($(".repwd").val()).length==0){
 			$('.repwd').popover("show");
 			$(".repwd").attr({"data-content":"repassword can't been empty"})
 			$(".userrepwd span").addClass("glyphicon-remove");
			$(".userrepwd").addClass("has-error");
			return false;
 		}
 		$('.repwd').popover("destroy");
 	});
 	
 	$(".repwd").keyup(function(){
 		$('.repwd').popover("show");
 		if($.trim($(".repwd").val())!=$.trim($(".pwd").val())){
 			$(".repwd").attr({"data-contant":"The password not same"});
 			$(".userrepwd span").addClass("glyphicon-remove");
 			$(".userrepwd").addClass("has-error");
 			return false;
 		}
 		$(".repwd").attr({"data-contant":""});
 		$('.repwd').popover("destroy");
 		$(".userrepwd span").removeClass("glyphicon-remove").addClass("glyphicon-ok");
		$(".userrepwd").removeClass("has-error").addClass("has-success");
 	});
 	//email verification
 	$(".email").blur(function(){
 		if($.trim($(".email").val()).length==0){
 			$('.email').popover("show");
 			$(".email").attr({"data-content":"email can't been empty"})
 			$(".useremail span").addClass("glyphicon-remove");
			$(".useremail").addClass("has-error");
			return false;
 		}
 		$('.email').popover("destroy");
 	});

popoverShow($(".email"),"Incorrect email format"); 	
 	 function popoverShow(ele,value){
 		ele.keyup(function(){
	 		ele.popover("show");
	 		if(!valide_email($.trim(ele.val()))){
	 			ele.attr({"data-contant":value});
	 			$(".useremail span").addClass("glyphicon-remove");
	 			$(".useremail").addClass("has-error");
	 			console.log("邮箱格式有问题")
	 			return false;
	 		}
	 		$(".useremail").removeClass("has-error").addClass("has-success");
	 		$(".useremail span").removeClass("glyphicon-remove").addClass("glyphicon-ok");
	 		ele.attr({"data-contant":value});
	 		ele.popover("destroy");
	 		console.log("邮箱格式正确")
	 	});
 	}
 

 //btn click 
 	
 	$(".btn").click(function(){
 		//邮箱验证
 		if($.trim($(".username").val()).length==0){
 			$(".users").prepend("<div class='dialogs'>username can't been empty<div>");
 			console.log("已经执行 click 监控username");
 			return false;
   		//密码验证
 		}else if($.trim($(".pwd").val()).length==0){
 			$(".users .dialogs").remove();
 			$(".userpwd").prepend("<div class='dialogs'>password can't been empty<div>");
 			console.log("已经执行 click 监控pwd");
 			return false;
 		//密码强度验证
 		}else if(valide_pwd($.trim($(".pwd").val()))!=0){
 			$(".users .dialogs").remove();
 			$(".userpwd .dialogs").remove();
 			$(".userpwd").prepend("<div class='dialogs'>Not high password strength <div>");
 			console.log("已经执行 click 监控repwd");
 			return false;
 		//repwd 为空验证
 		}else if($.trim($(".repwd").val()).length==0){
 			$(".userpwd .dialogs").remove();
 			$(".userrepwd").prepend("<div class='dialogs'>username can't been empty<div>");
 			console.log("已经执行 click 监控repwd");
 			return false;
 		//repwd!=pwd 验证
 		}else if($.trim($(".repwd").val())!=$.trim($(".pwd").val())){
 			$(".userrepwd .dialogs").remove();
 			$(".userrepwd").prepend("<div class='dialogs'>The password not same<div>");
 			console.log("已经执行 click 监控repwd");
 			console.log(valide_email($.trim($(".email").val())));
 			return false;
 		//邮件为空等验证
 		}else if($.trim($(".email").val()).length==0){
 			$(".userrepwd .dialogs").remove();
 			$(".useremail").prepend("<div class='dialogs'>The1 E-mail can't been empty<div>");
 			console.log("已经执行 click 监控E-mail not empty");
 			return false;
 		//邮箱格式验证
 		}else if(valide_email($.trim($(".email").val()))==false){
 			$("div").remove(".form-group .dialogs");
 			$(".useremail").prepend("<div class='dialogs'>Incorrect email format<div>");
 			console.log("已经执行 click 监控email unIncorrect	");
 			return false;
 		}else{
 			$(".useremail .dialogs").remove();
 		}
		
 		//form correct btn change class
 		$(".btn").removeClass("btn-danger").addClass("btn-success")
		//创建数据库表单
		db.transaction(function(tx){
			tx.executeSql("create table if not exists member(id integer primary key asc,username text,email text)");
			tx.executeSql("select * from member where username=?",[username.value],function(tx,data){
				//添加之前判断用户名是否存在
				
				if(data.rows.length){
					$(".users").prepend("<div class='dialogs'>Sorry this has be register,try other one please</div>");
					return false;
				};
				$(".users .dialogs").remove();
				tx.executeSql("insert into member(username,email)values(?,?)",[username.value,email.value],function(){});
			})
		})
 		location.href="index.html"
 		//-------------------------
 	});
 	
 	
 	
	//-----------------------------
});
