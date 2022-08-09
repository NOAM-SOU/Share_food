import userInfoModel from "../models/userInfo";
import { UserInfo } from "../../interfaces/interfaces";

export const create = async (user: UserInfo) => {
  return await userInfoModel.create(user);
};

export const read = async () => {
  return await userInfoModel.find();
};

export const readOne = async (id: String) => {
  return await userInfoModel.findOne(id);
};

export const update = async (id: String, updated: Object) => {
  return await userInfoModel.findOneAndUpdate(id, updated);
};

export const del = async (id: String) => {
  return await userInfoModel.findOneAndRemove(id);
};
