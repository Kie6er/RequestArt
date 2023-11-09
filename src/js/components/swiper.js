import $ from "jquery";
import Swiper from "swiper";

$(document).ready(function () {
	function remToPx(remValue) {
		// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
		var htmlFontSize = parseFloat(
			getComputedStyle(document.documentElement).fontSize
		);

		// Переводим значение из rem в px
		var pxValue = remValue * htmlFontSize;

		// Округляем значение до целых пикселей (по желанию)
		return Math.round(pxValue) + "px";
	}

	const collectionSwiper = new Swiper('.main-collection__cards', {
		enabled: true,
		slidesPerView: "auto",
		spaceBetween: `${remToPx(2)}rem`,
		breakpoints: {
			768: {
				enabled: false
			}
		}
	})
});