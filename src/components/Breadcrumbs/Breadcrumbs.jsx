import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
	const location = useLocation()
	const pathnames = location.pathname.split('/').filter(x => x)

	const routeNames = {
		home: 'Главная',
		about: 'О нас',
		services: 'Услуги',
		price: 'Цены',
		contacts: 'Контакты',
		news: 'Новости',
		sitemap: 'Карта сайта',
		'privacy-policy': 'Политика конфиденциальности',
	}

	const isHomePage = pathnames.length === 0

	if (isHomePage) {
		return null
	}

	let pageTitle = 'Ошибка 404' // Заголовок страницы по умолчанию

	if (pathnames.length === 2 && pathnames[0] === 'news') {
		// Если вы на странице новости, используйте заголовок новости
		// Ваша логика получения заголовка новости может быть здесь
		pageTitle = 'Заголовок новости' // Замените этот заголовок на вашу логику
	} else {
		// В противном случае используйте заголовок из routeNames
		pageTitle = routeNames[pathnames[pathnames.length - 1]] || 'Ошибка 404'
	}

	return (
		<div className={classes.Breadcrumbs}>
			<h1>{pageTitle}</h1>
			<div className={classes.BreadcrumbsText}>
				<span>Вы здесь: </span>
				{['home'].concat(pathnames).map((name, index, array) => {
					const routeTo = `/${array.slice(1, index + 1).join('/')}`
					const isLast = index === array.length - 1

					const translatedName = routeNames[name] || pageTitle

					return isLast ? (
						<span key={index}>{translatedName}</span>
					) : (
						<Link to={routeTo} key={index}>
							{`${translatedName} > `}
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default Breadcrumbs
