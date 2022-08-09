import { readOne } from "../DL/controllers/userController";
import { UserError } from "./errors";
import bcrypt from "bcrypt";

export const checkIfExist = async (filter: String, para: Boolean) => {
  const exist = await readOne(filter);
  if (exist && para) throw new UserError("User already exist", 1);
  if (exist && !para) return exist;
  else throw new UserError("User not found", 2);
};

export const hashPass = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const matchPass = async (comp: string, to: string) => {
  const match = await bcrypt.compare(comp, to);
  if (!match) throw new UserError("Wrong password", 3);
};

export const globalCrud = async (
  func: Function,
  id: String,
  update: object
) => {
  return func(id, update);
};
