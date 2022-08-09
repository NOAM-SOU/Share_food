import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) res.sendStatus(401);
  const token = header?.split(" ")[1];
  jwt.verify(`${token}`, `${process.env.JWT_SECRET}`, (err) =>
    err ? res.sendStatus(403) : next()
  );
};
