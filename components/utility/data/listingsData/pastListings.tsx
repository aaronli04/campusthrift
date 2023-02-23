import React from "react"
import {
    Item
} from "../../../../hooks/types"
import users from "../users/userData"

const pastListings: Item[] = [
    {
        title: 'Linear Algebra',
        seller: users[0],
        condition: 'Gently worn',
        size: 'n/a',
        quantityLeft: '6',
        price: '50',
        delivery: 'none',
        returns: 'no returns',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/275'],
        listingID: '12345821',
        category: 'Math Textbooks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis aliquet, tempor erat id, rutrum nulla. Quisque varius molestie ante quis mollis. Proin et pellentesque lacus. Etiam vel eros semper sem consequat luctus quis id mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in rutrum lectus. Proin sed sem lorem. Pellentesque vulputate blandit mi et viverra. Ut vehicula gravida felis eu tincidunt. Nunc imperdiet magna elit. Morbi pharetra semper dictum.',
        views: 15,
        transactionID: null,
        comments: [
            {
                poster: users[1],
                datePosted: "2/18/23",
                commentBody: "this item sucks!",
                likes: "1",
                dislikes: "2"
            }
        ]
    },
    {
        title: 'Linear Algebra',
        seller: users[0],
        condition: 'Gently worn',
        size: 'n/a',
        quantityLeft: '6',
        price: '50',
        delivery: 'none',
        returns: 'no returns',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/275'],
        listingID: '1234582121',
        category: 'Math Textbooks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis aliquet, tempor erat id, rutrum nulla. Quisque varius molestie ante quis mollis. Proin et pellentesque lacus. Etiam vel eros semper sem consequat luctus quis id mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in rutrum lectus. Proin sed sem lorem. Pellentesque vulputate blandit mi et viverra. Ut vehicula gravida felis eu tincidunt. Nunc imperdiet magna elit. Morbi pharetra semper dictum.',
        views: 15,
        transactionID: null,
        comments: [
            {
                poster: users[1],
                datePosted: "2/18/23",
                commentBody: "this item sucks!",
                likes: "1",
                dislikes: "2"
            }
        ]
    }
]

export default pastListings