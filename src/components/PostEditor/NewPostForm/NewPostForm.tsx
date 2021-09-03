import { Formik } from 'formik'
import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { postsAPI } from '../../../lib/api/axios-api'
import Column from '../../common/Column/Column'
import Button from '../../common/Button/Button'
import PostForm from './PostForm/PostForm'
import { PostContent } from '../../../lib/redux/reducers/posts-reducer/post-reducer-types'

const NewPostForm: FC = () => {
	const router = useRouter()
	return (
		<Column>
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
				<PostForm>
					<Button type='submit'>Add post</Button>
				</PostForm>
			</Formik>
		</Column>
	)
}

export default NewPostForm
