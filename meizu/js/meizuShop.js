$(".header_box").load("meizuHeader.html");
$(".footer_box").load("meizufooter.html");
//放大镜
$(".big_img").mousemove(function(event){
	var ev = event||window.event;
	//设置遮罩层跟随鼠标移动
	var maskleft = ev.offsetX;
	var masktop = ev.offsetY;
	//超出边界处理
	if(maskleft<50){
		maskleft=50;
	}else if(maskleft>=325){
		maskleft=325;
	}
	if(masktop<50){
		masktop=50;
	}else if(masktop>=325){
		masktop=325;
	}
	
	$(".mask").css({"left":maskleft,"top":masktop});
	//改变大图位置
	$(".enlarge_box").css({"backgroundPosition":(-maskleft*4+200)+"px "+(-masktop*4+200)+"px"});
})

$(".big_img").mouseenter(function(){
	$(".mask").css("display","block");
	$(".enlarge_box").css("display","block");
})

$(".big_img").mouseleave(function(){
	$(".mask").css("display","none");
	$(".enlarge_box").css("display","none");
})
//切换图片
$(".img_box ul li").click(function(){
	$(this).addClass("img_now").siblings().removeClass("img_now");
	$(".big_img img").eq($(this).index()).css("z-index","20").siblings().css("z-index","10");
})
/*下拉显示隐藏菜单栏*/
$(window).scroll(function(){
	if($(this).scrollTop()>200){
		$(".hidden_message").slideDown();
	}else{
		$(".hidden_message").slideUp();
	}
})
//购物车
var num=1;
$(".shopping_car button").click(function(){
	if($(this).text()=="+"){
		num++;
	}else{
		num--;
	}
	num>1?$(".shopping_car button").eq(1).removeAttr("disabled"):$(".shopping_car button").eq(1).attr("disabled","");
	num = num<1?1:num;
	$(".number").text(num);
	
	var price = Math.floor($(".price span").text().slice(1));
	$(".total").html("&yen;"+num*price+".00");
	
	//本地存储
	localStorage.phoneType = $(".phoneType").text();
	localStorage.price = price;
	localStorage.num = num;
	localStorage.total = num*price;
})

//类型选择
$(".message_box>div a").click(function(){
	$(this).addClass("selectNow").siblings().removeClass("selectNow");
})

/*商品详情、规格参数、常见问题*/
$(".information_wrap>ul li").click(function(){
	$(this).find("h3").addClass("now_show");
	$(this).siblings().find("h3").removeClass("now_show");
	$(".information_one").eq($(this).index()).css("display","block").siblings(".information_one").css("display","none");
})
