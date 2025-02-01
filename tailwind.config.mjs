/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#ffffff',
					dark: '#374151'
				},
				secondary: {
					DEFAULT: '#DDD6FE',
					dark: '#A855F7'
				},
				terciary: {
					DEFAULT: '#F3E8FF',
					dark: '#C4B5FD'
				},
				accent: {
					DEFAULT: '#8B5CF6',
					dark: '#5B21B6'
				},
				fully: {
					DEFAULT: '#f3f4f6',
					dark: '#4c1d95'
				},

			},
			spacing: {
				'34': '8.5rem'
			}
		},
	},
	plugins: [require('@tailwindcss/typography')]
}
