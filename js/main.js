$(function(){
	$('.slider').slick({ 
		slidesToShow:1,
		slidesToScroll:1,		
		dots:true,
		fade:true,		
		autoplay: true,
        autoplaySpeed: 1500,
		infinite: true,
		// arrows:true,
		// prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
		// nextArrow:'<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
		});
	});

$(function(){
	$('.toggle-menu').on('click',function(){
		$('.main-nav').toggleClass('open');
	});
});

$(document).ready(function () {
	new WOW().init();
});

var tlLogo = new TimelineMax();
tlLogo.to($('#logo-svg'), 5, {
        'stroke-dashoffset': 0
	}, .01)
	.to($('#logo-svg'),2, {
		'fill': 'black'
	})