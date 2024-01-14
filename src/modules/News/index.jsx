import React from 'react'

import { useNavigate } from 'react-router-dom'

import Container from '../../components/layout/Container/Container'
import Button from '../../ui/Button/Button'
import Title from '../../ui/Title/Title'
import Slider from './components/Slider/Slider'
import style from './style.module.scss'

export default function News() {
	//THIS IS: Навигация на /news
	const navigate = useNavigate()
	const handleClick = () => {
		navigate('/news')
	}

	return (
		<div className={style.NewsContainer}>
			<Container>
				<Title>Новости</Title>

				<div className={style.NewsInner}>
					<Slider />
				</div>

				<div className={style.NewsButton}>
					<Button onClick={handleClick}>Смотреть все новости</Button>
				</div>
			</Container>
		</div>
	)
}
