import React from 'react'

import style from './FooterNav.module.scss'

import { Link } from 'react-router-dom'

export default function FooterNav() {
	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		<div className={style.FooterNav}>
			<Link to='/' title='Перейти на главную страницу' onClick={handleClick}>
				Главная
			</Link>
			<Link
				to='/about'
				title='Узнайте больше о нашей компании'
				onClick={handleClick}
			>
				О нас
			</Link>
			<Link
				to='/services'
				title='Наши предоставляемые услуги'
				onClick={handleClick}
			>
				Услуги
			</Link>
			<Link to='/price' title='Цены на наши услуги' onClick={handleClick}>
				Прайс
			</Link>
			<Link to='/contacts' title='Свяжитесь с нами' onClick={handleClick}>
				Контакты
			</Link>
			<Link to='/news' title='Последние новости' onClick={handleClick}>
				Новости
			</Link>
		</div>
	)
}
