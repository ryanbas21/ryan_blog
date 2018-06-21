import { add, map } from 'ramda';

export const inc = add(1);
export const derivePosts = map((post) => ({
	title: post.fields.title,
	content: post.fields.content
}));
