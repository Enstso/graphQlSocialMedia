

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
        authorId: user.id,
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
