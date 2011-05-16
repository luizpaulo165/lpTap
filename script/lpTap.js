$.fn.lpTab = function(){
	var openButton = $('.open');
	var closeButton = $('.close');
	var wrapContent = $('#wrap_lpTap');
	var divFantasma = $('<section id="wrap_cont"></section>').appendTo(wrapContent);
	var contentDiv = wrapContent.html();
	var tabRight = $('#tip_right');
		
	openButton.click(function(){
		$(function(){
			wrapContent.fadeIn('fast').animate({left:'0px'},800);	
		});
		$(function(){
			tabRight.stop(true,true).delay(1000).fadeIn('fast').animate({right:'0px'},500);	
		});
		divFantasma.html(contentDiv);			
	});
	closeButton.click(function(){
		//$(this).fadeOut('fast');
		$(function(){
			wrapContent.stop(true,true).delay(500).animate({left:'-2000px'},1000).fadeOut(10);	
		});
		$(function(){
			tabRight.animate({right:'420px'},500).fadeOut('fast');	
		});
	});
};


