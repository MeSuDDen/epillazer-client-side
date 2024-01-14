import React, { useState } from 'react'

import style from './FaqBlock.module.scss'

import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FaqBlock({ title, description }) {
	const [isActive, setIsActive] = useState(false)
	const handleClick = () => {
		setIsActive(!isActive)
	}
	return (
		<button
			className={`${style.FaqBlock} ${isActive ? style.active : ''}`}
			onClick={handleClick}
		>
			<div className={style.FaqInner}>
				<h2 className={style.FaqTitle}>{title}</h2>
				<div className={style.FaqIcon}>
					<FontAwesomeIcon
						icon={faAngleDown}
						className={`${style.Icon} ${isActive ? style.activeIcon : ''}`}
					/>
				</div>
			</div>
			<p className={style.FaqDesc}>{description}</p>
		</button>
	)
}
