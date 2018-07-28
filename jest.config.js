module.exports = {
	roots: ['<rootDir>/src'],
  testURL: "http://localhost/",
  testEnvironment: 'node',
	transform: {
		'^.+\\.tsx?$': 'ts-jest'
	},
	testRegex: '((\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
