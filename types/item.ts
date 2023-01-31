import { JSDocNonNullableType } from "typescript";

export interface Item {
    title: string;
    seller: string;
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
    views: number;
}