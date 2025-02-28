import { QueryResolvers } from "../types";

export  const getProfile: QueryResolvers['getProfile'] = async (_,{username},context) => {
    return context.dataSources.db.user.findUniqueOrThrow({
        where:{username}
    });
}