import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const createUserToken = (user: object) => {
  const token = jwt.sign({ user }, `${process.env.JWT_SECRET}`, {
    expiresIn: "10h",
  });
  return { auth_token: token };
};
