import React from 'react'

import style from './Title.module.scss'

export default function Title({ children, color }) {
	const styleTitle = {
		color: color || '#143D3D',
	}
	const styleLine = {
		background: color || '#143D3D',
	}
	return (
		<div className={style.BlockTitle}>
			<h1 className={style.Title} style={styleTitle}>
				{children}
			</h1>
			<div className={style.LineTitle} style={styleLine}></div>
		</div>
	)
}
