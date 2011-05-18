$.fn.lpTab = function(options){
	var openButton = $('.open');
	var closeButton = $('.close');
	var wrapContent = $('#' + this.attr('rel'));
	var wrapRight = "<section id='tip_right'><a href='javascript:void(0)' class='close'>X</a></section>";
	
	openButton.click(function(){
		wrapContent.fadeIn('fast').animate({left:'0px'},1500);		
		wrapContent.after(wrapRight);
		var tabRight = $('#tip_right');			
		tabRight.stop(true,true).delay(1500).fadeIn('fast').animate({right:'0px'},500);			
	});
	closeButton.live('click',function(){
		wrapContent.stop(true,true).delay(500).animate({left:'-2000px'},1000).fadeOut(10);
		var tabRight = $('#tip_right');	
		tabRight.animate({right:'420px'},500).fadeOut('fast');	
	});
};


