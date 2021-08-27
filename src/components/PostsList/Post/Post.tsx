import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { PostContent } from '../../../lib/api/axios-api'
import Brick from '../../common/Brick/Brick'
import Title from '../../common/Title/Title'
import BodyText from '../../common/BodyText/BodyText'

interface Props extends PostContent {
	id: number
}

const PostContainer = styled(Brick)`
	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 10px 2px #d4dee5;
		background: #d4dee5;
	}
`

const Post: FC<Props> = ({ title, body, id }: PropsWithChildren<Props>) => (
	<Link href={`/posts/${id}`}>
		<PostContainer>
			<Title>{title}</Title>
			<BodyText>{body}</BodyText>
		</PostContainer>
	</Link>
)

export default Post
