import { QueryResolvers, MutationResolvers } from "../../types";

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
