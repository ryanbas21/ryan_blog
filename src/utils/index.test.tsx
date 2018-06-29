import { toSlug, inc, titlesArray, filterTitles, derivePosts } from './';

test('Should increment', () => {
	expect(inc(1)).toBe(2);
});
test('Should create URL Slug', () => {
  let title = 'Create A Title';
  let actual = toSlug(title);
  let expected = 'create-a-title';

  expect(expected).toEqual(actual);
})
test('Derive Posts', () => {
	let msg = 'Should derive post data needed from api result';
	let state = [
		{
			fields: {
				content: 'Here is the content',
				title: 'Blog Title'
			},
			sys: {
				createdAt: '10/20'
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
		{
			content: 'Here is the content',
			date: 'Oct 20, 2001 12:00 AM',
			title: 'Blog Title'
		},
		{
			content: 'Here is the content',
			date: 'Oct 21, 2001 12:00 AM',
			title: 'Blog Title'
		}
	];
	let actual = derivePosts(state);
	expect(actual).toEqual(expected);
});
test('Should filter by title', () => {
	let msg = 'Should filter entries by title';
	let state = [
		{
			fields: {
				content: 'Here is the content',
				title: 'Blog Title'
			},
			sys: {
				createdAt: '10/20'
			}
		},
		{
			fields: {
				content: 'Here is the content',
				title: 'Another Here'
			},
			sys: {
				createdAt: '10/21'
			}
		}
	];
	let expected = ['Blog Title'];
	let actual = filterTitles('B')(state);
	expect(actual).toEqual(expected);
});
test('Should filter titles', () => {
  let state = [
      {
        fields: {
          content: 'Here is the content',
          title: 'Blog Title'
        },
        sys: {
          createdAt: '10/20'
        }
      },
      {
        fields: {
          content: 'Here is the content',
          title: 'Another Here'
        },
        sys: {
          createdAt: '10/21'
        }
      }
    ];
  const actual  = titlesArray(state)
  const expected = ['Blog Title', 'Another Here'];

  expect(actual).toEqual(expected);
})
