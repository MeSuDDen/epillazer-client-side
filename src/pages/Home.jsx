import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import Advantages from '../modules/Advantages'
import FAQ from '../modules/FAQ'
import Welcome from '../modules/Welcome'

export default function Home() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Лазерная эпиляция | Epillazer27</title>
				<meta name='description' content='Home' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<section>
				<Welcome />
			</section>

			<section>
				<Advantages />
			</section>

			<section>
				<FAQ />
			</section>
		</HelmetProvider>
	)
}
