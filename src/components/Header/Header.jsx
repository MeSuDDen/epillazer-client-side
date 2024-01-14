import React from 'react'

import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import PhoneNumber from './PhoneNumber/PhoneNumber'

import Container from '../layout/Container/Container'
import classes from './Header.module.scss'

export default function Header() {
	return (
		<header className={classes.HeaderContainer}>
			<Container>
				<div className={classes.Header}>
					<div className={classes.HeaderInner}>
						<Logo /> {/* Логотип */}
						<Navigation /> {/* Навигация */}
						<PhoneNumber /> {/* Номер телефона */}
					</div>
				</div>
			</Container>
		</header>
	)
}
