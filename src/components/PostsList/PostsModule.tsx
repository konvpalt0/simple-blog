import React, { FC } from 'react'
import styled from 'styled-components'
import { shallowEqual, useSelector } from 'react-redux'
import AddNewPostButton from './AddNewPostButton/AddNewPostButton'
import Column from '../common/Column/Column'
import Title from '../common/Title/Title'
import { RootState } from '../../lib/redux/store'
import Post from './Post/Post'

const PostsTitle = styled(Title)`
	font-weight: bolder;
	font-size: 35px;
	font-style: oblique;
`

const PostsModule: FC = () => {
	const posts = useSelector<RootState, RootState['posts']['posts']>(
		state => state.posts.posts,
		shallowEqual
	)
	return (
		<>
			<Column>
				<PostsTitle>Last posts</PostsTitle>
				{posts.map(post => (
					<Post
						key={post.id}
						title={post.title}
						body={post.body}
						id={post.id}
					/>
				))}
				<AddNewPostButton />
			</Column>
		</>
	)
}

export default PostsModule
