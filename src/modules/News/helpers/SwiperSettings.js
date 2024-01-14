import { Autoplay, Navigation } from 'swiper/modules'

const swiperBreakpoints = {
	320: { slidesPerView: 1, spaceBetween: 20 },
	640: { slidesPerView: 2, spaceBetween: 20 },
	1100: { slidesPerView: 3, spaceBetween: 20 },
	1250: { slidesPerView: 4, spaceBetween: 20 },
}

const getSwiperSettings = (data, swiperRef, prevRef, nextRef) => ({
	modules: [Autoplay, Navigation],
	className: 'relative',
	slidesPerView: 2,
	slidesPerGroup: 1,
	loop: data.length > 1,
	navigation: { prevEl: prevRef.current, nextEl: nextRef.current },
	breakpoints: swiperBreakpoints,
	autoplay: { delay: 5000, disableOnInteraction: false },
	onSwiper: swiper => (swiperRef.current = swiper),
})

export default getSwiperSettings
