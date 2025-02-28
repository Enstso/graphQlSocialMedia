import { QueryResolvers, MutationResolvers } from "../../types";

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
        authorId: user.id,
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
        authorId: user.id,
        articleId: id,
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