import React from 'react'

import ImgLogo from '../../../../assets/img/logo.svg'

import style from './FooterLogo.module.scss'

export default function FooterLogo() {
	return (
		<div className={style.FooterLogo}>
			<img src={ImgLogo} alt='Epillazer' width={50} height={50} />

			<span className={style.FooterLogoText}>
				Студия лазерной
				<br />
				эпиляции в Хабаровске
			</span>
		</div>
	)
}
