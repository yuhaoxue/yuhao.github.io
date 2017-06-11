$(function(){
	/*$("#header").load("header.html");
	$("#footer").load("footer.html");*/
	
	$(".article_title .pen").click(function(){
		$(".article_title").animate({"width":"100px"},0,function(){
			$(".article_title").animate({"width":"780px"},1000,"easeOutStrong");
		});
	})
	//点击喜欢文字按钮
	var liketipsArr = ["娘娘威武","皇上万岁，万万岁","爱死你啦、MUA~","再点一下试试~"];
	var flag=false;
	$(".article_iflike").click(function(){
		if(!flag){
			flag=true;
			$(".like_tips").text(liketipsArr[Math.floor(Math.random()*liketipsArr.length)]);
			liketipsMove();
		}else if($(".like_tips").text()=="再点一下试试~"){
			$(".like_tips").text("喊你点就点嗦~傻");
			liketipsMove();
		}
	})
	function liketipsMove(){
		$(".like_tips").animate({"top":"60px","opacity":1},600,"elasticOut",function(){
			$(".like_tips").animate({"left":"-200px","opacity":0},500,"backIn",function(){
				$(".like_tips").animate({"left":"260px","top":"300px","opacity":0},0);
				$(".article_iflike").animate({backgroundPositionY:"-73px"},500);
			})
		})
	}
})
