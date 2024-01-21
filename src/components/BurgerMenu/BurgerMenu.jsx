import React, { useState } from 'react'
import logo from '../../assets/img/logo.svg'
import style from './BurgerMenu.module.scss'
import Menu from './components/Menu'

export default function BurgerMenu() {
	const [menuActive, setMenuActive] = useState(false)
	const items = [
		{ value: 'Главная', href: '/' },
		{ value: 'О нас', href: '/about' },
		{ value: 'Услуги', href: '/' },
		{ value: 'Прайс', href: '/' },
		{ value: 'Новости', href: '/' },
		{ value: 'Контакты', href: '/' },
	]
	const toggleMenu = () => {
		setMenuActive(!menuActive)
		document.body.classList.toggle('no-scroll', !menuActive);
	}
	return (
		<header className='mobileMenu'>
			<nav>
				<img src={logo} alt='Epillazer' />
				<h1>Epillazer</h1>
				<div
					className={menuActive ? `${style.burgerBtn} ${style.burgerOpen}` : `${style.burgerBtn}`}
					onClick={toggleMenu}
				>
					<span />
				</div>
			</nav>
			<Menu
				items={items}
				header='Меню'
				active={menuActive}
				setActive={setMenuActive}
			/>
		</header>
	)
}
