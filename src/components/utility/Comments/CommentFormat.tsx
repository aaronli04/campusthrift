import React, {
  useEffect,
  useState,
  MouseEvent
} from 'react'
import {
  CommentVote,
  FirebaseUser,
  SupabaseComment
} from '../../../hooks/types'
import {
  Avatar,
  HStack,
  IconButton,
  Text,
  useToast,
  VStack
} from '@chakra-ui/react'
import {
  ChevronDownIcon,
  ChevronUpIcon
} from '@chakra-ui/icons'
import useSearch from '../../../hooks/useSearch'
import { v4 as uuidv4 } from 'uuid';
import defaultData from '../data/defaultFirebaseUser'
import { useRouter } from 'next/router'
import useAuth from '../../../hooks/useAuth'
import useVotes from '../../../hooks/useVotes'

interface Props {
  comment: SupabaseComment
}

const CommentFormat: React.FC<Props> = ({ comment }) => {
  const { auth, createUser } = useAuth();
  const { getFirebaseUserByID } = useSearch();
  const { addVote, updateVote, getVotesByIDs } = useVotes();
  const [ token, setToken ] = useState<string>('');
  const toast = useToast();
  const [user, setUser] = useState<FirebaseUser>(defaultData);
  const [ votes, setVotes ] = useState<CommentVote[]>([]);
  const router = useRouter()

  useEffect(() => {
    async function getIDToken() {
      if (auth) {
        const token = await auth.getIdToken()
        setToken(token)
      }
    }
    async function fetchData() {
      const user = await getFirebaseUserByID(comment.poster_id);
      setUser(user)
      const votes = await getVotesByIDs(user.id, comment.id);
      setVotes(votes)
    }
    getIDToken()
    fetchData();
  }, [])

  const vote = (voteUpload: CommentVote, token: string) => {
    // has not voted previously, addVote
    if (votes.length === 0) {
      addVote(voteUpload, token);
    }
    // has voted previosuly, updateVote
    else {
      updateVote(voteUpload, token);
    }
  }

  const handleUpvote = (e: MouseEvent<HTMLButtonElement>) => {
    if (!auth) return;
    createUser(auth).then(response => {
      if (response !== null) {
        const voteUpload: CommentVote = {
          id: uuidv4(),
          comment_id: comment.id,
          user_id: user.id,
          action: 'upvote'
        }
        vote(voteUpload, token)
        toast({
          title: `Success!`,
          status: 'success',
          isClosable: true,
        })
      }
    })
  }

  const handleDownvote = (e: MouseEvent<HTMLButtonElement>) => {
    if (!auth) return;
    createUser(auth).then(response => {
      if (response !== null) {
        const voteUpload: CommentVote = {
          id: uuidv4(),
          comment_id: comment.id,
          user_id: user.id,
          action: 'downvote'
        }
        vote(voteUpload, token)
        toast({
          title: `Success!`,
          status: 'success',
          isClosable: true,
        })
      }
    })
  }

  return (
    <HStack>
      <Avatar name={user.username} />
      <VStack alignItems='flex-start' spacing={0}>
        <Text>{comment.comment_body}</Text>
        <HStack spacing={0}>
          <IconButton aria-label='Likes' icon={<ChevronUpIcon />} variant='unstyled' onClick={handleUpvote}/>
          <Text>{comment.likes}</Text>
          <IconButton aria-label='Dislikes' icon={<ChevronDownIcon />} variant='unstyled' onClick={handleDownvote}/>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default CommentFormat