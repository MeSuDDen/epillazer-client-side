import React from 'react'
import { Link } from 'react-router-dom'
import style from './CheckBox.module.scss'

export default function CheckBox({ checked, onChange }) {
	return (
		<label className={style.checkbox}>
			<input
				type='checkbox'
				checked={checked}
				onChange={onChange}
				className={style.CheckBoxInput}
			/>

			<div className={style.PrivacyPolicy}>
				Нажимая на кнопку ОТПРАВИТЬ, я даю{' '}
				<Link to='/privacy-policy' className={style.PrivacyPolicyBTN}>
					согласие на обработку персональных данных
				</Link>
			</div>
		</label>
	)
}
