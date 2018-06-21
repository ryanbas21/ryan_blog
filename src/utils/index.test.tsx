import { inc, derivePosts } from './';

test('Should increment', () => {
	expect(inc(1)).toBe(2);
});
test('Derive Posts', () => {
	let msg = 'Should derive post data needed from api result';
	let state = [
			{
				fields: {
					content: 'Here is the content',
					title: 'Blog Title'
				}
			},
			{
				fields: {
					content: 'Here is the content',
					title: 'Blog Title'
				}
			}
		];
	let expected = [
		{ content: 'Here is the content', title: 'Blog Title' },
		{ content: 'Here is the content', title: 'Blog Title' }
	];
	let actual = derivePosts(state);
	expect(actual).toEqual(expected);
});
