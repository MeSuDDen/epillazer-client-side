// NewsPage.js
import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import Loader from '../modules/ClickToAction/components/Loader/Loader'

const NewsPage = () => {
	const { slug } = useParams()
	const [news, setNews] = useState(null)
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(`http://localhost:3030/api/news/${slug}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`Ошибка при запросе: ${response.status}`)
				}
				return response.json()
			})
			.then(data => setNews(data))
			.catch(error =>
				console.error('Ошибка при загрузке данных новости:', error)
			)
			.finally(() => setIsLoading(false))
	}, [slug])

	if (isLoading) {
		return <Loader /> // Возвращаем Loader или другой индикатор загрузки
	}

	if (!news || Object.keys(news).length === 0) {
		return <div>Новость не найдена</div>
	}

	return (
		<HelmetProvider>
			<Helmet>
				<title>{news.title}</title>
				<meta name='description' content='News' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>
			<div>
				<h1>{news.title}</h1>
				<p>{news.date_published}</p>
				<p>{news.article_text}</p>
			</div>
		</HelmetProvider>
	)
}

export default NewsPage
