$(function(){
	//画笔动画
	$(".list_pen .pen").click(function(){
		$(".list_pen").animate({"width":"100px"},0,function(){
			$(".list_pen").animate({"width":"1100px"},1000,"easeOutStrong");
		});
	})
	//加载下一页
	$(".list_btn").click(function(){
		$(".content2").slideDown();
	})
})
