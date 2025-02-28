import { MutationResolvers } from "../../types.js";
import { hashPassword } from "../../modules/auth.js";
export const createUser: MutationResolvers["createUser"] = async (
  _,
  { username, password },
  context
) => {
  try {
    const createdUser = await context.dataSources.db.user.create({
      data: {
        username,
        password: await hashPassword(password),
      },
    });

    return {
      code: 200,
      message: `User created`,
      success: true,
      user: {
        id: createdUser.id,
        username: createdUser.username,
      },
    };
  } catch {
    return {
      code: 500,
      message: "Error server with your user",
      success: false,
      user: null,
    };
  }
};
