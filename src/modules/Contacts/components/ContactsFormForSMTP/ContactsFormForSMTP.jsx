import React, { useState } from 'react'

import style from './ContactsFormForSMTP.module.scss'

import Input from '../../../../ui/Input/Input'
import Textarea from '../../../../ui/Textarea/Textarea'

import toast from 'react-hot-toast'
import ButtonSubmit from '../../../ClickToAction/components/ButtonSubmit/ButtonSubmit'
import { fetchDataContactsForSMTP } from '../../api/fetchDataContactsForSMTP'
import {
	handleEmailChange,
	handleNameChange,
	handlePhoneChange,
	handleTextChange,
} from '../../helpers/handleChange'
import { validateName, validatePhone } from '../../helpers/validateForm'
import CheckBox from '../CheckBox/CheckBox'

export default function ContactsFormForSMTP() {
	//THIS IS: STATES
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [text, setText] = useState('')
	const [nameError, setNameError] = useState('')
	const [phoneError, setPhoneError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [isConsentChecked, setIsConsentChecked] = useState(true)

	const handleConsentChange = () => {
		setIsConsentChecked(!isConsentChecked)
	}

	const handleSubmit = async event => {
		event.preventDefault()

		//THIS IS: Validation
		const isNameValid = validateName(name, setNameError)
		const isPhoneValid = validatePhone(phone, setPhoneError)

		//THIS IS: Check validation
		if (isNameValid && isPhoneValid) {
			setIsLoading(true)

			try {
				//THIS IS: API Request
				await fetchDataContactsForSMTP(name, phone, email, text, toast)

				//THIS IS: Clear form fields on success
				setName('')
				setPhone('')
				setEmail('')
				setText('')

				setIsLoading(false)
			} catch (error) {
				console.error('Error while submitting form:', error)
				setIsLoading(false)
			}
		}
	}
	return (
		<form method='POST' onSubmit={handleSubmit} className={style.ContactsBox}>
			<div className={style.ContactsFormTitle}>
				Оставить заявку / Задать вопрос
			</div>
			<div className={style.ContactForm}>
				<div>
					<label>
						<Input
							type='text'
							placeholder='Имя *'
							onChange={event => handleNameChange(event, setName, setNameError)}
							value={name}
						/>
					</label>
					{nameError && <span className={style.ErrorText}>{nameError}</span>}
				</div>
				<div>
					<label>
						<Input
							type='text'
							placeholder='+7 (___)___-__-__'
							onChange={event =>
								handlePhoneChange(event, setPhone, setPhoneError)
							}
							value={phone}
							pattern='[+0-9()- ]*'
						/>
					</label>
					{phoneError && <span className={style.ErrorText}>{phoneError}</span>}
				</div>
				<div>
					<label>
						<Input
							type='email'
							placeholder='E-mail'
							onChange={event => handleEmailChange(event, setEmail)}
							value={email}
							pattern='[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'
						/>
					</label>
				</div>

				<div>
					<label>
						<Textarea
							placeholder='Текст сообщения'
							type='text'
							onChange={event => handleTextChange(event, setText)}
							value={text}
						/>
					</label>
				</div>

				<div
					style={{
						display: isConsentChecked ? 'block' : 'inline-block',
						opacity: isConsentChecked ? 1 : 0,
						pointerEvents: isConsentChecked ? 'auto' : 'none',
					}}
				>
					<ButtonSubmit isLoading={isLoading} disabled={!isConsentChecked}>
						Записаться
					</ButtonSubmit>
				</div>

				<div>
					<CheckBox onChange={handleConsentChange} checked={isConsentChecked} />
				</div>
			</div>
		</form>
	)
}
