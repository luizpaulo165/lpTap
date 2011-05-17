$.fn.lpTab = function(){
	var openButton = $('.open');
	var closeButton = $('.close');
	var wrapContent = $('#wrap_lpTap');
	var wrapRight = $("<section id='tip_right'><a href='javascript:void(0)' class='close'>X</a></section>");
	var tabRight = $('#tip_right');
	
	openButton.click(function(){
		wrapRight.live('click', function(){
			$(this).after(wrapContent);
		});		
		wrapContent.after(wrapRight);
		wrapContent.fadeIn('fast').animate({left:'0px'},800);	
		tabRight.stop(true,true).delay(1000).fadeIn('fast').animate({right:'0px'},500);			
	});
	closeButton.click(function(){
		//$(this).fadeOut('fast');
		wrapContent.stop(true,true).delay(500).animate({left:'-2000px'},1000).fadeOut(10);	
		tabRight.animate({right:'420px'},500).fadeOut('fast');	
	});
};


