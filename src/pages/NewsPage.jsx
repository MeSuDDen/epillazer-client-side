// NewsPage.js
import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

const NewsPage = () => {
	const { slug } = useParams()
	const [news, setNews] = useState(null)

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
	}, [slug])

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
