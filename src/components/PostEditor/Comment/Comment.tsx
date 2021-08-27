import React, { FC, PropsWithChildren } from 'react'
import { CommentType } from '../../../lib/api/axios-api'
import Brick from '../../common/Brick/Brick'

interface Props extends CommentType {}

const Comment: FC<Props> = ({ body }: PropsWithChildren<Props>) => (
	<Brick>{body}</Brick>
)

export default Comment
