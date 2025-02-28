
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