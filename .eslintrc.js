module.exports = {
	extends: 'airbnb',
	plugins: ['react', 'jsx-a11y', 'import'],
	parser: 'babel-eslint',
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
	rules: {
		semi: ['error', 'always'],
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'no-tabs': 0,
		'no-console': 0,
		'no-mixed-spaces-and-tabs': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-filename-extension': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/prefer-stateless-function': 0,
		'react/no-typos': 0,
		'no-unused-expressions': 0,
		'global-require': 0,
		'import/prefer-default-export': 0,
	},
};
