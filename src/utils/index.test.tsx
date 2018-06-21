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
				},
        sys: {

          createdAt: '10/20',
        }
			},
			{
				fields: {
					content: 'Here is the content',
					title: 'Blog Title'
				},
        sys: {
          createdAt: '10/21'
        }
			}
		];
	let expected = [
		{ content: 'Here is the content', date: 'Oct 20, 2001 12:00 AM', title: 'Blog Title' },
		{ content: 'Here is the content', date: 'Oct 21, 2001 12:00 AM', title: 'Blog Title' }
	];
	let actual = derivePosts(state);
	expect(actual).toEqual(expected);
});
