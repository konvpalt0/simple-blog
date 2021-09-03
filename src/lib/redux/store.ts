import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { useMemo } from 'react'
import postsReducer, {
	initPostsReducerState,
} from './reducers/posts-reducer/posts-reducer'

let store: Store<RootState> | undefined

const rootReducer = combineReducers({
	posts: postsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const initRootState: RootState = {
	posts: initPostsReducerState,
}

const initStore = (initialState: RootState = initRootState) =>
	createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunkMiddleWare))
	)

export const initializeStore = (preloadedState?: RootState) => {
	// eslint-disable-next-line no-underscore-dangle
	let _store = store ?? initStore(preloadedState)

	if (preloadedState && store) {
		_store = initStore({
			...store.getState(),
			...preloadedState,
		})
		store = undefined
	}
	if (typeof window === 'undefined') return _store
	if (!store) store = _store
	return _store
}

export const useStore = (initialState: RootState) =>
	useMemo(() => initializeStore(initialState), [initialState])
