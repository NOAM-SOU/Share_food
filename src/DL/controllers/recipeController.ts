import recipeModel from "../models/recipe";
import { UserInfo } from "../../interfaces/interfaces";

export const create = async (user: UserInfo) => {
  return await recipeModel.create(user);
};

export const read = async () => {
  return await recipeModel.find();
};

export const readOne = async (id: String) => {
  return await recipeModel.findOne(id);
};

export const update = async (id: String, updated: Object) => {
  return await recipeModel.findOneAndUpdate(id, updated);
};

export const del = async (id: String) => {
  return await recipeModel.findOneAndRemove(id);
};
