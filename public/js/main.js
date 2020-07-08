
function init() {
	const containerPromo = document.querySelector('.swiper-container');

	new Swiper('.swiper-container', {
		loop: true,
		autoplay: {
		  delay: 3000,
		},
		sliderPerView: 1,
		slidesPerColumn: 1,
	  });
};

init();
