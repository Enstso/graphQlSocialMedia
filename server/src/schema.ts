import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    doctors(specialities: [Speciality!]): [Doctor]
    add(number1: Float!, number2: Float!): Float!
    substract(number1: Float!, number2: Float!): Float!
    multiply(number1: Float!, number2: Float!): Float!
    divide(number1: Float!, number2: Float!): Float
    closestColor(hexa: String!): String
    getTracks: [Track!]!
    getFilms: [Film]!
    getPeople: [People]!
    getArticles: [Article]!
    getArticle(id: ID!): Article
  }

  type Mutation {
    incrementTrackView(id: ID!): IncrementTrackViewReponse!
    incrementNumberOfLikes(id: ID!): IncrementNumberOfLikesReponse!
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
    createArticle(title: String!, content: String!): ArticleResponse
    updateArticle(id: ID!, title: String, content: String): ArticleResponse
    deleteArticle(id: ID!): ArticleResponse
    likeArticle(id: ID!): LikeResponse
    removeLikeArticle(id: ID!): LikeResponse
    commentArticle(articleId: ID!, content: String!): CommentResponse
    }

  type IncrementTrackViewReponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type IncrementNumberOfLikesReponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
  }

  type CreateUserResponse {
    code: Int!
    success: Boolean!
    message: String!
    user: User
  }
  type SignInResponse {
    code: Int!
    success: Boolean!
    message: String!
    token: String
  }
  
  type CommentResponse {
        code: Int!
        success: Boolean!
        message: String!
        comment: Comment
  }

  type LikeResponse {
      code: Int!
      success: Boolean!
      message: String!
      like: Like
  }
  
  type ArticleResponse {
    code: Int!
    success: Boolean!
    message: String!
    article: Article
  }

  type User {
    id: ID!
    username: String!
  }

  type Track {
    id: ID!
    thumbnail: String!
    title: String!
    description: String!
    author: Author
    numberOfViews: Int
    numberOfLikes: Int
  }

  type Author {
    id: ID!
    name: String!
    photo: String!
  }

  type Doctor {
    name: String
    speciality: Speciality
  }
 
  enum Speciality {
    PSYCHOLOGIST
    OPHTALMOLOGIST
  }

  type Article {
        id: ID!
        title: String!
        content: String!
        author: User!
        comments: [Comment]
        likes: [Like]
    }
 type Comment {
        id: ID!
        content: String!
        author: User!
        article: Article!
    }

    type Like {
        id: ID!
        user: User!
        article: Article!
    }

  type Film {
    id: ID
    title: String
    people: [People]!
  }

  type People {
    id: ID
    name: String
    eyeColor: String
    films: [Film]!
  }
`;