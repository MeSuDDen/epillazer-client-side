import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Swiper, SwiperSlide } from 'swiper/react'

//THIS IS: API
import { fetchDataLatestNews } from '../../api/fetchDataLatestNews'

//THIS IS: Форматирование даты
import DateValidator from '../../helpers/DateValidator'

//THIS IS: Настройки SwiperSlider
import getSwiperSettings from '../../helpers/SwiperSettings'

import 'swiper/css'
import 'swiper/css/effect-fade'

import Loader from '../Loader/Loader'
import NewsContainer from '../NewsContainer/NewsContainer'
import style from './Slider.module.scss'

export default function Slider() {
	const [data, setData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const swiperRef = useRef(null)
	const prevRef = useRef(null)
	const nextRef = useRef(null)

	//THIS IS: Загрузка данных с сервера
	useEffect(() => {
		const fetchData = async () => {
			await fetchDataLatestNews(setData, setIsLoading)
			if (swiperRef.current) {
				swiperRef.current.slideTo(0)
			}
		}

		fetchData()
	}, [])

	//THIS IS: Функционал кнопок для слайдера
	useEffect(() => {
		if (prevRef.current && nextRef.current) {
			prevRef.current.addEventListener('click', () =>
				swiperRef.current.slidePrev()
			)
			nextRef.current.addEventListener('click', () =>
				swiperRef.current.slideNext()
			)
		}
	}, [])

	//THIS IS: Получаем настройки слайдера
	const swiperSettings = getSwiperSettings(data, swiperRef, prevRef, nextRef)

	return (
		<>
			<Swiper {...swiperSettings}>
				{isLoading
					? Array.from({ length: 4 }, (_, index) => (
							<SwiperSlide key={index}>
								<Loader />
							</SwiperSlide>
					  ))
					: data.map(element => {
							const formattedDate = DateValidator(element.date_published)

							return (
								<SwiperSlide key={element.id}>
									<NewsContainer
										title={element.title}
										date_published={formattedDate}
										article_text={element.article_text}
										link={element.link}
									/>
								</SwiperSlide>
							)
					  })}
			</Swiper>
			<button ref={prevRef} className={style.ButtonPrev}>
				<IoIosArrowBack color='white' />
			</button>
			<button ref={nextRef} className={style.ButtonNext}>
				<IoIosArrowForward color='white' />
			</button>
		</>
	)
}
