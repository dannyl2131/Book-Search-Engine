const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID!
        authors: [
            {
                type: String!
            }
        ]
        description: {
            type: String!
        }
        bookId: {
            type: String!
        }
        image: {
            type: String!
        }
        link: {
            type: String!
        }
        title: {
            type: String!
        }
    }
    
    type User {
        username: {
            type: String!
        }
        email: {
            type: String!
        }
        password: {
            type: String!
        }
        savedBooks: [Book]!
    }
`;

module.exports = typeDefs