import { buildSchema } from 'graphql'

export default buildSchema(`
  scalar Date

  type Type {
    id: ID!
    name: String!
  }

  type Card {
    id: ID!
    name: String!
    description: String!
    created_on: Date!
  }

  type SuccessResponse {
    wasSuccessful: Boolean!
  }

  input CardUpdate {
    id: ID!
    name: String
    description: String
  }

  type Query {
    getCardType(name: String!): Type
  }

  type Mutation {
    updateCard (update: CardUpdate!): Card
  }
`);
