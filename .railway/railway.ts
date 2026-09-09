import { defineRailway, github, postgres, preserve, project, service, volume } from 'railway/iac';

export default defineRailway(() => {
	const database = postgres('Postgres');
	const data = volume('Bonds Data');

	const bonds = service('Bonds', {
		source: github('jonahsnider/bonds-railway'),
		healthcheck: '/',
		healthcheckTimeout: 60,
		deploy: {
			restartPolicyType: 'ALWAYS',
		},
		env: {
			APP_URL: {
				value: 'https://${{RAILWAY_PUBLIC_DOMAIN}}',
				description: 'Public HTTPS URL used in emails, OAuth callbacks, and WebAuthn.',
			},
			DB_DSN: database.env.DATABASE_URL,
			JWT_SECRET: preserve(),
			SETTINGS_ENC_KEY: preserve(),
		},
		volumeMounts: {
			'/app/data': data,
		},
	});

	return project('Bonds', {
		resources: [bonds, database, data],
	});
});
