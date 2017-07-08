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
 		if(!$.trim($(".repwd").val())==$.trim($("pwd").val())){
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
   	$(".email").keyup(function(){
   		$('.repwd').popover("show");
   		console.log(valide_email($.trim($(".email").val())));
   		if(!valide_email($.trim($(".email").val()))){
   			$(".email").attr({"data-content":"Incorrect email format"});
   			return false;
   		}
   		$('.email').popover("destroy");
   	});
 	
	//-----------------------------
});
