import React from "react"
import { UserData } from "../../../../hooks/types"
import userDataTwo from './userDataTwo'

const users: UserData[] = [
    {
        email: 'aaron.li@vanderbilt.edu',
        firstName: 'Aaron',
        lastName: 'Li',
        profilePicture: 'https://via.placeholder.com/150',
        userID: '312890xjdhaf',
        school: 'Vanderbilt University',
        following: [],
        followers: [],
        listingsPosted: [
            {
                title: 'Linear Algebra',
                seller: userDataTwo[0],
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
                        poster: userDataTwo[0],
                        datePosted: "2/18/23",
                        commentBody: "this item sucks!",
                        likes: "1",
                        dislikes: "2"
                    }
                ]
            }
        ],
        listingsSold: [
            {
                title: 'Linear Algebra',
                seller: userDataTwo[0],
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
                        poster: userDataTwo[0],
                        datePosted: "2/18/23",
                        commentBody: "this item sucks!",
                        likes: "1",
                        dislikes: "2"
                    }
                ]
            }
        ],
        listingsPurchased: [
            {
                title: 'Yeezy Boost 350 V2',
                seller: userDataTwo[0],
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
                        poster: userDataTwo[0],
                        datePosted: "2/18/23",
                        commentBody: "this item sucks!",
                        likes: "1",
                        dislikes: "2"
                    }
                ]
            }
        ],
        type: 'user'
    },
    {
        email: 'xyz@vanderbilt.edu',
        firstName: 'xy',
        lastName: 'z',
        profilePicture: 'https://via.placeholder.com/150',
        userID: '123312',
        school: 'Stanford University',
        following: [],
        followers: [],
        listingsPosted: [],
        listingsSold: [],
        listingsPurchased: [],
        type: 'user'
    }
]

export default users;