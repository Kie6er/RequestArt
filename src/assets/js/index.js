import '../../index.html';
import '../../assets/scss/style.scss';
import * as burger from "./modules/burger";
import * as swiper from "./modules/slider";

function changeAdvantageText() {
	const advantageDescription = $('.advantage-left__description');

	if ($(window).outerWidth() < 769) {
		advantageDescription.text(`
		Вы можете отправить нам референс отрисовки и мы просчитаем стоимость и время. Стоимость и время исполнения зависит от сложности иллюстраций.
		`);
	} else {
		advantageDescription.text(`
		Сториборды, фотореалистичные изображения, стилизации под гравюры,  красивые иллюстрации для журналов — это к нам. Также мы разрабатываем дизайн, который делает визуальную коммуникацию простой и понятной, по всем направлениям — брендинг под ключ, логотипы, motion, веб-дизайн сайтов.
		`);
	}
}

burger.burgerClick()
swiper.sliders();
changeAdvantageText();

$(window).resize(function () {
	changeAdvantageText();
});
