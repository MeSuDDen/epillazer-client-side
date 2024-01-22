import React from 'react'
import Container from '../../components/layout/Container/Container'
import Map from '../Footer/components/MapComponent/Map'
import ContactsFormForSMTP from './components/ContactsFormForSMTP/ContactsFormForSMTP'
import ContactsInfo from './components/ContactsInfo/ContactsInfo'
import style from './style.module.scss'

export default function ContactsBlock() {
	return (
		<div className={style.Contacts}>
			<Container>
				<div className={style.ContactsInner}>
					<div className={style.ContactsInfo}>
						<ContactsInfo />
					</div>
					<div className={style.ContactsForm}>
						<ContactsFormForSMTP />
					</div>
				</div>
				<Map height='300px' />
			</Container>
		</div>
	)
}
