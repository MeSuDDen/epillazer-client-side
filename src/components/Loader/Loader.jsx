import React, { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'
import classes from './Loader.module.scss'

export default function Loader() {
	const [pageLoaded, setPageLoaded] = useState(false)

	useEffect(() => {
		const handleLoad = () => {
			setPageLoaded(true)
		}

		if (document.readyState === 'complete') {
			handleLoad()
		} else {
			window.addEventListener('load', handleLoad)
		}

		return () => {
			window.removeEventListener('load', handleLoad)
		}
	}, [])

	return (
		!pageLoaded && (
			<div className={`${classes.Loader} ${pageLoaded ? classes.loaded : ''}`}>
				<div className={classes.spinner}>
					<ColorRing
						colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
						height={80}
						width={80}
					/>
				</div>
			</div>
		)
	)
}
