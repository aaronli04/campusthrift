import React from "react"
import { UserData } from "../../types/user"

const users: UserData[] = [
    {
        email: 'aaron.li@vanderbilt.edu',
        firstName: 'Aaron',
        lastName: 'Li',
        profilePicture: 'https://via.placeholder.com/150',
        userID: '312890xjdhaf',
        school: 'Vanderbilt University',
        followers: [],
        listingsPosted: [
            {
                title: 'Linear Algebra',
                seller: 'Aaron',
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
                transactionID: null
            }
        ],
        listingsSold: [
            {
                title: 'Multivariable Calculus',
                seller: 'Aaron',
                condition: 'Gently worn',
                size: 'n/a',
                quantityLeft: '6',
                price: '20',
                delivery: 'none',
                returns: 'no returns',
                datePosted: 'Jan. 14th',
                dateSold: 'n/a',
                imageURLList: ['https://placehold.jp/150x150.png', 'https://via.placeholder.com/175'],
                listingID: '1234123159',
                category: 'Math Textbooks',
                description: 'Hardcover, super solid choice',
                views: 17,
                transactionID: null
            }
        ],
        transactions: '1',
        type: 'user'
    }
]

export default users;