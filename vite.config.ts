import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import path from "path";
import svelteSVG from "vite-plugin-svelte-svg";

export default defineConfig({
	resolve: {
		alias: {
		  $lib: path.resolve("./src/lib"),
		},
	  },
	plugins: [UnoCSS(), sveltekit(), svelteSVG({
		svgoConfig: {}, // See https://github.com/svg/svgo#configuration
		requireSuffix: true, // Set false to accept '.svg' without the '?component'
	  })],
});
