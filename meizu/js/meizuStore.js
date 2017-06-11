$(".header_box").load("meizuHeader.html");
$(".footer_box").load("meizufooter.html");

var li_s = $(".nav_box>ul li").size();
var t,n=0;
function bannerFun(num){
	$(".nav_box>ul li").eq(n).fadeOut();
	n+=num;
	if(n>li_s-1){
		n=0;
	}else if(n<0){
		n=li_s-1;
	}
	$(".nav_box>ul li").eq(n).fadeIn().siblings().fadeOut();
	$(".move_icon ul li").eq(n).addClass("icon_now").siblings().removeClass("icon_now");
}
//自动轮播
t = setInterval(bannerSet,2000);
function bannerSet(){
	bannerFun(1);
}
//左移
$(".left_btn").click(function(){
	bannerFun(-1);
})
//右移
$(".right_btn").click(function(){
	bannerFun(1);
})
//鼠标悬停
$(".nav_box").mouseenter(function(){
	clearInterval(t);
})
$(".nav_box").mouseleave(function(){
	t = setInterval(bannerSet,2000);
})
//轮播小圆点
$(".move_icon ul").delegate("li","hover",function(){
	$(this).addClass("icon_now").siblings().removeClass("icon_now");
	n=$(this).index();
	$(".nav_box>ul li").eq(n).fadeIn().siblings().fadeOut();
})

$(".nav_title li").hover(function(){
	$(".nav_menu ul li").eq($(this).index()).show();
},function(){
	$(".nav_menu ul li").eq($(this).index()).hide();
})

//
$(".recommend>h2 span").click(function(){
	var n = $(this).index();
	$(".recommend_box").animate({"left":-1240*(1-n)+"px"},500);
	$(this).addClass("btn_now").siblings().removeClass("btn_now");
})
