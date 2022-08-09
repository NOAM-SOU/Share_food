import { create } from "../DL/controllers/userController";
import { User } from "../interfaces/interfaces";
import { createUserToken } from "./userLogic";
import { checkIfExist, hashPass } from "./tools";

export const register = async (user: User) => {
  await checkIfExist(user.email, true);
  const hash = await hashPass(user.passWord);
  const newU = await create({ ...user, passWord: hash });
  return createUserToken(newU);
};
