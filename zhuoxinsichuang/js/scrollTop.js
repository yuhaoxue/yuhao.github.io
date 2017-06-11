$(function(){
	//返回顶部效果（判断是否在顶部以隐藏显示按钮）
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.go_top').fadeIn();
		}else{
			$('.go_top').fadeOut(0);
		}
	});

	// 点击返回顶部滚动
	$('.scroll_top').click(function () {
		$(this).parent().animate({"bottom":1000,"opacity":0},400,function(){
			$('.go_top').css("opacity",1).fadeOut(0).css("bottom",200);
		});
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	});
})
