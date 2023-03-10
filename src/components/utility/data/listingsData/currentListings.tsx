import React from "react"
import { Item } from "../../../../hooks/types"
import users from "../users/userData"

const currentListings: Item[] = [
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
        listingID: '123458',
        category: 'Math Textbooks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget turpis aliquet, tempor erat id, rutrum nulla. Quisque varius molestie ante quis mollis. Proin et pellentesque lacus. Etiam vel eros semper sem consequat luctus quis id mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus in rutrum lectus. Proin sed sem lorem. Pellentesque vulputate blandit mi et viverra. Ut vehicula gravida felis eu tincidunt. Nunc imperdiet magna elit. Morbi pharetra semper dictum.',
        views: 15,
        transactionID: null,
        comments: [
            {
                poster: users[0],
                datePosted: "2/18/23",
                commentBody: "this item sucks!",
                likes: "1",
                dislikes: "2"
            },
            {
                poster: users[0],
                datePosted: "2/18/23",
                commentBody: "this item rules! you suck!",
                likes: "5",
                dislikes: "2"
            }
        ]
    },
    {
        title: 'Multivariable Calculus',
        seller: users[0],
        condition: 'Gently worn',
        size: 'n/a',
        quantityLeft: '6',
        price: '20',
        delivery: 'none',
        returns: 'no returns',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/175'],
        listingID: '123459',
        category: 'Math Textbooks',
        description: 'Hardcover, super solid choice',
        views: 17,
        transactionID: null,
        comments: [
        ]
    },
    {
        title: 'Yeezy Boost 350 V2',
        seller: users[0],
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '350',
        delivery: 'none',
        returns: 'no returns',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/175'],
        listingID: '123456',
        views: 0,
        category: 'Yeezy Shoes',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius odio ut nibh accumsan, ac cursus dui consectetur. Proin ut posuere lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean ac vulputate ex. Duis suscipit ante non nunc iaculis, ut faucibus dolor varius. Fusce in risus erat.',
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
        title: 'Nike Air Max',
        seller: users[0],
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '350',
        delivery: 'none',
        returns: 'no returns',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/175'],
        listingID: '123457',
        views: 1,
        category: 'Nike Shoes',
        description: 'Really nice shoes, airy, and comfortable',
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
        title: 'Biology 101',
        seller: users[1],
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '100',
        delivery: 'none',
        returns: 'no returns',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/175'],
        listingID: '123458',
        category: 'Science Textbooks',
        description: 'Really nice shoes, airy, and comfortable',
        views: 15,
        transactionID: null,
        comments: [
            {
                poster: users[0],
                datePosted: "2/18/23",
                commentBody: "this item sucks!",
                likes: "1",
                dislikes: "2"
            }
        ]
    },
    {
        title: 'Laptop',
        seller: users[1],
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '350',
        delivery: 'none',
        returns: 'no returns',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/175'],
        listingID: '123459',
        category: 'Computer',
        description: 'Really nice shoes, airy, and comfortable',
        views: 100,
        transactionID: null,
        comments: [
            {
                poster: users[0],
                datePosted: "2/18/23",
                commentBody: "this item sucks!",
                likes: "1",
                dislikes: "2"
            }
        ]
    },
    {
        title: 'Yeezy Boost 350 V2',
        seller: users[1],
        condition: 'Gently worn',
        size: '9.5',
        quantityLeft: '6',
        price: '350',
        delivery: 'none',
        returns: 'no returns',
        datePosted: 'Jan. 14th',
        dateSold: 'n/a',
        imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/175'],
        listingID: '123460',
        category: 'Yeezy Shoes',
        description: 'Really nice shoes, airy, and comfortable',
        views: 73,
        transactionID: null,
        comments: [
            {
                poster: users[0],
                datePosted: "2/18/23",
                commentBody: "this item sucks!",
                likes: "1",
                dislikes: "2"
            }
        ]
    },
]

export default currentListings
