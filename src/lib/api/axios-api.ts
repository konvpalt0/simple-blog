import axios, { AxiosResponse } from 'axios'

const BASE_URL = 'https://simple-blog-api.crew.red'

const api = axios.create({
	baseURL: BASE_URL,
	withCredentials: true,
})

export const postsAPI = {
	getPostsList: async (): Promise<
		Array<{ id: number; title: string; body: string }>
	> => {
		const response = await api.get(`posts`)
		return response.data
	},
	getRetrieves: async (
		postId: string,
		embed: string = 'comments'
	): Promise<{
		id: number
		title: string
		body: string
		comments: Array<{ id: number; postId: number; body: string }>
	}> => {
		const response = await api.get(`posts/${postId}?_embed=${embed}`)
		return response.data
	},
	create: async (payload: {
		title: string
		body: string
	}): Promise<AxiosResponse<any>> =>
		api.post(`posts`, payload, {
			headers: {
				'Content-Type': 'application/json',
			},
		}),
	update: async (
		postId: string,
		payload: { title: string; body: string }
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
