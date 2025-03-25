import { serwist } from '@serwist/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		serwist({
			swSrc: 'src/sw.ts',
			swDest: 'sw.js',
			globDirectory: 'dist',
			injectionPoint: 'self.__SW_MANIFEST',
			rollupFormat: 'iife',
		}),
	],
});
