/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				sm: '2px 1px 0 rgba(0, 0, 0, 0.05)', // Slight right offset, no blur
				DEFAULT: '2px 2px 0 rgba(0, 0, 0, 0.1)', // Slight right offset, no blur
				md: '4px 4px 0 rgba(0, 0, 0, 0.1)', // Slight right offset, no blur
				lg: '6px 10px 0 rgba(0, 0, 0, 0.1)', // Slight right offset, no blur
				xl: '8px 20px 0 rgba(0, 0, 0, 0.1)', // Slight right offset, no blur
				'2xl': '10px 25px 0 rgba(0, 0, 0, 0.25)', // Slight right offset, no blur
				inner: 'inset 2px 2px 0 rgba(0, 0, 0, 0.05)', // Slight right offset, no blur
				none: 'none',
			},
		},
	},
	plugins: [],
}
