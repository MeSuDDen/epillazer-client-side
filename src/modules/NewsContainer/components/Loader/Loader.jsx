import React from 'react'
import ContentLoader from 'react-content-loader'

const MyLoader = props => (
	<ContentLoader
		speed={2}
		width={1520}
		height={270}
		viewBox='0 0 1520 270'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='4' y='10' rx='3' ry='3' width='450' height='26' />
		<rect x='4' y='45' rx='0' ry='0' width='300' height='200' />
		<rect x='318' y='187' rx='0' ry='0' width='210' height='56' />
		<rect x='322' y='48' rx='0' ry='0' width='1500' height='20' />
		<rect x='322' y='73' rx='0' ry='0' width='1500' height='20' />
		<rect x='322' y='97' rx='0' ry='0' width='1500' height='20' />
		<rect x='1370' y='10' rx='0' ry='0' width='1500' height='26' />
	</ContentLoader>
)

export default MyLoader
