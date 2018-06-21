import { add, map } from 'ramda';
import moment from 'moment';

export const inc = add(1);
export const derivePosts = map((post) => ({
	title: post.fields.title,
	content: post.fields.content,
	date: moment(post.sys.createdAt).format('lll')
}));
