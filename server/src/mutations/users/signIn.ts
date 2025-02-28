import { MutationResolvers } from "../../types";
import { comparePassword, createJWT } from "../../modules/auth.js";



export const signIn: MutationResolvers['signIn'] =  async (_,{username,password},{dataSources}) => {
    try{
        const user = await dataSources.db.user.findFirstOrThrow({where:{username}});
        const isValidPassword = await comparePassword(password,user.password);

        if(!isValidPassword) {
            return {
                code: 401,
                message: 'Invalid credentials',
                success:false,
                token:null
            }
        }
        const token = createJWT(user);
        return {
            code:200,
            message: 'connected',
            success: true,
            token: token
        }
    }catch {
        return {
            code:500,
            message: 'error server',
            success:false,
            token:null
        }
    }
}