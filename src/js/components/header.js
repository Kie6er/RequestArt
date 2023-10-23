import $ from "jquery";

$(document).ready(function () {
	$('.burger-btn').on('click', function () {
		$(this).toggleClass('open');
		$('.burger-menu').toggleClass('show');
		$('body').toggleClass('lock');
	})

	scrollHeader();
	$(window).resize(function () {
		if ($(this).innerWidth() >= 769) {
			$('body').removeClass('lock');
			$('.burger-btn').removeClass('open');
			$('.burger-menu').removeClass('show');
		}

		scrollHeader();
	})
	$(window).on('scroll', scrollHeader);

	function scrollHeader() {
		if ($(window).innerWidth() < 769) {
			if ($(window).scrollTop() > 1) {
				$('.header').addClass('scroll');
			} else {
				$('.header').removeClass('scroll');
			}
		}
	}
});
