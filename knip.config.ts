import type { KnipConfig } from 'knip';

const config: KnipConfig = {
	entry: [
		// Railway Infrastructure as Code entrypoint
		'.railway/railway.ts',
	],
};

export default config;
