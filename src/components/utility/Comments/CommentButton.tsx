import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import React, { MouseEvent, useState } from "react";
import useAuth from '../../../hooks/useAuth';
import { SupabaseComment } from '../../../hooks/types'
import useBuy from '../../../hooks/useBuy';
import { v4 as uuidv4 } from 'uuid';

interface Props {
    id: string
}

const CommentButton: React.FC<Props> = ({ id }) => {
    const { auth, createUser } = useAuth();
    const [ text, setText ] = useState<string>('');
    const { addComment } = useBuy();
    const toast = useToast();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        if (!auth) return;
        const token = auth.getIdToken();
        createUser(auth).then(response => {
            if (response !== null && text !== '') {
                const commentUpload:SupabaseComment = {
                    id: uuidv4(),
                    post_id: id,
                    poster_id: response.id,
                    body: text,
                    likes: 0
                }
                console.log(commentUpload)
                addComment(commentUpload, token)
                toast({
                    title: `Success!`,
                    status: 'success',
                    isClosable: true,
                })
            }
        })
    }

    return (
        <HStack w='100%'>
            <Input placeholder='Enter comment here' onChange={handleChange}/>
            <Button onClick={handleSubmit}>
                Comment
            </Button>
        </HStack>
    )
}

export default CommentButton