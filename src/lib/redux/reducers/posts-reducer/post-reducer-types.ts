import { ThunkAction } from 'redux-thunk'
import { RootState } from '../../store'

// Constants
export const ADD_POSTS = 'posts-reducer/ADD_POSTS'
export const ADD_COMMENTS = 'posts-reducer/ADD_COMMENTS'

// State types
export interface PostContent {
	title: string
	body: string
}
export interface PostType extends PostContent {
	id: number
}
export interface CommentType {
	id: number
	postId: number
	body: string
}

export interface PostsReducerState {
	posts: Array<PostType>
	comments: Array<CommentType>
}

// Actions types
export interface AddPostsAction {
	type: typeof ADD_POSTS
	payload: Array<PostType>
}
export interface AddCommentsAction {
	type: typeof ADD_COMMENTS
	payload: Array<CommentType>
}

export type PostsReducerActions = AddPostsAction | AddCommentsAction

// Thunk types
export type PostsReducerThunk = ThunkAction<
	Promise<void>,
	RootState,
	unknown,
	PostsReducerActions
>
