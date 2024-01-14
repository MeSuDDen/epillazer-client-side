import React, { useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

export default function AdminPanel() {
	const navigate = useNavigate()

	useEffect(() => {
		// localStorage.setItem('isAdmin', 'true');
		let isAdmin = localStorage.getItem('isAdmin')
		// TODO:
		if (!isAdmin) {
			navigate('/login')
		}
	}, [navigate])

	return (
		<HelmetProvider>
			<Helmet>
				<title>Админ панель | Epillazer27</title>
				<meta name='description' content='AdminPanel' />
				<link rel='canonical' href='https://www.example.com/my-page' />
			</Helmet>

			<div>AdminPanel</div>
		</HelmetProvider>
	)
}
