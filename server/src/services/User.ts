import { MutationResolvers } from "../types";
import { comparePassword, createJWT, hashPassword } from "../modules/auth";


export const createUser: MutationResolvers['createUser'] = async (_, {username, password}, context) => {
    try {
        const createdUser = await context.dataSources.db.user.create({
            data: {
                username,
                password: await hashPassword(password)
            }
        })

        return {
            code: 200,
            message: `User created`,
            success: true,
            user:{
                id: createdUser.id,
                username: createdUser.username
            }
        }
    } catch {
        return {
            code: 500,
            message:"Error server with your user",
            success: false,
            user:null
        }
    }
}

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