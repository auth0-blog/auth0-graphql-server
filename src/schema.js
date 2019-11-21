const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Event {
        id: ID!
        title: String!
        description: String
        date: String
        attendants: [Person!]
    }

    type Person {
        id: ID!
        name: String!
        age: Int
    }

    type Query {
        events: [Event!]!
        event(id: Int!): Event!
    }

    type Mutation {
        editEvent(id: Int!, title: String!, description: String!): Event!
    }
`);

module.exports = schema;
