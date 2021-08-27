import React, { FC, PropsWithChildren } from 'react'
import { PostContent } from '../../lib/api/axios-api'

interface Props extends PostContent {}

const Post: FC<Props> = ({ title, body }: PropsWithChildren<Props>) => (
	<div>
		<div>${title}</div>
		<div>${body}</div>
		<br />
	</div>
)

export default Post
