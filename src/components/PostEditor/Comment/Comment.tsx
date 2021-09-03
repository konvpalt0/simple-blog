import React, { FC, PropsWithChildren } from 'react'
import Brick from '../../common/Brick/Brick'
import { CommentType } from '../../../lib/redux/reducers/posts-reducer/post-reducer-types'

interface Props extends CommentType {}

const Comment: FC<Props> = ({ body }: PropsWithChildren<Props>) => (
	<Brick>{body}</Brick>
)

export default Comment
