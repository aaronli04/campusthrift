import React from 'react'
import { Comment } from '../../../hooks/types'
import {
  Avatar,
  HStack,
  IconButton,
  Text,
  VStack
} from '@chakra-ui/react'
import { 
  ChevronDownIcon,
  ChevronUpIcon
} from '@chakra-ui/icons'

interface Props {
  comment: Comment
}

const CommentFormat: React.FC<Props> = ({ comment }) => {
  return (
    <HStack>
      <Avatar name={comment.poster.firstName} />
      <VStack alignItems='flex-start' spacing={0}>
        <Text>{comment.commentBody}</Text>
        <HStack spacing={0}>
          <IconButton aria-label='Likes' icon={<ChevronUpIcon/>} variant='unstyled' />
          <Text>{parseInt(comment.likes) - parseInt(comment.dislikes)}</Text>
          <IconButton aria-label='Dislikes' icon={<ChevronDownIcon/>} variant='unstyled'/>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default CommentFormat