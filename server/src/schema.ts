import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    getProfile(username:String!): User
    getArticles: [Article]!
    getArticle(id: ID!): Article
    getArticlesByAuthor: [Article]!
    getCommentsByArticle(id: ID!): [Comment]!
    getLikesByArticle(id:ID!) : [Like]!
  
    }

  type Mutation {
    createUser(username: String!, password: String!): CreateUserResponse!
    signIn(username: String!, password: String!): SignInResponse!
    createArticle(title: String!, content: String!): ArticleResponse
    updateArticle(id: ID!, title: String, content: String): ArticleResponse
    deleteArticle(id: ID!): ArticleResponse
    likeArticle(id: ID!): LikeResponse
    removeLikeArticle(id: ID!): LikeResponse
    commentArticle(articleId: ID!, content: String!): CommentResponse
    deleteComment(id:ID!):  CommentResponse
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
    photo: String
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
        author: User!
        article: Article!
    }
`;