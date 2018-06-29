import { combineReducers } from 'redux';
import blogReducer from './features/blog/blog.reducer';

export default combineReducers({ posts: blogReducer });
