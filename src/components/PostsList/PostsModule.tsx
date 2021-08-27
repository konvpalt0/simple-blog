import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { PostType } from '../../lib/api/axios-api'
import Post from './Post/Post'
import AddNewPostButton from './AddNewPostButton/AddNewPostButton'
import Column from '../common/Column/Column'
import Title from '../common/Title/Title'

interface Props {
	postsList: Array<PostType>
}

const PostsTitle = styled(Title)`
	font-weight: bolder;
	font-size: 35px;
	font-style: oblique;
`

const PostsModule: FC<Props> = ({ postsList }: PropsWithChildren<Props>) => (
	<>
		<Column>
			<AddNewPostButton />
			<PostsTitle>Last posts</PostsTitle>
			{postsList.map(post => (
				<Post key={post.id} title={post.title} body={post.body} id={post.id} />
			))}
		</Column>
	</>
)

export default PostsModule
