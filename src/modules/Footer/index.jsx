import React from 'react'

import style from './style.module.scss'

import Container from '../../components/layout/Container/Container'
import Contacts from './components/Contacts/Contacts'
import FooterCopyright from './components/FooterCopyright/FooterCopyright'
import FooterLogo from './components/FooterLogo/FooterLogo'
import FooterNav from './components/FooterNav/FooterNav'
import Map from './components/MapComponent/Map'

export default function Footer({ modal }) {
	return (
		<footer>
			<Container>
				<div className={style.FooterContainer}>
					<Contacts />
					<Map height='400px'/>
				</div>

				<div className={style.FooterBot}>
					<FooterLogo />
					<FooterNav />
					<FooterCopyright />
				</div>
			</Container>
		</footer>
	)
}
