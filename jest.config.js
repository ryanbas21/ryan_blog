module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.test.json'
		}
	},
	roots: ['<rootDir>/src'],
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '((\\.|/)(test|spec))\\.tsx?$',
	moduleNameMapper: {
		'\\.(css|less)$': '<rootDir>/src/utils/style.mock.js'
	},

	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
