import {
    Button,
    HStack,
    Input,
    useToast
} from '@chakra-ui/react'
import React, {
    MouseEvent,
    useEffect,
    useState
} from "react";
import useAuth from '../../../hooks/useAuth';
import { SupabaseComment } from '../../../hooks/types'
import { v4 as uuidv4 } from 'uuid';
import useComments from '../../../hooks/useComments';
import { useRouter } from 'next/router';

interface Props {
    id: string
}

const CommentButton: React.FC<Props> = ({ id }) => {
    const { auth, createUser } = useAuth();
    const [text, setText] = useState<string>('');
    const { addComment } = useComments();
    const toast = useToast();
    const [token, setToken] = useState<string>('')
    const router = useRouter();

    useEffect(() => {
        async function getIDToken() {
            if (auth) {
                const token = await auth.getIdToken()
                setToken(token)
            }
        }
        getIDToken();
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        if (!auth) return;
        createUser(auth).then(response => {
            if (response !== null && text !== '') {
                const commentUpload: SupabaseComment = {
                    id: uuidv4(),
                    post_id: id,
                    poster_id: response.id,
                    comment_body: text,
                    likes: 0
                }
                addComment(commentUpload, token)
                toast({
                    title: `Success!`,
                    status: 'success',
                    isClosable: true,
                })
            }
        })
        router.reload()
    }

    return (
        <HStack w='100%'>
            <Input placeholder='Enter comment here' onChange={handleChange} />
            <Button onClick={handleSubmit}>
                Comment
            </Button>
        </HStack>
    )
}

export default CommentButton