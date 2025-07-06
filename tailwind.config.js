/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'grisclarito': '#f6f6f4',
		},
		},
		fontFamily: {
			'claster': ['Claster', 'serif'],
			'eb': ['EBGaramond', 'sans-serif'],
			'overpass': ['Overpass', 'sans-serif'],
		},
	},
	
}
