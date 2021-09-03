import React, { FC, PropsWithChildren } from 'react'
import { GetStaticPaths, GetStaticPropsResult } from 'next'
import { postsAPI } from '../../lib/api/axios-api'
import PostEditor from '../../components/PostEditor/PostEditor'
import {
	CommentType,
	PostType,
} from '../../lib/redux/reducers/posts-reducer/post-reducer-types'

const Post: FC<Props> = ({ postData }: PropsWithChildren<Props>) => (
	<PostEditor
		id={postData.id}
		title={postData.title}
		body={postData.body}
		comments={postData.comments}
	/>
)

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
	let posts
	try {
		posts = await postsAPI.getPostsList()
	} catch {
		throw new Error("can't get posts list")
	}
	const paths = posts.map(post => ({ params: { postId: `${post.id}` } }))
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({
	params,
}: StaticProps): Promise<GetStaticPropsResult<Props>> => {
	const postData = await postsAPI.getRetrieves(params.postId)
	postData.id = params.postId
	return {
		props: {
			postData,
		},
	}
}

type Paths<T> = Array<{
	params: T
}>
interface Params {
	postId: number
}
type StaticProps = Paths<Params>[0]
interface Props {
	postData: PostType & { comments: Array<CommentType> }
}
