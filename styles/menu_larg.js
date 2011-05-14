$(function(menu_larg){
	$('h2 img').css('width','72px');
	$('h2 img').hover(function(){
		var self = $(this);
		
		self.addClass('botao');
		self.animate({
			width:"120px"
			},200);
	}),
	$('h2 img').mouseout(function(){
		var self = $(this);
		
		self.removeClass('botao');
		self.animate({
			width:"72px"
			},200);
	});
});