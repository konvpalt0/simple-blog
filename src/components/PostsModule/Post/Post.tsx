import Link from 'next/link'
import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { PostContent } from '../../../lib/api/axios-api'

interface Props extends PostContent {
	id: number
}

const basedColor: React.CSSProperties['color'] = 'whitesmoke'
const hoverColor: React.CSSProperties['color'] = '#d4dee5'

const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-height: 200px;
	overflow: hidden;
	margin-bottom: 30px;
	padding: 10px;
	border: 1px solid rgb(213, 213, 213);
	border-radius: 5px;
	box-shadow: 0 0 10px 2px ${basedColor};
	background: ${basedColor};

	&:hover {
		transform: scale(1.05);
		box-shadow: 0 0 10px 2px ${hoverColor};
		background: ${hoverColor};
	}
`
export const Title = styled.div`
	font-size: 30px;
	font-weight: bold;
	align-self: center;
	margin-bottom: 10px;
`
export const Body = styled.div`
	font-size: 18px;
	text-align: justify;
`

const Post: FC<Props> = ({ title, body, id }: PropsWithChildren<Props>) => (
	<Link href={`/posts/${id}`}>
		<PostContainer>
			<Title>{title}</Title>
			<Body>{body}</Body>
		</PostContainer>
	</Link>
)

export default Post
