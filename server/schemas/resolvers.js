const {User, Book} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (args, parent, context) => {
            if(context.user){
                const userData = await User.findOne({
                    _id: context.user._id
                }).select('-__v -password')
                return userData
            }
            
        },
    },
    Mutation: {
        login: async (args, parent, context, {email, password}) => {
            const userData = await User.findOne({
                email
            })
            if(!userData) {
                console.log('no user found!')
                return
            }
            const goodPass = await userData.isCorrectPassword(password)
            if(!goodPass){
                console.log("auth error")
                return
            }
            const token = signToken(userData)
            return {userData, token};
        },
        addUser: async (args, parent) => {
            const newUser = await User.create(args)
            const token = signToken(newUser);
            return {newUser, token}
        }
    },
};

module.exports = resolvers