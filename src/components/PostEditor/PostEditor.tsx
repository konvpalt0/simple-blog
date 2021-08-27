import React, { FC, PropsWithChildren } from 'react'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import { CommentType, postsAPI, PostType } from '../../lib/api/axios-api'
import Column from '../common/Column/Column'
import Button from '../common/Button/Button'
import Comment from './Comment/Comment'
import PostForm from './NewPostForm/PostForm/PostForm'
import Title from '../common/Title/Title'

interface Props extends PostType {
	comments: Array<CommentType>
}

const PostEditor: FC<Props> = ({
	id,
	title,
	body,
	comments,
}: PropsWithChildren<Props>) => {
	const router = useRouter()
	const onDelete = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		try {
			const response = await postsAPI.delete(`${id}`)
			if (response.status === 200) {
				router.push('/').then()
			}
		} catch {
			throw new Error(`Can't delete post ${id}`)
		}
	}
	return (
		<Column>
			<Formik
				initialValues={{ id, title, body } as PostType}
				onSubmit={async values => {
					try {
						const response = await postsAPI.update(`${values.id}`, {
							title: values.title,
							body: values.body,
						})
						if (response.status === 200) {
							router.push('/').then()
						}
					} catch {
						throw new Error(`Can't update post ${values.id}`)
					}
				}}
			>
				<PostForm>
					<Button type='submit'>Edit post</Button>
					<Button onClick={e => onDelete(e)}>Delete post</Button>
				</PostForm>
			</Formik>
			<Title>Comments</Title>
			<div>
				{comments.map(comment => (
					<Comment {...comment} />
				))}
			</div>
		</Column>
	)
}

export default PostEditor
