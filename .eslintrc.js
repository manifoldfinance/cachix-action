module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: 'xo',
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
	},
	rules: {
	},
};
