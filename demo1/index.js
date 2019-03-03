// // graphql.js
// var { graphql, buildSchema } = require('graphql')
//
// var schema = buildSchema(`
//     type Query {
//         hello: String,
//         auth: String
//     }
// `)
//
// var root = { hello: () => 'Hello World', auth: () => 'Jayne Yan'}
//
// var requestParamters = '{ hello, auth}'
//
// graphql(schema, requestParamters , root).then((response) => {
//     console.log(response)
// })




//express-graphql
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
    type Query {
        hello: String,
        auth: String
    }
`)
var root = { hello: () => 'Hello world', auth: () => 'Jayne Yan'}
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));



// //apollo-server Express
// const express = require('express');
// const { ApolloServer, gql } = require('apollo-server-express');
// // Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     hello: String,
//     auth: String
//   }
// `;
// // Provide resolver functions for your schema fields
// const resolvers = {
//     Query: {
//         hello: () => 'Hello world!',
//         auth: () => 'Jayne Yan'
//     },
// };
// const server = new ApolloServer({ typeDefs, resolvers });
// const app = express();
// server.applyMiddleware({ app });
// app.listen({ port: 4000 }, () =>
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );

