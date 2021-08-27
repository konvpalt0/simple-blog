import React, { PropsWithChildren } from 'react'
import { GetStaticPropsResult } from 'next'
import { PostType, postsAPI } from '../lib/api/axios-api'
import PostsModule from '../components/PostsList/PostsModule'

const Index: React.FC<Props> = ({ postsList }: PropsWithChildren<Props>) => (
	<div>
		<PostsModule postsList={postsList} />
	</div>
)

export default Index

export const getStaticProps = async (): Promise<
	GetStaticPropsResult<Props>
> => {
	const postsList = await postsAPI.getPostsList()
	return {
		props: {
			postsList,
		},
	}
}

interface Props {
	postsList: Array<PostType>
}
