/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"biblio-primary" : "#fe396c",
				"biblio-secundary" : "#4d39d5"
			}
		},
	},
	plugins: [],
}
