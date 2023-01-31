import { Item } from "./item";

export interface UserData {
    email: string;
    firstName: string;
    lastName: string;
    userID: string;
    profilePicture: string;
    school: string;
    followers: UserData[];
    listingsPosted: Item[];
    listingsSold: Item[];
    transactions: string;
    type: "user" | "administrator";
}