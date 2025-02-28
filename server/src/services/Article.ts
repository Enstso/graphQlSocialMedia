import { QueryResolvers } from "../types";

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
    include:{author:true,article:{include:{
      author:true
    }}}
  });
}

