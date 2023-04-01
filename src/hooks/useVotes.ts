import { CommentVote } from "./types";

const useVotes = () => {

    const addVote = async (vote: CommentVote, token: string) => {
        console.log(token)
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

    return {
        addVote: addVote
    }
}
export default useVotes