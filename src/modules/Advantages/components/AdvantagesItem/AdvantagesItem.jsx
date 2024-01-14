import React from 'react'

import style from './AdvantagesItem.module.scss'

export default function AdvantagesItem({ text, title }) {
	return (
		<div className={style.AdvantagesItem}>
			<div className={style.AdvantagesLine}></div>
			<div className={style.AdvantageContent}>
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</div>
	)
}
