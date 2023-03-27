import { Item, Product } from "./types";

const useBuy = () => {

    const addListing = async (productData: Product, token: any) => {
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

        if (!token) {
            return;
        }

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

    const showAllListings = async (): Promise<Item[]> => {

        const request = {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json; charset=UTF-8', },
        };

        const res = await fetch('/api/buy/showAllListings', request)

        if (!res.ok) {
            //handle
        }

        const data = await res.json();
        return data.items
    }

    return {
        showAllListings: showAllListings,
        addListing: addListing
    }
}
export default useBuy