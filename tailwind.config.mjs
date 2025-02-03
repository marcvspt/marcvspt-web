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
					DEFAULT: '#C4B5FD',
					dark: '#A855F7'
				},
				accent: {
					DEFAULT: '#8B5CF6',
					dark: '#5B21B6'
				},

			},
			spacing: {
				'34': '8.5rem'
			}
		},
	},
	plugins: [require('@tailwindcss/typography')]
}
