$(function(){
	//声明db数据库
	var db  = openDatabase("member","1.0","only",1024*1024*10,function(){});
	
	//header 轮播
	var clitHeight=$(".header_gg_slides li").height();
	var timers=setInterval(function(){
		$(".header_gg_slides").animate({"top":"-"+clitHeight+"px"},500,function(){
			$(this).css({"top":"0"});
			$(".header_gg_slides li:first").appendTo($(this));
		})
	},3000)
	$(".loop_hover_s").hover(function(){
			clearInterval(timers)
		},function(){
			timers=setInterval(function(){
			$(".header_gg_slides").animate({"top":"-"+clitHeight+"px"},500,function(){
				$(this).css({"top":"0"});
				$(".header_gg_slides li:first").appendTo($(this));
			})
		},3000)	
	});

// loop test2 bootstarp 控制间隔
//设置切换时间间隔
	$('.carousel').carousel({
	  interval: 4000
	})

$('.sevGov').click(function(){
	$(this).removeClass("slideswich").addClass("slideswich");
	$(".secColl").removeClass("slideswich");
	$(".slideone").removeClass("slide_off")
	$(".slidetwo").removeClass("slide_off").addClass("slide_off")
});
$('.secColl').click(function(){
	$(this).removeClass("slideswich").addClass("slideswich");
	$(".sevGov").removeClass("slideswich");
	$(".slidetwo").removeClass("slide_off")
	$(".slideone").removeClass("slide_off").addClass("slide_off")
});
//--------------------------------------------

/**
 * 玩家交流区 点击调整宽度效果
 * */
var bbsWidth = $('.bbs_share').width();
var bbsImg = $(".bbs_img").width();
		$('.bbs_share').css({"width":bbsWidth+"px"}).siblings().css({"width":bbsImg+"px"});
		$(".bbs_img").addClass("bbs_imgs");

$(".bbs_img").click(function(){	
	$('.bbs_share').animate({"width":bbsWidth+"px"},500).siblings().animate({"width":bbsImg+"px"},500);
	$(".bbs_img").addClass("bbs_imgs");
	$(".hall_img").removeClass('hall_imgs');
	$(".walkthrough_img").removeClass("walkthrough_imgs");
});
$(".hall_img").click(function(){	
	$('.hall_of_name').animate({"width":bbsWidth+"px"},500).siblings().animate({"width":bbsImg+"px"},500);
	$(".bbs_img").removeClass("bbs_imgs");
	$(".hall_img").addClass('hall_imgs');
	$(".walkthrough_img").removeClass("walkthrough_imgs");
});
$(".walkthrough_img").click(function(){	

	$('.walkthrough').animate({"width":bbsWidth+"px"},500).siblings().animate({"width":bbsImg+"px"},500);
	$(".bbs_img").removeClass("bbs_imgs");
	$(".hall_img").removeClass('hall_imgs');
	$(".walkthrough_img").addClass("walkthrough_imgs");
});


/**
 * news tab页 
 */
var newsContentWidth = $(".news_content div").width()+30;
$(".news_title li").hover(function(){
	var lisIndex = $(this).index();
	$(".news_content").animate({"left":"-"+newsContentWidth*lisIndex+"px"},200);
},function(){
	$(".news_content").stop(false,true);
});
/**
 *video tabs change 
 */
$(".video_tabs ul li").click(function(){
	$(".video_tabs ul li").removeClass("active_video");
	$(this).addClass("active_video");
	var videoIndex=$(this).index();
	$(".video_contant >div").removeClass('video_show').eq(videoIndex).addClass("video_show");
	if(videoIndex==0){
		$(".fly_t").html("一笑倾城CG");
	}else if(videoIndex==1){
		$(".fly_t").html("全新婚礼一条龙");
	}else if(videoIndex==2){
		$(".fly_t").html("落霞峰美景");
	}
});


//role_change sex    
$(".madam-roles").hover(function(){
	$(".male_sex_tab").removeClass("role_show");
	$(".madam_sex_tab").addClass("role_show");
});
$(".male_roles").mouseenter(function(){
	$(".male_sex_tab").addClass("role_show");
	$(".madam_sex_tab").removeClass("role_show");
});
    
    var picNum = 1;//上一次移入的图片的ID
/**
 *mouseenter 效果 */
	$(".role_tabs li").hover(function(){
		var picIndex = $(this).index();
		console.log(picIndex);
		if(picNum == picIndex){
			return;
		}
		picNum = picIndex;//picNum =4
		$(".role_factions").css({"margin-top":"-100px","opacity":"0"}).animate({"margin-top":"0","opacity":"1"},1000);
		$(".profession").css({"margin-left":"-300px"}).delay(200).animate({"margin-left":"0px","opacity":"1"},1000);
		$(".pro_chart").css({"opacity":"0","margin-top":"100px"}).delay(500).animate({"opacity":"1","margin-top":"10px"},1000);
		$(".role_show").css({"opacity":"0"}).delay(200).animate({"opacity":"1"},300);
		
	},function(){
		$(".role_factions").delay(200).stop(false,true);
		$(".profession").delay(200).stop(false,true);
		$(".pro_chart").delay(200).stop(false,true);
		$(".role_show").delay(200).stop(false,true);	
	})
	
		$(".role_factions").css({"margin-top":"-100px","opacity":"0"}).animate({"margin-top":"0","opacity":"1"},1000);
/*
 * --------------------asides---------------------------------------------------
 */
var pocketTopHeight = $(".pocket_top").height();
console.log(pocketTopHeight);
$(".aside_title").mouseenter(function(){
	if($(".pocket_top").height()==0){
		$(".pocket_top").animate({"height":pocketTopHeight+"px"},500);
		return;
	};
	$(".pocket_top").animate({"height":"0"},500);
});
/*
 * ------------------------------侧边栏游戏下载菜单
 */
 $(".aside_meun ul li").mouseenter(function(){
 	var lisHeight = $(this).height();
 	var lisIndex = $(this).index()	
	$(".aside_meun ul li i").eq(lisIndex).animate({"top":"-"+lisHeight+"px"},100,function(){
		$(this).css({"top":lisHeight+"px"}).animate({"top":13+"px"},200);
	});
 });
 /*
  *------------------点击隐藏
  */
	var asides = true;
	var asControlsWidth = $(".aside_contain").width();
 	$(".aside_control").click(function(){
 		 if(!asides){
 		 	$(".aside").animate({"right":0},500);
   		 	$(".aside_control").html("收起&gt;");
   		 	//非真转换
 		 	asides = true;
 		 	return;
 		 };
 		$(".aside").animate({"right":"-"+asControlsWidth+"px"},500);
 		$(".aside_control").html("展开&lt;")
 		//非转换
 		asides=false;
 	})
/**
 * ------------------------点击回到顶部---------------------
 */
	
	$(window).scroll(function(){
		var bodyscrollTop = $("body").scrollTop();
		if(bodyscrollTop<100){
			$(".aside").animate({"right":"-"+asControlsWidth+"px"},50);
			$(".aside_control").html("展开&lt;")
		}else if(bodyscrollTop>100){
			$(".aside").animate({"right":0},50);
			$(".aside_control").html("收起&gt;")
		}
		$(".come_back").click(function(){
			$("body").animate({"scrollTop":0},500);
		})
	});
	/**
	 *视频 遮罩层动画 
	 */
		var vdtimer = setInterval(function(){
			$(".video_up").css({"transform":"scale(1.5,1.5)"}).animate({"transtion":".5s"},500,function(){
				$(".video_up").css({"transform":"scale(1,1)"})
			})
		},2000);
		
		/**
		 *登录成功之后显示登录名称 
		 */

	//登录成功之后将显示注销页面
	if(sessionStorage.getItem("username")){
		$(".aside_h a").css({"background-position": "-455px -188px"}).html(sessionStorage.getItem("username"));
		$(".jump_reg").html("注销");
		if($(".jump_reg").html()=="注销"){
			$(".jump_reg").click(function(){
				sessionStorage.removeItem("username");
				$(".aside_h a").css({
					"background-position": "-455px -321px"
				});
				$(".jump_reg").html("立即注册");
				return;
			});
		}
			$(".jump_reg").click(function(){
			location.href="reg.html";
			});	
	}
   /*----------------------window load-----------------------------*/ 
});
