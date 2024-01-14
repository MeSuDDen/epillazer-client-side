import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Price() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Прайс лист | Epillazer27</title>
				<meta name='description' content='Price' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<div>Price</div>
		</HelmetProvider>
	)
}
