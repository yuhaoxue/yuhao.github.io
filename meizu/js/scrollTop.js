$(window).scroll(function(){
	if($(this).scrollTop()>700){
		$(".goTop").css("display","block");
	}else{
		$(".goTop").css("display","none");
	}
})

$(".scrollTop").click(function(){
	$("body,html").animate({scrollTop:0},400);
})
