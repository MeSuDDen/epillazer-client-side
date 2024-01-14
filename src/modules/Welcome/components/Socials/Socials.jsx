import React from 'react'

import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from './Socials.module.scss'

import { Link } from 'react-router-dom'

export default function Socials() {
	const phoneNumber = '79142080580'

	return (
		<div className={style.SocialsContainer}>
			<div className={style.SocialsInner}>
				<Link
					to={`https://wa.me/${phoneNumber}`}
					target='_blank'
					rel='nofollow'
					title='Я в вотсапе'
					className={style.SocialBox}
				>
					<FontAwesomeIcon icon={faWhatsapp} color='#143D3D' size='2xl' />
				</Link>
				<Link
					to='https://www.instagram.com/epillazer27/'
					target='_blank'
					title='Я в инстаграме'
					rel='nofollow'
					className={style.SocialBox}
				>
					<FontAwesomeIcon icon={faInstagram} color='#143D3D' size='2xl' />
				</Link>
				<Link
					to='mailto:epillazer27@info.ru'
					rel='nofollow'
					title='epillazer27@info.ru'
					className={style.SocialBox}
				>
					<FontAwesomeIcon icon={faEnvelope} color='#143D3D' size='xl' />
				</Link>
			</div>
		</div>
	)
}
