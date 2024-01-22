import React, { useEffect, useState } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import Container from '../../components/layout/Container/Container'
import classes from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
	const location = useLocation()
	const pathnames = location.pathname.split('/').filter(x => x)

	const routeNames = {
		home: <FaHome />, // Use FaHome component directly
		about: 'Epillazer - студия лазерной эпиляции',
		services: 'Услуги',
		price: 'Цены',
		contacts: 'Контакты',
		news: 'Новости и публикации',
		sitemap: 'Карта сайта',
		'privacy-policy': 'Политика конфиденциальности',
	}

	const isHomePage = pathnames.length === 0

	if (isHomePage) {
		return null
	}

	const [news, setNews] = useState(null)
	const [isNewsFound, setIsNewsFound] = useState(true)
	const [newsTitle, setNewsTitle] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:3030/api/news/${pathnames[1]}`
				)
				if (!response.ok) {
					const responseData = await response.json()
					if (responseData.error === 'Not Found') {
						setIsNewsFound(false)
					} else {
						throw new Error(`Ошибка при запросе: ${response.statusText}`)
					}
				}

				const contentType = response.headers.get('content-type')
				if (contentType && contentType.includes('application/json')) {
					const data = await response.json()
					setNews(data)
					setIsNewsFound(true)
					setNewsTitle(data ? data.title : 'Новость не найдена')
				} else {
					setIsNewsFound(false)
				}
			} catch (error) {
				console.error('Ошибка при загрузке данных новости:', error)
				setNews({})
				setIsNewsFound(false)
			}
		}

		if (pathnames.length === 2 && pathnames[0] === 'news') {
			fetchData()
		}
	}, [pathnames[1]])

	let pageTitle = 'Ошибка 404'
	let breadcrumbsText = [{ name: <FaHome />, isLink: true }]
	let isRouteExists = true

	if (pathnames.length === 2 && pathnames[0] === 'news') {
		pageTitle = isNewsFound ? newsTitle : 'Новость не найдена'
		breadcrumbsText.push({
			name: 'Новости и публикации',
			isLink: true,
			to: '/news',
		})
	} else {
		if (pathnames.length > 0) {
			breadcrumbsText = breadcrumbsText.concat(
				pathnames.map(name => ({
					name: routeNames[name] || name,
					isLink: false,
				}))
			)
		}

		const lastPathname = pathnames[pathnames.length - 1]
		isRouteExists = routeNames[lastPathname] || lastPathname === 'news'

		pageTitle = isRouteExists
			? routeNames[lastPathname] || lastPathname
			: 'Страница не найдена'
	}

	return (
		<div className={classes.Breadcrumbs}>
			<div className={classes.BreadcrumbsBox}>
				<Container>
					<div className={classes.BreadcrumbsInner}>
						<h1>{pageTitle}</h1>
						<div className={classes.BreadcrumbsText}>
							{!isRouteExists ? (
								<>
									<Link to='/'>
										<FaHome />
									</Link>
									<span>&nbsp;| Страница не найдена</span>
								</>
							) : (
								breadcrumbsText.map((item, index, array) => {
									const routeTo =
										item.to ||
										`/${array
											.slice(1, index + 1)
											.map(item => item.name)
											.join('/')}`
									const isLast = index === array.length - 1

									return isLast ? (
										item.isLink ? (
											<Link to={routeTo} key={index}>
												{item.name}
											</Link>
										) : (
											<span key={index}>{item.name}</span>
										)
									) : (
										[
											item.isLink ? (
												<Link to={routeTo} key={index}>
													{item.name}
												</Link>
											) : (
												<span key={index}>{item.name}</span>
											),
											<span className={classes.Span} key={`pipe-${index}`}>
												{' '}
												|{' '}
											</span>,
										]
									)
								})
							)}
						</div>
					</div>
				</Container>
			</div>
		</div>
	)
}

export default Breadcrumbs
