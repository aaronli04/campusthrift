import React from 'react'
import { Comment } from '../../hooks/types'
import {
    Text
} from '@chakra-ui/react'

interface Props {
    comment: Comment
}

const CommentFormat: React.FC<Props> = ( { comment } ) => {
  return (
    <Text>{comment.commentBody}</Text>
  )
}

export default CommentFormat