$(function(){
	$("#header").load("header.html");
	$("#footer").load("footer.html");
	//轮播
	var oli=$(".banner ul li");
	var number=oli.size()-1;
	var i=0;
	var timer;
	$(".banner01 img").eq(0).attr("class","animated fadeInLeft");
	$(".banner01 img").eq(1).attr("class","animated bounceInRight");
	
	function slideFun(num){
		oli.eq(i).css("z-index",10).stop().fadeOut();
		i+=num;
		if(i>number){
			i=0;
		}else if(i<0){
			i=number;
		}
		oli.eq(i).css("z-index",20).stop().fadeIn();
		$(".display").eq(i).css("left","95px");
		$(".display").eq(1-i).css("left","105px");
		$(".banner0"+(i+1)+" img").eq(0).attr("class","animated fadeInLeft");
		$(".banner0"+(i+1)+" img").eq(1).attr("class","animated bounceInRight");
	}
	//自动轮播
	function setNext(){
		slideFun(1);
	}
	timer=setInterval(setNext,2000);
	//鼠标悬停上面时停止轮播
	oli.mouseover(function(){
		clearInterval(timer);
	});
	//鼠标离开继续轮播
	oli.mouseout(function(){
		timer=setInterval(setNext,2000);
	});
	
	$(".prev").hover(function(){
		$(".prev img").last().attr("class","animated rubberBand").css("display","block");
	},function(){
		$(".prev img").last().removeAttr("class","animated rubberBand").css("display","none");
	});
	
	$(".next").hover(function(){
		$(".next img").last().attr("class","animated rubberBand").css("display","block");
	},function(){
		$(".next img").last().removeAttr("class","animated rubberBand").css("display","none");
	});
	//点击上一张
	$(".prev").click(function(){
		clearInterval(timer);
		slideFun(-1);
		timer=setInterval(setNext,2000);
	});
	//点击下一张
	$(".next").click(function(){
		clearInterval(timer);
		slideFun(1);
		timer=setInterval(setNext,2000);
	});
	
	//主要产品
	var c_li=$(".chanpin .content li");
	var now_line=$(".now_linebtn_one");
	var n=c_li.size()-1;
	console.log(n);
	var m=0;
	function chanpinFun(num){
		c_li.eq(m).css("z-index","10").fadeOut();
		now_line.eq(m).removeClass("now");
		m+=num;
		if(m>n){
			m=0;
		}else if(m<0){
			m=n;
		}
		c_li.eq(m).css("z-index","20").fadeIn();
		now_line.eq(m).addClass("now");
	}
	$(".pj").click(function(){
		chanpinFun(-1);
		c_li.eq(m).children("div").removeClass("animated fadeInRight").addClass("animated fadeInLeft");
	})
	$(".nj").click(function(){
		chanpinFun(1);
		c_li.eq(m).children("div").removeClass("animated fadeInLeft").addClass("animated fadeInRight");
	})
	$(".now_linebtn_one span").click(function(){
		c_li.eq(m).css("z-index","10").fadeOut();
		now_line.eq(m).removeClass("now");
		
		var j = $(this).parent().index()-m;
		m=$(this).parent().index();
		if(j<0||j==5){
			c_li.eq(m).children("div").removeClass("animated fadeInRight").addClass("animated fadeInLeft");
		}else if(j>0||j==-5){
			c_li.eq(m).children("div").removeClass("animated fadeInLeft").addClass("animated fadeInRight");
		}
		
		c_li.eq(m).css("z-index","20").fadeIn();
		$(this).parent().addClass("now");
	})
	//业务范围
	$(".centerimg").hover(function(){
		$(this).addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	})
	
	$(".shousuo").hover(function(){
		$(this).addClass("animated tada");
	},function(){
		$(this).removeClass("animated tada");
	})
	
	$(".shousuo").click(function(){
		$(this).toggleClass("zhankai");
		$(this).parent().siblings().slideToggle();
	})
	//团队介绍
	var team_middle=$(".middle_center span")
	var team_li=$(".team_content li");
	var team_num=team_li.size()-1;
	var team_i=0;
	
	function teamFun(num){
		team_li.eq(team_i).css("z-index","10");
		team_middle.eq(team_i).removeClass("now");
		team_i+=num;
		if(team_i>team_num){
			team_i=0;
		}else if(team_i<0){
			team_i=team_num;
		}
		team_li.eq(team_i).css("z-index","20");
		team_middle.eq(team_i).addClass("now");
	}
	
	var team_t=setInterval(teamNext,3000);
	function teamNext(){
		team_li.eq(team_i).removeClass("animated fadeInRight").addClass("animated bounceOutLeft");
		teamFun(1);
		team_li.eq(team_i).removeClass("animated bounceOutLeft").addClass("animated fadeInRight");
	}
	
	$(".team_change .prev").click(function(){
		clearInterval(team_t);
		team_li.eq(team_i).removeClass("animated bounceInLeft").addClass("animated fadeOutRight");
		teamFun(-1);
		team_li.eq(team_i).removeClass("animated fadeOutRight").addClass("animated bounceInLeft");
		team_t=setInterval(teamNext,3000);
	})
	
	$(".team_change .next").click(function(){
		clearInterval(team_t);
		team_li.eq(team_i).removeClass("animated fadeInRight").addClass("animated bounceOutLeft");
		teamFun(1);
		team_li.eq(team_i).removeClass("animated bounceOutLeft").addClass("animated fadeInRight");
		team_t=setInterval(teamNext,3000);
	})
})

