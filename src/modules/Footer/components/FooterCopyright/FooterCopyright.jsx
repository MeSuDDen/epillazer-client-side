import React from 'react'

import style from './FooterCopyright.module.scss'

import { Link } from 'react-router-dom'

export default function FooterCopyright() {
	const handleClick = () => {
		window.scrollTo(0, 0)
	}
	const currentYear = new Date().getFullYear()
	return (
		<div className={style.FooterCopyright}>
			<span>© 2022 - {currentYear}</span>
			<Link to='/privacy-policy' onClick={handleClick}>
				Политика конфиденциальности
			</Link>
		</div>
	)
}
