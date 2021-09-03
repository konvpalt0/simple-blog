import React, { FC, PropsWithChildren } from 'react'
import { FastField, FieldProps, Form } from 'formik'
import styled from 'styled-components'
import Title from '../../../common/Title/Title'
import BodyText from '../../../common/BodyText/BodyText'
import Brick from '../../../common/Brick/Brick'
import { PostContent } from '../../../../lib/redux/reducers/posts-reducer/post-reducer-types'

const EditTitle = styled(Title)`
	& > input {
		width: 100%;
		font-size: 30px;
		font-weight: bold;
		text-align: center;
		background: inherit;
	}
`
const EditBody = styled(BodyText)`
	& textarea {
		background: whitesmoke;
		width: 100%;
		height: 400px;
		font-size: 18px;
		resize: none;
		overflow: unset;
	}
`
const ButtonBlock = styled(Brick)`
	display: flex;
	justify-content: flex-end;
`

const PostForm: FC = ({ children }: PropsWithChildren<{}>) => (
	<Form>
		<Brick>
			<EditTitle>
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
			</EditTitle>
			<EditBody>
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
			</EditBody>
		</Brick>
		<ButtonBlock>{children}</ButtonBlock>
	</Form>
)

export default PostForm
