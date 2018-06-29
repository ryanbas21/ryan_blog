import { prop } from 'ramda';

export type GET_POSTS = 'GET_POSTS';
export const GET_POSTS: GET_POSTS = 'GET_POSTS';
export interface GetPosts {
	type: GET_POSTS;
}
export const getPosts = () => ({ type: GET_POSTS });

export type SAVE_POSTS = 'SAVE_POSTS';
const SAVE_POSTS: SAVE_POSTS = 'SAVE_POSTS';
export interface SAVEPOSTS {
	type: SAVE_POSTS;
	payload: any;
}
export const savePosts = (payload) => ({
  type: SAVE_POSTS,
  payload 
});

export default (state = [], action) => {
	switch (action.type) {
		case SAVE_POSTS: {
			return action.payload 
    }
		case GET_POSTS: {
			return state;
		}
		default: {
			return state;
		}
	}
};

export const posts = prop('posts');
