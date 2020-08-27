﻿jQuery(function () {


	$('.burger').click(function(){
		$('.wrapper_1').slideToggle(300);
		$('.burger').toggleClass('active');	
	});
	$('.menu_link_lvl_1').mouseenter(function(){
		$(`.menu_cont_lvl_2`).css({
			'display':'none'
		});
		$(this).next().css({
			'display':'flex'
		});
		
	});
	$(`.menu_cont_lvl_2`).mouseleave(function(){
		$(this).css({
			'display':'none'
		});
	});


	$('#slider_1').bxSlider({
		slideMargin: 0,
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 1,
		nextSelector: $('.next_arrow'),
		prevText: '',
		nextText: '',
		prevSelector: $('.prev_arrow'),
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
	});
	$('#slider_2').bxSlider({
		slideMargin: 0,
		infiniteLoop: false,
		adaptiveHeight: true,
		controls: true,
		minSlides: 1,
		maxSlides: 1,
		nextSelector: $('#slider_2_next_arrow'),
		prevText: '',
		nextText: '',
		prevSelector: $('#slider_2_prev_arrow'),
		moveSlides: 1,
		swipeThreshold: 50,
		responsive: true,
	});



});


