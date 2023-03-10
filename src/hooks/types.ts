export interface Item {
    title: string;
    seller: UserData;
    listingID: string;
    transactionID: string | null;
    condition: string;
    description: string;
    category: string;
    size: string;
    quantityLeft: string;
    price: string;
    delivery: string;
    returns: string;
    datePosted: string;
    dateSold: string;
    imageURLList: string[];
    comments: Comment[];
    views: number;
}

export interface Comment {
    poster: UserData;
    datePosted: string;
    commentBody: string;
    likes: string;
    dislikes: string;
}

export interface UserData {
    email: string;
    id: string;
    username: string;
    profilePicture: string;
    school: string;
    listingsPosted: Item[];
    listingsSold: Item[];
    listingsPurchased: Item[];
    type: "user" | "administrator";
}