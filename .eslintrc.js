module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'standard',
		'plugin:react/jsx-runtime',
		// con esto se queda con lo ESlint
		'eslint-config-prettier',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
