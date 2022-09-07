const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    getPosts(query: String):[Post!]!
    getPost(query: String):Post!
}

type Post {
    _id: ID
    title: string
    bodyText: string
    createdAt: string
}
`
module.exports = typeDefs;