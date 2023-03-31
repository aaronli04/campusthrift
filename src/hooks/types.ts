import internal from "stream";

export interface Item {
    title: string;
    seller: FirebaseUser;
    listingID: string;
    condition: string;
    description: string;
    category: string;
    price: number;
    datePosted: string;
    photo: string;
    comments: Comment[];
}

export interface Comment {
    poster: FirebaseUser;
    datePosted: string;
    commentBody: string;
    likes: number;
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

export interface FirebaseUser {
    email: string;
    id: string;
    username: string;
    profilePicture: string;
    school: string;
    phone: string;
    type: "user" | "administrator";
}

export interface Product {
    id: string;
    seller_id: string;
    name: string;
    description: string;
    condition: string;
    price: number;
    category_name: string;
    photo: string;
}

export interface SupabaseComment {
    id: string,
    post_id: string,
    poster_id: string,
    comment_body: string,
    likes: number,
}