$(function(){
	var clitHeight=$(".header_gg_slides li").height();
	var timers=setInterval(function(){
		$(".header_gg_slides").animate({"top":"-"+clitHeight+"px"},500,function(){
			$(this).css({"top":"0"});
//			$(".header_gg_slides li").removeClass("headerGGSlides").addClass("headerGGSlides")
			$(".header_gg_slides li:first").appendTo($(this));
		})
//		console.log(clitHeight)
	},3000)
	$(".loop_hover_s").hover(function(){
			clearInterval(timers)
		},function(){
			timers=setInterval(function(){
				console.log(clitHeight)
			$(".header_gg_slides").animate({"top":"-"+clitHeight+"px"},500,function(){
				$(this).css({"top":"0"});
				$(".header_gg_slides li:first").appendTo($(this));
			})
		},3000)	
	});
/**
 * sec_banner_gov 内容区轮播图 gov类型
 * */
//loop test1
//var eleWidth = $(".ban_gov li a img").width();
//var secTimers;
//  secTimers = setInterval(function(){
//  	$(".ban_gov").animate({"left":"-"+eleWidth+"px"},500,function(){
//  		$(this).css({"left":"0px"});
//  		$(".ban_gov li:first").appendTo($(this));
//  		$(".sec_ban_title li").css({})
//  	})
//  },3000);
// 
//  $(".sec_banner_gov").hover(function(){
//  	console.log(secTimers)
//  	clearInterval(secTimers);
//  },function(){
//  	secTimers = setInterval(function(){
//  	$(".ban_gov").animate({"left":"-"+eleWidth+"px"},500,function(){
//	    		$(this).css({"left":"0px"});
//	    		$(".ban_gov li:first").appendTo($(this))
//	    	})
//	    },3000)
//  });
//


// loop test2 bootstarp 控制间隔
//设置切换时间间隔
	$('.carousel').carousel({
	  interval: 4000
	})
// loop test3

//var secLoopTimer;
//var eleWidth=$(".ban_gov li a img").width();
//
//
//secLoopTimer= setInterval(function(){
// 	$(".sec_ban_title li").each(function(index,value){
//	   	if(index==$(".sec_ban_title li").length){
//	   		index=0;
//	   	}
//	   	console.log(index)
//	   	$(".sec_ban_title li").removeClass("sec_ban_title_change").eq(index).addClass("sec_ban_title_change");
// 	});
//},3000);

//click change gov
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
		$('.bbs_share').css({"width":bbsWidth+"px"});
		$(".bbs_img").css({"background-position":"-1160px -300px"});
		$(".hall_of_name").css({"width":bbsImg+"px"});
		$(".walkthrough").css({"width":bbsImg+"px"});	
$(".bbs_img").click(function(){	
	$('.bbs_share').animate({"width":bbsWidth+"px"},500);
	$(this).css({"background-position":"-1160px -300px"});
//	$(".bbs_img").css({"background-position":"-1260px -300px"});
	$(".hall_img").css({"background-position":"-1060px -300px"});
	$(".walkthrough_img").css({"background-position":"-0px -660px"})
	$('.hall_of_name').animate({"width":bbsImg+"px"},500);
	$('.walkthrough').animate({"width":bbsImg+"px"},500);
});
$(".hall_img").click(function(){	
	$('.bbs_share').animate({"width":bbsImg+"px",},500);
	$('.hall_of_name').animate({"width":bbsWidth+"px"},500);
	$(this).css({"background-position":"-960px -300px"});
	$(".bbs_img").css({"background-position":"-1260px -300px"});
//	$(".hall_img").css({"background-position":"-1060px -300px"});
	$(".walkthrough_img").css({"background-position":"-0px -660px"})
	$('.walkthrough').animate({"width":bbsImg+"px"},500);
});
$(".walkthrough_img").click(function(){	
	$('.bbs_share').animate({"width":bbsImg+"px"},500);
	$('.hall_of_name').animate({"width":bbsImg+"px"},500);
	$('.walkthrough').animate({"width":bbsWidth+"px"},500);
	$(this).css({"background-position":"-860px -300px"});
	$(".bbs_img").css({"background-position":"-1260px -300px"});
	$(".hall_img").css({"background-position":"-1060px -300px"});
//	$(".walkthrough_img").css({"background-position":"-0px -660px"})
});
/**
 * news tab页 
 */
var newsContentWidth = $(".news_content div").width()+30;
//console.log(newsContentWidth)
$(".news_title li").hover(function(){
	var lisIndex = $(this).index();
	$(".news_content").animate({"left":"-"+newsContentWidth*lisIndex+"px"},300);
});
/**
 *video tabs change 
 */
$(".video_tabs ul li").click(function(){
	$(".video_tabs ul li").removeClass("active_video");
	$(this).addClass("active_video");
	var videoIndex=$(this).index();
	$(".video_contant div").removeClass('video_show').eq(videoIndex).addClass("video_show");
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
    
    
    
    
   /*----------------------window load-----------------------------*/ 
});
