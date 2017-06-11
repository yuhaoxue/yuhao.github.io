$(".header_box").load("meizuHeader.html");
$(".footer_box").load("meizufooter.html");

$(".msgList ul li a").click(function(){
	$(".msgList ul li a").removeClass("title_now");
	$(this).addClass("title_now");
	if($(this).parent().index()==1){
		$(".myindent").addClass("content_now").siblings().removeClass("content_now");
	}
	
	//添加链接
	if($(".link_wrap a").size()>2){
		$(".link_wrap a:last").remove();
		$(".link_wrap").append("<a>"+$(this).text()+"</a>");
	}else{
		$(".link_wrap").append(" > <a>"+$(this).text()+"</a>");
	}
})

$(".myindent_title").delegate("li","click",function(){
	$(this).addClass("item_now").siblings().removeClass("item_now");
})

//获取本地存储的数据
$(".phoneType").text(localStorage.phoneType);
$(".price").text(localStorage.price);
$(".num").text(localStorage.num);
$(".total").text(localStorage.total);
