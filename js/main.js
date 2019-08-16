$(function () {
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 1500,
		infinite: true,
		// arrows:true,
		// prevArrow:'<button class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></button>',
		// nextArrow:'<button class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></button>',
	});
});

$(function () {
	$('.toggle-menu').on('click', function () {
		$('.main-nav').toggleClass('open');
	});
});

$(document).ready(function () {
	new WOW().init();


	$("a.menu__link").click(function () {
		var elementClick = $(this).attr("href")
		var destination = $(elementClick).offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
			scrollTop: destination
		}, 800);
		return false;

	});

	let footerLogoPosition = $('#logo-svg').offset().top;
	var tlLogo = new TimelineMax();

	$(window).on('scroll', function(e){
		console.log($(this).scrollTop() + ' : ' + footerLogoPosition)
		if ($(this).scrollTop() > (footerLogoPosition - $(this).height())){
			tlLogo.to($('#logo-svg'), 3, {
				'stroke-dashoffset': 0
			})
				.to($('#logo-svg'), .5, {
					'fill': 'black'
				})
		}
	})
});


