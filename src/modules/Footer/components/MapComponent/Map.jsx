import {
	GeolocationControl,
	Map,
	Placemark,
	YMaps,
	ZoomControl,
} from '@pbe/react-yandex-maps'
import React from 'react'

const YandexMap = ({ height }) => {
	const mapState = {
		center: [48.499092, 135.102558],
		zoom: 17,
	}

	const placemarkGeometry = [48.499061, 135.10248]

	const placemarkProperties = {
		iconCaption: 'Epillazer',
		hintContent: 'Нажмите для подробностей',
		balloonContentHeader: 'Epillazer',
		balloonContentBody: `
        ул. Карла-Маркса 122б, 3 этаж, к. 410
        Студия лазерной эпиляции
        Пн-Пт с 10:00 до 19:00,
        Сб с 10:00 до 18:00, Вс выходной
        +7 (4212) 677-000, +7 (909) 824-7000
        dveriland@list.ru
      `,
	}

	return (
		<div className='MapBlock'>
			<div
				style={{
					width: '100%',
					height: `${height}`,
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
							suppressMapOpenBlock: true,
						}}
					>
						<Placemark
							geometry={placemarkGeometry}
							properties={placemarkProperties}
						/>

						<ZoomControl options={{ float: 'right' }} />
						<GeolocationControl options={{ float: 'right' }} />
					</Map>
				</YMaps>
			</div>
		</div>
	)
}

export default YandexMap
