import { AnyAction, Reducer } from 'redux'
import { postsAPI } from '../../../api/axios-api'
import {
	ADD_COMMENTS,
	ADD_POSTS,
	AddCommentsAction,
	AddPostsAction,
	CommentType,
	PostsReducerState,
	PostsReducerThunk,
	PostType,
} from './post-reducer-types'

export const initPostsReducerState: PostsReducerState = {
	posts: [],
	comments: [],
}

const postsReducer: Reducer<PostsReducerState, AnyAction> = (
	state = initPostsReducerState,
	action
) => {
	switch (action.type) {
		case ADD_POSTS:
			return {
				...state,
				posts: [...state.posts, ...action.payload],
			}
		case ADD_COMMENTS:
			return {
				...state,
				comments: [...state.comments, ...action.payload],
			}
		default:
			return state
	}
}
export default postsReducer

export const addPosts = (payload: Array<PostType>): AddPostsAction => ({
	type: ADD_POSTS,
	payload,
})
export const addComments = (
	payload: Array<CommentType>
): AddCommentsAction => ({
	type: ADD_COMMENTS,
	payload,
})

export const getPosts = (): PostsReducerThunk => async dispatch => {
	try {
		const posts = await postsAPI.getPostsList()
		dispatch(addPosts(posts))
	} catch {
		throw new Error("can't get posts list")
	}
}
export const getComments =
	(postId: number): PostsReducerThunk =>
	async dispatch => {
		try {
			const comments = await postsAPI.getRetrieves(postId)
			dispatch(addComments(comments.comments))
		} catch {
			throw new Error("can't get post retrieves")
		}
	}
