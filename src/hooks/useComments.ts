import { SupabaseComment } from "./types";

const useComments = () => {

    const getCommentsByPostID = async(post_id: string): Promise<SupabaseComment[]> => {
        const body = JSON.stringify({ post_id: post_id });

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/getCommentsByPostID`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body
        })
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
        else {
            return [];
        }
    }

    const addComment = async (comment: SupabaseComment, t: any) => {
        const token = await Promise.resolve(t);
        if (token === '') return;
        const body = JSON.stringify({
            id: comment.id,
            post_id: comment.post_id,
            poster_id: comment.poster_id,
            comment_body: comment.comment_body,
            likes: comment.likes,
        });
        fetch(`${process.env.NEXT_PUBLIC_BACKEND}/addComment`, {
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
        getCommentsByPostID: getCommentsByPostID,
        addComment: addComment
    }
}
export default useComments