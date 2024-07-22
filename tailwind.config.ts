import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			primary: "#04b1b8",
			info: "#1b59ed",
			accent: "#fdab08",
			dark: "#181827",
			"less-dark": "#242439",
			light: "#f4f4f7",
			"less-light": "#ababc9",
			danger: "#f72f2f",
			"button-danger": "#ee7d7d",
		},
		extend: {},
	},
	plugins: [],
}
export default config
