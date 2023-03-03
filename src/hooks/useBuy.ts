import { Item } from "./types";


const useBuy = () => {

    const showAllListings = async (): Promise<Item[]> => {

        const request = {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json; charset=UTF-8',},
        };

        const res = await fetch('/api/buy/showAllListings', request)
        
        if (!res.ok){
            //handle
        }

        const data = await res.json();
        return data.items
    }

    return {
        showAllListings: showAllListings
    }
}
export default useBuy