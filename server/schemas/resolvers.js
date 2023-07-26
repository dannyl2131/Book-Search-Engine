const {User, Book} = require('../models');

const resolvers = {
    Query: {
        book: async () => {
            return Book.find({})
        },
    },
    Mutation: {
        
    }
};

module.exports = resolvers