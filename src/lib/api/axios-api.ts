import axios, { AxiosResponse } from 'axios'
import {
	CommentType,
	PostContent,
	PostType,
} from '../redux/reducers/posts-reducer/post-reducer-types'

const BASE_URL = 'https://simple-blog-api.crew.red'

const api = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
})

export const postsAPI = {
	getPostsList: async (): Promise<Array<PostType>> => {
		const response = await api.get(`posts`)
		return response.data
	},
	getRetrieves: async (
		postId: number,
		embed: string = 'comments'
	): Promise<PostRetrieves> => {
		const response = await api.get(`posts/${postId}?_embed=${embed}`)
		return response.data
	},
	create: async (payload: PostContent): Promise<AxiosResponse> =>
		api.post(`posts`, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
		}),
	update: async (
		postId: string,
		payload: PostContent
	): Promise<AxiosResponse> =>
		api.put(`posts/${postId}`, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
		}),
	delete: async (postId: string): Promise<AxiosResponse> =>
		api.delete(`posts/${postId}`),
}

export const commentAPI = {
	create: async (payload: {
		postId: number
		body: string
	}): Promise<AxiosResponse> =>
		api.post(`/comments`, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
		}),
}

export interface PostRetrieves extends PostType {
	comments: Array<CommentType>
}
