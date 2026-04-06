/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-dark': '#1D223B',
				'brand-dark-soft': '#202851',
				'brand-mid': '#2C376D',
				'brand-light': '#4280D2',
				'brand-accent': '#C6DAF4',
				'brand-gray-light': '#E9E9E9',
				'brand-gray-dark': '#222222',
			},
			fontFamily: {
				'title-light': ['unbounded-light', 'sans-serif'],
				'title-medium': ['unbounded-medium', 'sans-serif'],
				'body-light': ['gorgita-regular', 'sans-serif'],
				'body-medium': ['gorgita-medium', 'sans-serif'],
			},
			fontSize: {
				'xs':   ['0.625rem', { lineHeight: '0.875rem' }],
				'sm':   ['0.75rem',  { lineHeight: '1rem' }],
				'base': ['0.875rem', { lineHeight: '1.25rem' }],
				'xl':   ['1.5rem',   { lineHeight: '2rem' }],
				'xxl':  ['2.125rem', { lineHeight: '2.5rem' }],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
};
