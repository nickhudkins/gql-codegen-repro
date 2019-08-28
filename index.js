const gql = require("graphql-tag");

// Query for TypeOne
const QueryOne = gql`
  query getTypeOne($id: ID!) {
    node(id: $id) {
      ... on TypeOne {
        id
        collidingField {
          foo {
            fieldOne
          }
        }
      }
    }
  }
`;

// TypeTwo
const QueryTwo = gql`
  query getTypeTwo($id: ID!) {
    node(id: $id) {
      ... on TypeTwo {
        id
        collidingField {
          bar {
            fieldOne
          }
        }
      }
    }
  }
`;
