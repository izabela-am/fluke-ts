module.exports = {
	'env': {
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint'
	],
	rules: {
    '@typescript-eslint/no-unused-vars': [
      'error', {
        'argsIgnorePattern': '_'
      }
    ],
    'no-console': 'off',
    'camelcase': 'off',
    'no-useless-constructor': 'off',
    "class-methods-use-this": "off",
    "no-shadow": "off",
    "no-param-reassign": "off",
    "import/no-unresolved": "off",
    "prettier/prettier": "error",
	   	"import/extensions": [
	      "error",
	      "ignorePackages",
	      {
	        "ts": "never"
	      }
	    ],
  },
  "settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
};