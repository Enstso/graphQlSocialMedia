import { QueryResolvers, MutationResolvers } from "../types";

export const getArticle: QueryResolvers["getArticle"] = async (
  _,
  { id },
  context
) => {
  return context.dataSources.db.article.findUniqueOrThrow({
    where: { id },
    include: { author: true },
  });
};

export const getArticles: QueryResolvers["getArticles"] = async (
  _,
__,
  context
) => {
  return context.dataSources.db.article.findMany({ include: { author: true } });
};

export const getCommentsByArticle:QueryResolvers['getCommentsByArticle'] = async (_,{id},context)=>{
  return context.dataSources.db.comment.findMany({
    where:{articleId:id},
    include:{author:true,article:{include:{
      author:true
    }}}
  });
}

export const getLikesByArticle: QueryResolvers["getLikesByArticle"] = async (_,{id},context)=>{
  return context.dataSources.db.like.findMany({
    where:{articleId:id},
    include:{user:true,article:{include:{
      author:true
    }}}
  });
}

export const createArticle: MutationResolvers["createArticle"] = async (
  _,
  { title, content },
  { dataSources, user }
) => {
  try {
    if (!user) {
      return {
        code: 400,
        success: false,
        message: "Unauthorized",
        article: null,
      };
    }

    const article = await dataSources.db.article.create({
      data: {
        title,
        content,
        authorId: user.id,
      },
      include: {
        author: true,
      },
    });

    return {
      code: 201,
      success: true,
      message: "Article created",
      article,
    };
  } catch (error) {
    console.error("Error creating article:", error);
    return {
      code: 500,
      success: false,
      message: "Internal server error",
      article: null,
    };
  }
};

export const updateArticle: MutationResolvers["updateArticle"] = async (
  _,
  { id, title, content },
  { dataSources, user }
) => {
  try {
    if (!user) {
      return {
        code: 401,
        success: false,
        message: "Unauthorized",
        article: null,
      };
    }

    // Check if the article exists
    const existingArticle = await dataSources.db.article.findUniqueOrThrow({
      where: { id },
    });

    if (!existingArticle) {
      return {
        code: 404,
        success: false,
        message: "Article not found",
        article: null,
      };
    }

    // Optional: Check if the user is the author
    if (existingArticle.authorId !== user.id) {
      return {
        code: 403,
        success: false,
        message: "Forbidden: You can only update your own articles",
        article: null,
      };
    }

    const updatedArticle = await dataSources.db.article.update({
      where: { id },
      data: {
        title: title ?? undefined,
        content: content ?? undefined,
      },
      include: { author: true },
    });

    return {
      code: 200,
      success: true,
      message: "Article updated",
      article: updatedArticle,
    };
  } catch (error) {
    console.error("Error updating article:", error);
    return {
      code: 500,
      success: false,
      message: "Internal server error",
      article: null,
    };
  }
};

export const deleteArticle: MutationResolvers["deleteArticle"] = async (
  _,
  { id },
  { dataSources, user }
) => {
  if (!user) {
    return {
      code: 401,
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    // Check if the article exists
    const article = await dataSources.db.article.findUniqueOrThrow({ where: { id } });

    if (!article) {
      return {
        code: 404,
        success: false,
        message: "Article not found",
      };
    }

    // Ensure only the author can delete the article
    if (article.authorId !== user.id) {
      return {
        code: 403,
        success: false,
        message: "Forbidden: You can only delete your own articles",
      };
    }

    // Delete related likes and comments first
    await dataSources.db.like.deleteMany({ where: { articleId: id } });
    await dataSources.db.comment.deleteMany({ where: { articleId: id } });

    // Delete the article
    await dataSources.db.article.delete({ where: { id } });

    return {
      code: 200,
      success: true,
      message: "Article deleted",
    };
  } catch (error) {
    console.error("Error deleting article:", error);
    return {
      code: 500,
      success: false,
      message: "Internal server error",
    };
  }
};

export const likeArticle: MutationResolvers["likeArticle"] = async (
  _,
  { id },
  { dataSources, user }
) => {
  if (!user) {
    return {
      code: 401,
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    // Check if the user has already liked the article
    const existingLike = await dataSources.db.like.findFirstOrThrow({
      where: {
        userId: user.id,
        articleId: id,
      },
    });

    if (existingLike) {
      return {
        code: 400,
        success: false,
        message: "You have already liked this article",
      };
    }

    // Create a like
    const like = await dataSources.db.like.create({
      data: {
        userId: user.id,
        articleId: id,
      },
      include: {
        article: {
          include: {
            author: true,
          },
        },
        user: true,
      },
    });

    return {
      code: 201,
      success: true,
      message: "Article liked",
      like, // Return the like object if needed
    };
  } catch (error) {
    console.error("Error liking article:", error);
    return {
      code: 500,
      success: false,
      message: "Internal server error",
    };
  }
};

export const removeLikeArticle: MutationResolvers["removeLikeArticle"] = async (
  _,
  { id },
  { dataSources, user }
) => {
  if (!user) {
    return {
      code: 401,
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    const like = await dataSources.db.like.findFirstOrThrow({
      where: {
        articleId: id,
        userId: user.id,
      },
    });

    if (!like) {
      return {
        code: 400,
        success: false,
        message: "You have not liked this article",
      };
    }

    await dataSources.db.like.delete({
      where: { id: like.id },
    });

    return {
      code: 200,
      success: true,
      message: "Like removed",
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      message: "Internal server error",
    };
  }
};

export const commentArticle: MutationResolvers["commentArticle"] = async (
  _,
  { articleId, content },
  { dataSources, user }
) => {
  if (!user) {
    return {
      code: 401,
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    const comment = await dataSources.db.comment.create({
      data: {
        content,
        authorId: user.id,
        articleId,
      },
      include: {
        article: {
          include: {
            author: true,
          },
        },
        author: true,
      },
    });
    return {
      code: 200,
      success: true,
      message: "Comment",
      comment,
    };
  } catch {
    return {
      code: 500,
      success: false,
      message: "Comment",
    };
  }
};

export const deleteComment: MutationResolvers["deleteComment"] = async (
  _,
  { id },
  { dataSources, user }
) => {
  if (!user) {
    return {
      code: 401,
      success: false,
      message: "Unauthorized",
    };
  }
  try {
    const comment = await dataSources.db.comment.findFirstOrThrow({
      where: { id:id }
    });

    if(!comment){
      return {
        code:400,
        success: false,
        message:"comment"
      };
    }

    await dataSources.db.comment.delete({
      where:{id:comment.id},
    });
    return {
      code:200,
      success:true,
      message:"comment removed"
    };
  } catch (error) {
    return {
      code: 500,
      success: false,
      message: "Internal server error",
    };
  }  
};
