/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createIngredient = /* GraphQL */ `
  mutation CreateIngredient(
    $input: CreateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    createIngredient(input: $input, condition: $condition) {
      id
      recipeID
      name
      amount
      measurement
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateIngredient = /* GraphQL */ `
  mutation UpdateIngredient(
    $input: UpdateIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    updateIngredient(input: $input, condition: $condition) {
      id
      recipeID
      name
      amount
      measurement
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteIngredient = /* GraphQL */ `
  mutation DeleteIngredient(
    $input: DeleteIngredientInput!
    $condition: ModelIngredientConditionInput
  ) {
    deleteIngredient(input: $input, condition: $condition) {
      id
      recipeID
      name
      amount
      measurement
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createStep = /* GraphQL */ `
  mutation CreateStep(
    $input: CreateStepInput!
    $condition: ModelStepConditionInput
  ) {
    createStep(input: $input, condition: $condition) {
      id
      recipeID
      name
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateStep = /* GraphQL */ `
  mutation UpdateStep(
    $input: UpdateStepInput!
    $condition: ModelStepConditionInput
  ) {
    updateStep(input: $input, condition: $condition) {
      id
      recipeID
      name
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteStep = /* GraphQL */ `
  mutation DeleteStep(
    $input: DeleteStepInput!
    $condition: ModelStepConditionInput
  ) {
    deleteStep(input: $input, condition: $condition) {
      id
      recipeID
      name
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createBookMark = /* GraphQL */ `
  mutation CreateBookMark(
    $input: CreateBookMarkInput!
    $condition: ModelBookMarkConditionInput
  ) {
    createBookMark(input: $input, condition: $condition) {
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
export const updateBookMark = /* GraphQL */ `
  mutation UpdateBookMark(
    $input: UpdateBookMarkInput!
    $condition: ModelBookMarkConditionInput
  ) {
    updateBookMark(input: $input, condition: $condition) {
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
export const deleteBookMark = /* GraphQL */ `
  mutation DeleteBookMark(
    $input: DeleteBookMarkInput!
    $condition: ModelBookMarkConditionInput
  ) {
    deleteBookMark(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
