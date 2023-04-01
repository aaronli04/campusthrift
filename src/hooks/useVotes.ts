import { CommentVote } from "./types";

const useVotes = () => {

    const addVote = async (vote: CommentVote, token: string) => {
        if (token === '') return;
        console.log(vote)
        const body = JSON.stringify({
            id: vote.id,
            comment_id: vote.comment_id,
            user_id: vote.user_id,
            action: vote.action
        });
        fetch(`${process.env.NEXT_PUBLIC_BACKEND}/addVote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: body
        })
        .then(response => console.log(response.json()))
    }

    const updateVote = async (vote: CommentVote, token: string) => {
        if (token === '') return;
        const body = JSON.stringify({
            id: vote.id,
            comment_id: vote.comment_id,
            user_id: vote.user_id,
            action: vote.action
        });
        fetch(`${process.env.NEXT_PUBLIC_BACKEND}/updateVote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: body
        })
        .then(response => console.log(response.json()))
    }

    const getVotesByIDs = async (user_id: string, comment_id: string) => {
        const body = JSON.stringify({
            user_id: user_id,
            comment_id: comment_id
        });
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/getVotesByIDs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            return [];
        }
    }

    return {
        addVote: addVote,
        updateVote: updateVote,
        getVotesByIDs: getVotesByIDs
    }
}
export default useVotes