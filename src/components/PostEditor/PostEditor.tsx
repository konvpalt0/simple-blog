import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { FastField, FieldProps, Form, Formik } from 'formik'
import {
	Comment,
	PostContent,
	postsAPI,
	PostType,
} from '../../lib/api/axios-api'

interface Props extends PostType {
	comments: Array<Comment>
}

const Title = styled.div`
	& input {
		padding: 5px;
		border: 1px solid rgb(213, 213, 213);
		border-radius: 5px;
		background: whitesmoke;
		width: 100%;
		height: 100%;
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		margin-bottom: 10px;
	}
`
const Body = styled.div`
	& textarea {
		padding: 5px;
		border: 1px solid rgb(213, 213, 213);
		border-radius: 5px;
		background: whitesmoke;
		width: 100%;
		height: 400px;
		font-size: 18px;
		text-align: justify;
		word-break: break-word;
		resize: none;
		overflow: unset;
	}
`
const Button = styled.button`
	padding: 5px;
	border: 1px solid rgb(213, 213, 213);
	border-radius: 5px;
	font-size: 20px;
	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 10px 2px whitesmoke;
		background: whitesmoke;
	}
`

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
		<div>
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
				<Form>
					<Title>
						<FastField name='title'>
							{({ field }: FieldProps<PostContent['title']>) => (
								<input
									name={field.name}
									type='text'
									value={field.value}
									onChange={field.onChange}
									placeholder='Enter post title'
								/>
							)}
						</FastField>
					</Title>
					<Body>
						<FastField name='body'>
							{({ field }: FieldProps<PostContent['body']>) => (
								<textarea
									name={field.name}
									value={field.value}
									onChange={field.onChange}
									placeholder='Enter post text'
								/>
							)}
						</FastField>
					</Body>
					<Button type='submit'>Edit post</Button>
					<Button onClick={e => onDelete(e)}>Delete post</Button>
				</Form>
			</Formik>
			<div>
				{comments.map(comment => (
					<div>{comment.body}</div>
				))}
			</div>
		</div>
	)
}

export default PostEditor
