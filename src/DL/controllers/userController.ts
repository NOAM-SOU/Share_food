import userModel from "../models/user";
import { User } from "../../interfaces/interfaces";

export const create = async (user: User) => {
  return await userModel.create(user);
};

export const read = async () => {
  return await userModel.find();
};

export const readOne = async (id: String) => {
  return await userModel.findOne({ email: id });
};

export const update = async (id: String, updated: object) => {
  return await userModel.findOneAndUpdate(id, updated);
};

export const del = async (id: String) => {
  return await userModel.findOneAndRemove(id);
};
