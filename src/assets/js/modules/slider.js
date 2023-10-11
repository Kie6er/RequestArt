function remToPx(remValue) {
	// Получаем текущий базовый размер шрифта (font-size) из элемента <html>
	var htmlFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

	// Переводим значение из rem в px
	var pxValue = remValue * htmlFontSize;

	// Округляем значение до целых пикселей (по желанию)
	return Math.round(pxValue) + 'px';
}

export function sliders() {
	new Swiper('#nft-swiper', {
		direction: 'horizontal',
		spaceBetween: `${remToPx(2)}rem`,
		slidesPerView: 'auto'
	});

	new Swiper('.advantage-right__slider', {
		direction: 'horizontal',
		spaceBetween: `${remToPx(2)}rem`,
		slidesPerView: 'auto'
	})
}

