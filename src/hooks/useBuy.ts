import { Item, Product } from "./types";
import useSearch from "./useSearch";

const useBuy = () => {

    const { getFirebaseUserByID } = useSearch();

    const addListing = async (productData: Product, token: string) => {
        if (token === '') return;
        const uploadData = {
            id: productData.id,
            seller_id: productData.seller_id,
            name: productData.name,
            description: productData.description,
            condition: productData.condition,
            price: productData.price,
            category_name: productData.category_name,
            photo: productData.photo
        };

        const body = JSON.stringify({
            id: productData.id,
            seller_id: productData.seller_id,
            name: productData.name,
            description: productData.description,
            condition: productData.condition,
            price: productData.price,
            category_name: productData.category_name,
            photo: productData.photo
        });

        fetch(`${process.env.NEXT_PUBLIC_BACKEND}/addListing`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: body
        })
            .then(response => console.log(response.json()))
    };

    const showAllListings = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/showAllListings`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
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
        showAllListings: showAllListings,
        addListing: addListing,
    }
}
export default useBuy