
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
