$(function() {

	var header = $("#header"),
		introH = $("#intro").innerHeight();
		scrollOffset = $(window).scrollTop();


	// Fixed Header-----------
	checkScroll(scrollOffset);

	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});


	function checkScroll(scrollOffset) {

		if( scrollOffset >= introH ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
	}


	// Smooth scroll
	$("[data-scroll]") .on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockid = $this.data('scroll'),
			blockOffset = $(blockid).offset().top;

		$("#nav a").removeClass("active");	
		$this.addClass("active");	

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);
	});


		/* Menu nav toggle */
	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});



	 /* TABS */
	$('.tab-trigger').click(function() {
   		var id = $(this).attr('data-tab'),
       	content = $('.tab-content[data-tab="'+ id +'"]');
   
   		$('.tab-trigger.active').removeClass('active');
   		$(this).addClass('active');
   
   		$('.tab-content.active').removeClass('active');
   		content.addClass('active');
	});


});