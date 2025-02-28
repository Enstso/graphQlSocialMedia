import { QueryResolvers, MutationResolvers } from "../types";

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