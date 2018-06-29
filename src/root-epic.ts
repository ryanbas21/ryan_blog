import { combineEpics } from 'redux-observable';
import getPostsEpic from './features/blog/blog.epic';

export default combineEpics(getPostsEpic);
