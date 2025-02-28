/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetProfile($username: String!) {\n    getProfile(username: $username) {\n      photo\n      username\n    }\n  }\n": typeof types.GetProfileDocument,
    "\n  mutation createArticle($title: String!, $content: String!) {\n    createArticle(title: $title, content: $content) {\n      code\n      message\n      success\n    }\n  }\n": typeof types.CreateArticleDocument,
    "\n  query GetArticle($getArticleId: ID!) {\n    getArticle(id: $getArticleId) {\n      id\n      title\n      content\n      author {\n        username\n        photo\n      }\n      likes {\n        id\n      }\n    }\n  }\n": typeof types.GetArticleDocument,
    "\n  query GetComments($getCommentsByArticleId: ID!) {\n    getCommentsByArticle(id: $getCommentsByArticleId) {\n      author {\n        username\n        photo\n      }\n      content\n      id\n    }\n  }\n": typeof types.GetCommentsDocument,
    "\n  query GetArticles {\n    getArticles {\n      id\n      content\n      title\n      author {\n        username\n      }\n    }\n  }\n": typeof types.GetArticlesDocument,
    "\n  mutation LikeArticle($likeArticleId: ID!) {\n    likeArticle(id: $likeArticleId) {\n      code\n      message\n      success\n    }\n  }\n": typeof types.LikeArticleDocument,
    "\n  mutation RemoveLikeArticle($removeLikeArticleId: ID!) {\n    removeLikeArticle(id: $removeLikeArticleId) {\n      code\n      message\n      success\n    }\n  }\n": typeof types.RemoveLikeArticleDocument,
    "\n  mutation DeleteArticle($deleteArticleId: ID!) {\n    deleteArticle(id: $deleteArticleId) {\n      code\n      message\n      success\n    }\n  }\n": typeof types.DeleteArticleDocument,
    "\n  mutation signIn($username: String!, $password: String!) {\n    signIn(username: $username, password: $password) {\n      token\n      success\n      message\n      code\n    }\n  }\n": typeof types.SignInDocument,
    "\n  mutation CreateUser($username: String!, $password: String!) {\n    createUser(username: $username, password: $password) {\n      code\n      message\n      success\n      user {\n        username\n      }\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  mutation updateArticle($updateArticleId: ID!, $title: String, $content: String) {\n    updateArticle(id: $updateArticleId, title: $title, content: $content) {\n      code\n      message\n      success\n      article {\n        content\n        id\n      }\n    }\n  }\n": typeof types.UpdateArticleDocument,
};
const documents: Documents = {
    "\n  query GetProfile($username: String!) {\n    getProfile(username: $username) {\n      photo\n      username\n    }\n  }\n": types.GetProfileDocument,
    "\n  mutation createArticle($title: String!, $content: String!) {\n    createArticle(title: $title, content: $content) {\n      code\n      message\n      success\n    }\n  }\n": types.CreateArticleDocument,
    "\n  query GetArticle($getArticleId: ID!) {\n    getArticle(id: $getArticleId) {\n      id\n      title\n      content\n      author {\n        username\n        photo\n      }\n      likes {\n        id\n      }\n    }\n  }\n": types.GetArticleDocument,
    "\n  query GetComments($getCommentsByArticleId: ID!) {\n    getCommentsByArticle(id: $getCommentsByArticleId) {\n      author {\n        username\n        photo\n      }\n      content\n      id\n    }\n  }\n": types.GetCommentsDocument,
    "\n  query GetArticles {\n    getArticles {\n      id\n      content\n      title\n      author {\n        username\n      }\n    }\n  }\n": types.GetArticlesDocument,
    "\n  mutation LikeArticle($likeArticleId: ID!) {\n    likeArticle(id: $likeArticleId) {\n      code\n      message\n      success\n    }\n  }\n": types.LikeArticleDocument,
    "\n  mutation RemoveLikeArticle($removeLikeArticleId: ID!) {\n    removeLikeArticle(id: $removeLikeArticleId) {\n      code\n      message\n      success\n    }\n  }\n": types.RemoveLikeArticleDocument,
    "\n  mutation DeleteArticle($deleteArticleId: ID!) {\n    deleteArticle(id: $deleteArticleId) {\n      code\n      message\n      success\n    }\n  }\n": types.DeleteArticleDocument,
    "\n  mutation signIn($username: String!, $password: String!) {\n    signIn(username: $username, password: $password) {\n      token\n      success\n      message\n      code\n    }\n  }\n": types.SignInDocument,
    "\n  mutation CreateUser($username: String!, $password: String!) {\n    createUser(username: $username, password: $password) {\n      code\n      message\n      success\n      user {\n        username\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation updateArticle($updateArticleId: ID!, $title: String, $content: String) {\n    updateArticle(id: $updateArticleId, title: $title, content: $content) {\n      code\n      message\n      success\n      article {\n        content\n        id\n      }\n    }\n  }\n": types.UpdateArticleDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetProfile($username: String!) {\n    getProfile(username: $username) {\n      photo\n      username\n    }\n  }\n"): (typeof documents)["\n  query GetProfile($username: String!) {\n    getProfile(username: $username) {\n      photo\n      username\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createArticle($title: String!, $content: String!) {\n    createArticle(title: $title, content: $content) {\n      code\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation createArticle($title: String!, $content: String!) {\n    createArticle(title: $title, content: $content) {\n      code\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetArticle($getArticleId: ID!) {\n    getArticle(id: $getArticleId) {\n      id\n      title\n      content\n      author {\n        username\n        photo\n      }\n      likes {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArticle($getArticleId: ID!) {\n    getArticle(id: $getArticleId) {\n      id\n      title\n      content\n      author {\n        username\n        photo\n      }\n      likes {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetComments($getCommentsByArticleId: ID!) {\n    getCommentsByArticle(id: $getCommentsByArticleId) {\n      author {\n        username\n        photo\n      }\n      content\n      id\n    }\n  }\n"): (typeof documents)["\n  query GetComments($getCommentsByArticleId: ID!) {\n    getCommentsByArticle(id: $getCommentsByArticleId) {\n      author {\n        username\n        photo\n      }\n      content\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetArticles {\n    getArticles {\n      id\n      content\n      title\n      author {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetArticles {\n    getArticles {\n      id\n      content\n      title\n      author {\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation LikeArticle($likeArticleId: ID!) {\n    likeArticle(id: $likeArticleId) {\n      code\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation LikeArticle($likeArticleId: ID!) {\n    likeArticle(id: $likeArticleId) {\n      code\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation RemoveLikeArticle($removeLikeArticleId: ID!) {\n    removeLikeArticle(id: $removeLikeArticleId) {\n      code\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation RemoveLikeArticle($removeLikeArticleId: ID!) {\n    removeLikeArticle(id: $removeLikeArticleId) {\n      code\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteArticle($deleteArticleId: ID!) {\n    deleteArticle(id: $deleteArticleId) {\n      code\n      message\n      success\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteArticle($deleteArticleId: ID!) {\n    deleteArticle(id: $deleteArticleId) {\n      code\n      message\n      success\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signIn($username: String!, $password: String!) {\n    signIn(username: $username, password: $password) {\n      token\n      success\n      message\n      code\n    }\n  }\n"): (typeof documents)["\n  mutation signIn($username: String!, $password: String!) {\n    signIn(username: $username, password: $password) {\n      token\n      success\n      message\n      code\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($username: String!, $password: String!) {\n    createUser(username: $username, password: $password) {\n      code\n      message\n      success\n      user {\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateUser($username: String!, $password: String!) {\n    createUser(username: $username, password: $password) {\n      code\n      message\n      success\n      user {\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateArticle($updateArticleId: ID!, $title: String, $content: String) {\n    updateArticle(id: $updateArticleId, title: $title, content: $content) {\n      code\n      message\n      success\n      article {\n        content\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation updateArticle($updateArticleId: ID!, $title: String, $content: String) {\n    updateArticle(id: $updateArticleId, title: $title, content: $content) {\n      code\n      message\n      success\n      article {\n        content\n        id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;