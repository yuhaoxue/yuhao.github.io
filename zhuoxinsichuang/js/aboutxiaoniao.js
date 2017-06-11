$(function(){
	$(".xiaoniao_nav li").click(function(){
		$(this).find("a").css("color","white");
	})
	/*概述轮播*/
	var i=0;
	function gaishuFun(num){
		i+=num;
		if(i>2){
			i=2;
		}else if(i<0){
			i=0;
		}
		$(".gaishu_content>ul").animate({"left":-i*1000});
	}
	$(".goright").click(function(){
		gaishuFun(1);
	})
	$(".goleft").click(function(){
		gaishuFun(-1);
	})
	/*小鸟掌云*/
	$(".yun_btn_left").click(function(){
		$This = $(this);
		$(".yunmove_btn.now").animate({"left":"-78px"},100,function(){
			$(".yunmove_btn.now").removeClass("now");
			$This.find(".yunmove_btn").animate({"left":"0"},400).addClass("now");
		});
		$(".yun_content ul").animate({"left":"0"},600);
	})
	$(".yun_btn_right").click(function(){
		$This = $(this);
		$(".yunmove_btn.now").animate({"left":"78px"},100,function(){
			$(".yunmove_btn.now").removeClass("now");
			$This.find(".yunmove_btn").animate({"left":"0"},400).addClass("now");
		});
		$(".yun_content ul").animate({"left":"-920px"},600);
	})
})
