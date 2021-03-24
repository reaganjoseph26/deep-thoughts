// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        thoughts: [Thought]
        friends: [User]
    }

    type Thought {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }

    type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {\
        me: User
        users: [User]
        user(username: String!): User
        thoughts(username: String): [Thought]
        thought(_id: ID!): Thought
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addThought(thoughtText: String!): Thought
        addReaction(thoughtId: ID!, reactionBody: String!): Thought
        addFriend(friendId: ID!): User
    }
    
`;
// addReaction() will return the parent Thought instead of the newly created Reaction because the front end will ultimately track changes on the thought level, not the reaction level.
//  thoughts(username: String): [Thought] allows thoughts query to be recieved with or w/o username parameter
// ! indicates that for that query to be carried out, the data must exist



module.exports = typeDefs;

