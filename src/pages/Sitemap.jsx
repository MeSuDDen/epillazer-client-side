import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Sitemap() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Карта сайта | Epillazer27</title>
				<meta name='description' content='Sitemap' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<div>Sitemap</div>
		</HelmetProvider>
	)
}
