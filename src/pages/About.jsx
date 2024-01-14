import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'
// FIXME: 
export default function About() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>О нас | Epillazer27</title>
				<meta name='description' content='About' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<div>About</div>
		</HelmetProvider>
	)
}
