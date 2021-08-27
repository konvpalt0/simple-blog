import { FastField, FieldProps, Form, Formik } from 'formik'
import React, { FC } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { PostContent, postsAPI } from '../../lib/api/axios-api'

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

const NewPostForm: FC = () => {
	const router = useRouter()
	return (
		<Formik
			initialValues={{ title: '', body: '' } as PostContent}
			onSubmit={async values => {
				try {
					const response = await postsAPI.create(values)
					if (response.status === 201) {
						router.push('/').then()
					}
				} catch {
					throw new Error("Can't create new post")
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
				<Button type='submit'>Add post</Button>
			</Form>
		</Formik>
	)
}

export default NewPostForm
