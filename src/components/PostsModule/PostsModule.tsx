import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { PostType } from '../../lib/api/axios-api'
import Post from './Post/Post'
import AddNewPostButton from './AddNewPostButton/AddNewPostButton'

interface Props {
	postsList: Array<PostType>
}

const Title = styled.div`
	align-self: center;
	font-weight: bolder;
	font-size: 35px;
	font-style: oblique;
	margin-bottom: 20px;
`
export const Column = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 450px;
	margin: 0 auto;
	padding: 20px;
	box-shadow: 0 0 20px 3px #acb7b6;
`

const PostsModule: FC<Props> = ({ postsList }: PropsWithChildren<Props>) => (
	<>
		<Column>
			<AddNewPostButton />
			<Title>Last posts</Title>
			{postsList.map(post => (
				<Post key={post.id} title={post.title} body={post.body} id={post.id} />
			))}
		</Column>
	</>
)

export default PostsModule
