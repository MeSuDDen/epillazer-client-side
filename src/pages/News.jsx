import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import NewsContainer from '../modules/NewsContainer'

export default function News() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Новости | Epillazer27</title>
				<meta name='description' content='News' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<NewsContainer />
		</HelmetProvider>
	)
}
