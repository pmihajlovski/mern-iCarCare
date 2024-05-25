import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

declare global {
  namespace Express{
    interface Request {
      userId: string;
    }
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies["auth_token"];
  if(!token){
    return res.status(401).json({ message: "Non autorizzato" })
  }
  
  try {
    //verify that we create the token and not by someone else
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY as string)
    req.userId = (decoded as JwtPayload).userId;
    next();//Express can start to do the next thing
  } catch (error) {
    return res.status(401).json({ message: "Non autorizzato" })
  }
};

export default verifyToken;