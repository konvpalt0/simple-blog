import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

interface Props {}

const newPostUrl = '/posts/new'

const Button = styled.div`
	margin-bottom: 30px;
	font-size: 30px;
	font-weight: bold;
	font-style: italic;
	align-self: center;
	cursor: pointer;
	&:hover {
		transform: scale(1.1);
	}
	& > a {
		text-decoration: none;
		color: black;
	}
`

const AddNewPostButton: FC<Props> = () => (
	<Button>
		<Link href={newPostUrl}>Add new post</Link>
	</Button>
)

export default AddNewPostButton
