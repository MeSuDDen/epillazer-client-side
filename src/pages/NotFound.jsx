import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function NotFound() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Ошибка 404 | Epillazer27</title>
				<meta name='description' content='NotFound' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<div>
				<h2>СТРАНИЦА НЕ НАЙДЕНА</h2>
				<span>
					Возможно Вы попытались загрузить несуществующую или удаленную
					страницу. Попробуйте использовать верхнюю навигацию и меню.
				</span>
			</div>
		</HelmetProvider>
	)
}
