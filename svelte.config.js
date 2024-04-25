import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex({
		extensions: ['.md', '.svx']
	})],
	kit: {
		adapter: adapter(),
		alias: {
			$components: 'src/components',
			$utils: 'src/utils',
			$consts: 'src/constants',
			$data: 'src/data'
		}
	}
}

export default config