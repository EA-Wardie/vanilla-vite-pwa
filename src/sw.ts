import { Serwist, type PrecacheEntry, type SerwistGlobalConfig } from 'serwist';
import { defaultCache } from '@serwist/vite/worker';

declare global {
	interface WorkerGlobalScope extends SerwistGlobalConfig {
		__SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
	}
}

declare const self: WorkerGlobalScope;

const serwist = new Serwist({
	precacheEntries: self.__SW_MANIFEST,
	skipWaiting: true,
	clientsClaim: true,
	navigationPreload: true,
	runtimeCaching: defaultCache,
});

serwist.addEventListeners();
