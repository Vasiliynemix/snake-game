if ($('.slider__body').length > 0) {
	$('.slider__body').slick({
		//autoplay: true,
		//infinity: false,
		dots: true,
		arrows: false,
		accessibility: false,
		sliderToShow: 1,
		autoplayspeed: 3000,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}