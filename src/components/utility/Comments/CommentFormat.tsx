import React, {
  useEffect,
  useState
} from 'react'
import {
  FirebaseUser,
  SupabaseComment
} from '../../../hooks/types'
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
import useSearch from '../../../hooks/useSearch'
import defaultData from '../data/defaultFirebaseUser'

interface Props {
  comment: SupabaseComment
}

const CommentFormat: React.FC<Props> = ({ comment }) => {
  const { getFirebaseUserByID } = useSearch();
  const [user, setUser] = useState<FirebaseUser>(defaultData);

  useEffect(() => {
    async function fetchData() {
      const user = await getFirebaseUserByID(comment.poster_id);
      setUser(user)
    }
    fetchData();
  }, [])

  return (
    <HStack>
      <Avatar name={user.username} />
      <VStack alignItems='flex-start' spacing={0}>
        <Text>{comment.comment_body}</Text>
        <HStack spacing={0}>
          <IconButton aria-label='Likes' icon={<ChevronUpIcon />} variant='unstyled' />
          <Text>{comment.likes}</Text>
          <IconButton aria-label='Dislikes' icon={<ChevronDownIcon />} variant='unstyled' />
        </HStack>
      </VStack>
    </HStack>
  )
}

export default CommentFormat