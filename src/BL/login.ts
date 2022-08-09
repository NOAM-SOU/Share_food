import { checkIfExist, matchPass } from "./tools";
import { Person } from "../Types/Types";
import { createUserToken } from "./userLogic";
import { readOne } from "../DL/controllers/userController";
import { connect } from "../DL/db";

export const login = async (input: Person) => {
  const user = await checkIfExist(input.email, false);
  await matchPass(input.password, user.passWord);
  return createUserToken(user);
};
