import React from 'react'

import bannerImg from '../../assets/img/banner.jpg'
import './style.scss'

import Container from '../../components/layout/Container/Container'
import Button from '../../ui/Button/Button'
import Socials from './components/Socials/Socials'
import TypedTextAnimation from './components/TypedTextAnimation/TypedTextAnimation'

import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

export default function Welcome() {
	return (
		<section className='Main'>
			<Container>
				<div className='MainInner'>
					<div className='MainSocials'>
						<Socials />
					</div>
					<div className='MainContent'>
						<h1 className='TopTitle'>- Студия лазерной эпиляции</h1>
						<h1 className='Title'>epillazer</h1>
						<TypedTextAnimation />
						<Button>Записаться онлайн</Button>
						<p>Скидка 30% на первое посещение</p>
						<Link
							to='/contacts'
							target='_self'
							rel='noopener noreferrer'
							title='Контакты'
							className='Address'
						>
							<FontAwesomeIcon icon={faLocationDot} color='#143D3D' />
							<div>г. Хабаровск ул.Карла-Маркса 122б (410к.)</div>
						</Link>
					</div>

					<div className='MainImg'>
						<img src={bannerImg} alt='' width={730} height={950} />
					</div>
				</div>
			</Container>
		</section>
	)
}
