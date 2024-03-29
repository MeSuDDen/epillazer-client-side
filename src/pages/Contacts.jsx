import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import ContactsBlock from '../modules/Contacts'

export default function Contacts() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Контакты | Epillazer27</title>
				<meta name='description' content='Contacts' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<ContactsBlock/>
		</HelmetProvider>
	)
}
