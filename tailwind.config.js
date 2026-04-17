/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			'xs': '480px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px',
		},
		extend: {
			colors: {
				'brand-darker': '#121733',
				'brand-dark': '#1D223B',
				'brand-dark-soft': '#202851',
				'brand-mid': '#2C376D',
				'brand-light': '#4280D2',
				'brand-accent': '#C6DAF4',
				'brand-gray-light': '#E9E9E9',
				'brand-gray-dark': '#222222',

				'landing-brown':   '#43220A',
				'landing-caramel': '#6C4016',
				'landing-gold':    '#EFBE93',
				'landing-amber':   '#9F6833',
				'landing-dark':    '#231d1b',
				'landing-beige':   '#e9ded9',
			},
			fontFamily: {
				'unbounded': ['Unbounded', 'sans-serif'],
				'gordita': ['Gordita', 'sans-serif'],
				'fira': ['FiraSans', 'sans-serif'],
			'gogol': ['Gogol', 'sans-serif'],
			'inter': ['Inter', 'sans-serif'],
			'dinpro': ['DINPro', 'sans-serif'],
			},
			fontSize: {
				'xs':   ['0.625rem', { lineHeight: '0.875rem' }], // 10px
				'sm':   ['0.75rem',  { lineHeight: '1rem' }],     // 12px
				'base': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
				'xl':   ['1.5rem',   { lineHeight: '2rem' }],     // 24px
				'xxl':  ['2.125rem', { lineHeight: '2.5rem' }],   // 34px
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
	],
};
