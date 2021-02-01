/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      name
      userId
      isPublic
      ingredients {
        items {
          id
          recipeID
          name
          amount
          measurement
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      steps {
        items {
          id
          recipeID
          name
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        userId
        isPublic
        ingredients {
          nextToken
        }
        steps {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBookMark = /* GraphQL */ `
  query GetBookMark($id: ID!) {
    getBookMark(id: $id) {
      id
      userId
      recipeID
      recipe {
        id
        name
        userId
        isPublic
        ingredients {
          nextToken
        }
        steps {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listBookMarks = /* GraphQL */ `
  query ListBookMarks(
    $filter: ModelBookMarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBookMarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        recipeID
        recipe {
          id
          name
          userId
          isPublic
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      bookmarked {
        items {
          id
          userId
          recipeID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        bookmarked {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
