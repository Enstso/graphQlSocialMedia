import { createUser } from "./mutations/users/createUser.js";
import { signIn } from "./mutations/users/signIn.js";
import { Resolvers,  } from "./types.js";
import { getArticles,getArticle } from "./services/Article.js";
import { getCommentsByArticle,getLikesByArticle } from "./services/Article.js";
import { getProfile } from "./services/Profile.js";
import { createArticle} from "./mutations/articles/createArticle.js";
import { updateArticle } from "./mutations/articles/updateArticle.js";
import { deleteArticle } from "./mutations/articles/deleteArticle.js"; 
import { commentArticle } from "./mutations/articles/commentArticle.js";
import { likeArticle } from "./mutations/articles/likeArticle.js";
import { removeLikeArticle } from "./mutations/articles/removeLikeArticle.js";
import { deleteComment } from "./mutations/articles/deleteComment.js";
export const resolvers: Resolvers = {
  Query: {
    getArticles,
    getArticle,
    getCommentsByArticle,
    getLikesByArticle,
    getProfile
  },
  Mutation: {

    createUser,
    signIn,
    createArticle,
    updateArticle,
    deleteArticle,
    commentArticle,
    likeArticle,
    removeLikeArticle,
    deleteComment
  },
}