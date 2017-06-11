

var li_s = $(".banner_list li").size();
$(".banner_list").css("width",li_s*1349+"px");
var t,n=0;
function bannerFun(num){
	n+=num;
	if(n>li_s-1){
		n=0;
	}else if(n<0){
		n=li_s-1;
	}
	$(".banner_list").animate({"left":-n*1349+"px"},500);
	$(".move_icon span").eq(n).addClass("icon_now").siblings().removeClass("icon_now");
}
//自动轮播
t = setInterval(bannerSet,3000);
function bannerSet(){
	bannerFun(1);
}
//点击按钮切换
$(".move_icon span").click(function(){
	clearInterval(t);
	n = $(this).index();
	$(".banner_list").animate({"left":-n*1349+"px"},500);
	$(".move_icon span").eq(n).addClass("icon_now").siblings().removeClass("icon_now");
	t = setInterval(bannerSet,3000);
});
//鼠标悬停下拉隐藏菜单
$(".list_one").hover(function(){
	$(".head_wrap").css("background","white");
	$(this).find(".nav_one").show();
	
	var oli = $(this).find(".nav_one li");
	var num = oli.size();
	
	oli.css("opacity","0");
	
	for(var i=0;i<num;i++){
		oli.eq(i).animate({"marginLeft":"-20px","opacity":"1"},1000);
	}
},function(){
	$(".head_wrap").css("background","");
	$(this).find(".nav_one").hide();
	$(this).find(".nav_one li").css("marginLeft","20px");
	//$(this).find(".nav_one li").css("left","30px");
});

$(".nav_one li").hover(function(){
	$(this).css("opacity","1").siblings().css("opacity","0.5");
});
$(".nav_one").mouseleave(function(){
	$(".nav_one li").css("opacity","1");
});
