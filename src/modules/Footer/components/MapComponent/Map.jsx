// YandexMap.js
import React from 'react'

import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps'

const YandexMap = () => {
	const mapState = {
		center: [48.499092, 135.102558], // Initial map center
		zoom: 16, // Initial zoom level
	}

	return (
		<div className='MapBlock'>
			<div
				style={{
					width: '100%',
					height: '400px',
					borderRadius: '10px',
					overflow: 'hidden',
				}}
			>
				<YMaps query={{ apikey: 'eafe40f2-7b6f-4c63-be5c-2fcdf4dbe14a' }}>
					<Map
						state={mapState}
						width='100%'
						height='100%'
						options={{
							suppressMapOpenBlock: true, // Disable the "Open the map in a separate window" link
						}}
					>
						<Placemark geometry={[48.49, 135.1]} />
					</Map>
				</YMaps>
			</div>
		</div>
	)
}

export default YandexMap
