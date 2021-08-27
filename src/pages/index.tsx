import React, { PropsWithChildren } from 'react'
import { GetStaticPropsResult } from 'next'
import { PostType, postsAPI } from '../lib/api/axios-api'
import Post from '../components/Post/Post'

const Index: React.FC<Props> = ({ postsList }: PropsWithChildren<Props>) => (
	<div>
		{postsList.map(post => (
			<Post key={post.id} title={post.title} body={post.body} />
		))}
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
