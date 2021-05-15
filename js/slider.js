$(document).ready(function(){
	$('.gallery__slider').slick({
		arrows:true,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 1000,
		infinite: true,
		draggable: false,
		responsive:[
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},{
				breakpoint: 730,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
		// waitForAnimate: false,
		// variableWidth: true,
	});

	$('.testimonials__slider').slick({
		autoplay: true,
		arrows: false,
		dots:true,
		adaptiveHeight:true,
	});
	

});

// TABS


