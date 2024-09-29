/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'discordTitle': ['discordFont', 'sans-serif'],
			'ggSansNormal': ['ggSansNormal', 'sans-serif'],
			'ggSansSemiBold': ['ggSansSemiBold', 'sans-serif'],
			'ggSansExtraBold': ['ggSansExtraBold', 'sans-serif'],
		},
	},
	plugins: [],
}
