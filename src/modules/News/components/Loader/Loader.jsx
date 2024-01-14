import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = props => (
	<ContentLoader
		speed={2}
		width={400}
		height={480}
		viewBox='0 0 400 480'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='19' y='4' rx='0' ry='0' width='365' height='243' />
		<rect x='19' y='259' rx='0' ry='0' width='365' height='20' />
		<rect x='19' y='284' rx='0' ry='0' width='365' height='20' />
		<rect x='19' y='320' rx='0' ry='0' width='365' height='15' />
		<rect x='19' y='340' rx='0' ry='0' width='365' height='15' />
		<rect x='19' y='360' rx='0' ry='0' width='365' height='15' />
		<rect x='19' y='381' rx='0' ry='0' width='365' height='15' />
		<rect x='19' y='461' rx='0' ry='0' width='164' height='15' />
	</ContentLoader>
)

export default MyLoader
