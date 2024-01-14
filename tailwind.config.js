/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				mainLight: '#C29870',
				darkGreen: '#143D3D',
				darkGray: '#2F2F2F',
			},
			fontFamily: {
				Jura: ['Jura', 'sans-serif'],
				Didot: ['GFS Didot', 'sans-serif'],
				Inter: ['Inter', 'sans-serif'],
			},
			gridTemplateColumns: {
				// Simple 16 column grid
				16: 'repeat(16, minmax(0, 1fr))',

				// Complex site-specific column configuration
				footer: '1fr, 1fr, 1fr',
				CtaBox: '1fr, 2fr',
			},
		},
	},
	plugins: [],
}
