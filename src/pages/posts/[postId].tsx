import React, { FC, PropsWithChildren } from 'react'
import { GetStaticPaths, GetStaticPropsResult } from 'next'

const Post: FC<Props> = ({ postData }: PropsWithChildren<Props>) => (
	<div>{postData}</div>
)

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
	const paths: Paths<Params> = [
		{
			params: {
				postId: 'r',
			},
		},
	]
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async ({
	params,
}: StaticProps): Promise<GetStaticPropsResult<Props>> => {
	const postData = `${params.postId} post text`
	return {
		props: {
			postData,
		},
	}
}

type Paths<T> = Array<{
	params: T
}>
type Params = {
	postId: string
}
type StaticProps = Paths<Params>[0]

type Props = {
	postData: string
}
