import axios, { AxiosResponse } from 'axios'

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
		postId: string,
		embed: string = 'comments'
	): Promise<PostType & { comments: Array<Comment> }> => {
		const response = await api.get(`posts/${postId}?_embed=${embed}`)
		return response.data
	},
	create: async (payload: PostContent): Promise<AxiosResponse<any>> =>
		api.post(`posts`, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
		}),
	update: async (
		postId: string,
		payload: PostContent
	): Promise<AxiosResponse<any>> =>
		api.put(`posts/${postId}`, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
		}),
	delete: async (postId: string): Promise<AxiosResponse<any>> =>
		api.delete(`posts/${postId}`),
}

export const commentAPI = {
	create: async (payload: {
		postId: number
		body: string
	}): Promise<AxiosResponse<any>> =>
		api.post(`/comments`, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
		}),
}

export interface PostContent {
	title: string
	body: string
}
export interface PostType extends PostContent {
	id: number
}
export interface Comment {
	id: number
	postId: number
	body: string
}
