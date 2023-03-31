import { Item } from "./types";
import useComments from "./useComments";
import useSearch from "./useSearch";

const useSell = () => {
    const { getFirebaseUserByID } = useSearch();


    const getMyListings = async (user_id: string, token: string) => {
        if (token === '') return [];
        const body = JSON.stringify({
            seller_id: user_id,
        });
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/getMyListings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: body
        })
        
        if (response.status === 200) {
            const data = await response.json();
            let items: Item[] = []
            for (let i = 0; i < data.length; ++i) {
                const item: Item = {
                    title: data[i].name,
                    seller: (await getFirebaseUserByID(data[i].seller_id)),
                    listingID: data[i].id,
                    transaction_id: data[i].transaction_id,
                    condition: data[i].condition,
                    description: data[i].description,
                    category: data[i].category_name,
                    price: data[i].price,
                    datePosted: data[i].created_at,
                    photo: data[i].photo,
                    comments: [],
                }
                items.push(item);
            }
            return items;
        } else {
            return [];
        }
    }

    return {
        getMyListings: getMyListings
    }
}
export default useSell

