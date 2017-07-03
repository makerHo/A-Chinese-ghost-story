$(function(){
	var clitHeight=$(".header_gg_slides li").height();
	var timers=setInterval(function(){
		$(".header_gg_slides").animate({"top":"-"+clitHeight+"px"},500,function(){
			$(this).css({"top":"0"});
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


// loop test2
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
$(".sevGov").click(function(){
	$(".sec_ban_gov_top").css({"display":"block"});
	$(".sec_banner_collaborate").css({"display":"none"});
	$(".sevGov").addClass("sev_change")
	$(".secColl").removeClass("sev_change");
});
$(".secColl").click(function(){
	$(".sec_ban_gov_top").css({"display":"none"});
	$(".sec_banner_collaborate").css({"display":"block"});
	$(".secColl").addClass("sev_change")
	$(".sevGov").removeClass("sev_change");
});
    
    
    
    
    
    
    
    
    
    
    
   /*----------------------window load-----------------------------*/ 
});
