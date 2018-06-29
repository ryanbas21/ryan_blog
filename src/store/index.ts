import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { equals, not } from 'ramda';
import rootEpic from '../root-epic';
import rootReducer from '../root-reducer';

console.log(typeof window);
const composeEnhancers = typeof window !== undefined 
		? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose;

export default (initialState) => {
	const middleware = createEpicMiddleware();
	const epicMiddleware = applyMiddleware(middleware);
	const store = createStore(
		rootReducer,
		initialState,
		composeEnhancers(epicMiddleware)
	);
	middleware.run(rootEpic);

	return store;
};
