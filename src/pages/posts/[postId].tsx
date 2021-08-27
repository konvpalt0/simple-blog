import React, { FC, PropsWithChildren } from 'react'
import { GetStaticPaths, GetStaticPropsResult } from 'next'
import { PostContent, postsAPI } from '../../lib/api/axios-api'

const Post: FC<Props> = ({ postData }: PropsWithChildren<Props>) => (
	<div>
		<div>{postData.title}</div>
		<br />
		<div>{postData.body}</div>
	</div>
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
	postId: string
}
type StaticProps = Paths<Params>[0]
interface Props {
	postData: PostContent
}
