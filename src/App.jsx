import React, { useState } from 'react'

import './App.css'
import './assets/css/scrollbar.module.scss'

import {
	Route,
	BrowserRouter as Router,
	Routes,
	useLocation,
} from 'react-router-dom'

import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
import Header from './components/Header/Header'
import About from './pages/About'
import AdminPanel from './pages/AdminPanel.1'
import Contacts from './pages/Contacts'
import Home from './pages/Home'
import News from './pages/News'
import NotFound from './pages/NotFound'
import Price from './pages/Price'
import Services from './pages/Services'

import Loader from './components/Loader/Loader'
import CtaBlock from './modules/ClickToAction/index'
import Footer from './modules/Footer/index'
import LatestNews from './modules/News/index'
import NewsPage from './pages/NewsPage'
import Sitemap from './pages/Sitemap'

import ConnectWithUs from './components/ConnectWithUs/ConnectWithUs'
import ModelOnline from './modules/ModelOnline'
import Login from './pages/Login'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/*' element={<MainComponent />} />
					<Route path='/admin-panel' element={<AdminPanel />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</Router>
		</>
	)
}

export default App

function MainComponent() {
	const [isModelOpen, setModelOpen] = useState(false)

	const openModel = () => {
		setModelOpen(true)
	}

	const closeModel = () => {
		setModelOpen(false)
	}

	const location = useLocation()

	return (
		<>
			<Loader />

			{shouldRenderHeader(location) && (
				<>
					<Header />
					<Breadcrumbs />
				</>
			)}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/services' element={<Services />} />
				<Route path='/price' element={<Price />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/news' element={<News />} />
				<Route path='/news/:slug' element={<NewsPage />} />
				<Route path='/sitemap' element={<Sitemap />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='*' element={<NotFound />} />
			</Routes>

			{shouldRenderNews(location) && <LatestNews />}

			<CtaBlock />
			<ModelOnline isOpen={isModelOpen} onClose={closeModel} />
			{shouldRenderHeader(location) && (
				<>
					<Footer />
					<ConnectWithUs />
					{/* <YandexShare /> */}
				</>
			)}
		</>
	)
}

function shouldRenderHeader(location) {
	// Проверяем, существует ли текущий маршрут
	return location.pathname !== '/non-existent-route'
}

function shouldRenderNews(location) {
	// Проверяем, существует ли текущий маршрут
	return location.pathname !== '/news'
}
