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
