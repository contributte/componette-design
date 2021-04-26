import { NuxtOptions } from '@nuxt/types';

export default {
	// https://nuxtjs.org/guides/configuration-glossary/configuration-target
	target: 'static',

	// https://nuxtjs.org/guides/configuration-glossary/configuration-ssr
	ssr: false,

	// https://nuxtjs.org/guides/configuration-glossary/configuration-components
	components: false,

	// https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-dev
	dev: process.env.NODE_ENV !== 'production',

	// https://nuxtjs.org/guides/configuration-glossary/configuration-head
	head: {
		title: 'Componette Design',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
			{ name: 'author', content: 'Felix' },
			{ name: 'googlebot', content: 'snippet,archive' },
			{ name: 'robots', content: 'index,follow' },
		],
		script: [
			{ src: 'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js', defer: true }
		],
	},

	// https://nuxtjs.org/guides/configuration-glossary/configuration-plugins
	plugins: [],

	// https://nuxtjs.org/guides/configuration-glossary/configuration-modules
	modules: [],

	// https://nuxtjs.org/guides/configuration-glossary/configuration-build
	build: {},

	// https://nuxtjs.org/guides/configuration-glossary/configuration-modules#buildmodules
	buildModules: [
		'@nuxt/typescript-build',
		'@nuxtjs/tailwindcss',
	],

	// https://tailwindcss.nuxtjs.org/
	tailwindcss: {
		jit: true,
		configPath: 'tailwind.config.js',
	},
} as Partial<NuxtOptions>;
