import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Services() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Услуги | Epillazer27</title>
				<meta name='description' content='Services' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<div>Services</div>
		</HelmetProvider>
	)
}
