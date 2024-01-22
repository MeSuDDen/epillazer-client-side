import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'
// FIXME:
export default function About() {
	let content = '<a href="/news">Привет</a>'
	return (
		<HelmetProvider>
			<Helmet>
				<title>О нас | Epillazer27</title>
				<meta name='description' content='About' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>
			<div>
				About PAGE
				<div dangerouslySetInnerHTML={{ __html: content }} />
			</div>
		</HelmetProvider>
	)
}
