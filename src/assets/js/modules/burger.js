export function burgerClick() {
	const burger = $('#burger');

	burger.on('click', () => {
		if (burger.hasClass('show')) {
			burger.removeClass('show');
		} else {
			burger.addClass('show');
		}
	})
}