import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = props => (
	<ContentLoader
		speed={2}
		width={1400}
		height={310}
		viewBox='0 0 1400 310'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='4' y='20' rx='3' ry='3' width='450' height='28' />
		<rect x='4' y='68' rx='0' ry='0' width='300' height='200' />
		<rect x='318' y='212' rx='0' ry='0' width='210' height='56' />
		<rect x='4' y='300' rx='0' ry='0' width='1400' height='2' />
		<rect x='322' y='68' rx='0' ry='0' width='1150' height='24' />
		<rect x='322' y='97' rx='0' ry='0' width='1150' height='24' />
		<rect x='322' y='126' rx='0' ry='0' width='1150' height='24' />
		<rect x='1250' y='20' rx='0' ry='0' width='150' height='28' />
	</ContentLoader>
)

export default MyLoader
