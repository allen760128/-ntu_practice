$(function(){
	$("#nav ul li").hover(function(){
		$(this).children('ul').stop(true, true).fadeIn(400).css("display","block");
		
	},function(){
		$(this).children('ul').stop(true, true).fadeOut(400).css("display","none");
	});
});