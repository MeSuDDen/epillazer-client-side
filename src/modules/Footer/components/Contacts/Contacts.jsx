import React from 'react'

import style from './Contacts.module.scss'

import { Link } from 'react-router-dom'
import Button from '../../../../ui/Button/Button'

import {
	faInstagram,
	faTelegramPlane,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import {
	faClock,
	faHashtag,
	faMapMarkerAlt,
	faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contacts() {
	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	return (
		<div className={style.ContactsBlock}>
			<div className={style.ContactsContainer}>
				<h2>Контакты</h2>
				<div className={style.ContactsInner}>
					<div className={style.left_block}>
						<div className={style.AddressBlock}>
							<div className={style.AddressBlock__title}>
								<FontAwesomeIcon
									icon={faMapMarkerAlt}
									color='#143D3D'
									size='sm'
								/>
								<span>Адрес:</span>
							</div>
							<Link
								to='/contacts'
								target='_self'
								rel='noopener noreferrer'
								title='Контакты'
								onClick={handleClick}
							>
								<span>г. Хабаровск ул.Карла-Маркса 122б (410к.)</span>
							</Link>
						</div>

						<div className={`${style.AddressBlock} ${style.PhoneBlock}`}>
							<div className={style.AddressBlock__title}>
								<FontAwesomeIcon icon={faPhone} color='#143D3D' size='sm' />
								<span>Телефон:</span>
							</div>
							<Link to={'tel:+79143111754'}>
								<span>+7 (914) 311-17-54</span>
							</Link>
						</div>
					</div>

					<div className={style.right_block}>
						<div className={style.AddressBlock}>
							<div className={style.AddressBlock__title}>
								<FontAwesomeIcon icon={faClock} color='#143D3D' size='sm' />
								<span>Время работы:</span>
							</div>
							<Link
								to='/contacts'
								target='_self'
								rel='noopener noreferrer'
								title='Контакты'
								onClick={handleClick}
							>
								<span>
									пн-пт: 7:00 - 20:00
									<br />
									сб-вс: 7:00 - 20:00
								</span>
							</Link>
						</div>

						<div className={`${style.AddressBlock} ${style.PhoneBlock}`}>
							<div className={style.AddressBlock__title}>
								<FontAwesomeIcon icon={faHashtag} color='#143D3D' size='sm' />
								<span>Социальные сети:</span>
							</div>
							<div>
								<Link
									to={`https://wa.me/79143111754`}
									target='_blank'
									rel='nofollow'
									title='WhatsApp'
								>
									<FontAwesomeIcon
										icon={faWhatsapp}
										color='#143D3D'
										size='lg'
									/>
								</Link>
								<Link
									to='https://www.instagram.com/epillazer27/'
									target='_blank'
									title='Instagram'
									rel='nofollow'
								>
									<FontAwesomeIcon
										icon={faInstagram}
										color='#143D3D'
										size='lg'
									/>
								</Link>
								<Link
									to={`https://t.me/79143111754`}
									target='_blank'
									rel='nofollow'
									title='Telegram'
								>
									<FontAwesomeIcon
										icon={faTelegramPlane}
										color='#143D3D'
										size='lg'
									/>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={style.BtnLine}>
					<Button>Записаться онлайн</Button>
					<div className={style.Line}></div>
				</div>
			</div>
		</div>
	)
}
