import React from 'react'
import {
	FaClock,
	FaEnvelope,
	FaInstagram,
	FaLocationDot,
	FaPhone,
	FaSquareWhatsapp,
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import style from './ContactsInfo.module.scss'
export default function ContactsInfo() {
	return (
		<div className={style.ContactsInfoInner}>
			<h2 className={style.ContactsInfoTitle}>
				Epillazer - студия лазерной эпиляции
			</h2>
			<p className={style.ContactsInfoDesc}>
				Добро пожаловать в мою студию лазерной эпиляции в Хабаровске! Я
				стремлюсь предоставить вам качественные и профессиональные услуги,
				основанные на передовых технологиях лазерной эпиляции. Мои контактные
				данные ниже:
			</p>
			<div className={style.ContactsInfoContainer}>
				<div className={style.ContactsInfoBox}>
					<FaLocationDot color='#143D3D' size={20} />
					<div>
						<span>Адрес:</span> г. Хабаровск ул.Карла-Маркса 122б (410к.)
					</div>
				</div>
				<div className={style.ContactsInfoBox}>
					<FaClock color='#143D3D' size={20} />
					<div>
						<span>Режим работы:</span> Пн - Пт, с 9:00 до 18:00
					</div>
				</div>
				<div className={style.ContactsInfoBox}>
					<FaPhone color='#143D3D' size={20} />
					<div>
						<span>Телефон:</span>{' '}
						<Link to='tel:+79143111754' title='+79143111754'>
							{' '}
							+7 (914) 311-17-54
						</Link>
					</div>
				</div>
				<div className={style.ContactsInfoBox}>
					<FaSquareWhatsapp color='#143D3D' size={22} />
					<div>
						<span>WhatsApp:</span>{' '}
						<Link to='https://wa.me/79143111754' title='WhatsApp' target='_blank'>
							{' '}
							+7 (914) 311-17-54
						</Link>
					</div>
				</div>
				<div className={style.ContactsInfoBox}>
					<FaInstagram color='#143D3D' size={22} />
					<div>
						<span>Instagram:</span>{' '}
						<Link to='https://www.instagram.com/epillazer27/' title='Instagram' target='_blank'>
							{' '}
							epillazer27
						</Link>
					</div>
				</div>
				<div className={style.ContactsInfoBox}>
					<FaEnvelope color='#143D3D' size={20} />
					<div>
						<span>E-mail:</span>{' '}
						<Link to='mailto:epillazer27@info.ru' title='epillazer27@info.ru'>
							{' '}
							epillazer27@info.ru
						</Link>
					</div>
				</div>
			</div>
			<p className={style.ContactsInfoDescBottom}>
				Не ждите, чтобы быть в своей лучшей форме. Свяжитесь со мной прямо
				сейчас, чтобы запланировать ваше первое посещение!
			</p>
		</div>
	)
}
