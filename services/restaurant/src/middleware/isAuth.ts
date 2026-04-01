import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
// import { IUSER } from "../model/User.js"


export interface IUSER {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
    restaurantId: string;
}

export interface AuthenticatedRequest extends Request {
    user? : IUSER | null;
}

export const isAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction)
: Promise<void> => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({
                message: "Please Login - No auth headers"
            });
            return;
        }
        const token = authHeader.split(" ")[1];
        if(!token) {
             res.status(401).json({
                message: "Please Login - Token Missing"
            });
        }
        const decodedValue = jwt.verify(token as any, process.env.JWT_SEC as string) as JwtPayload;
        
        if(!decodedValue || !decodedValue.user) {
             res.status(401).json({
                message: "Invalid Token"
            });
            return
        } 
        req.user  = decodedValue.user;
        
        next();
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message: "Please Login - jwt error"
        })
    } 
}



export const isSeller = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = req.user;

  if (user && user.role !== "seller") {
    res.status(401).json({
      message: "You are not authorized seller",
    });
    return;
  }

  next();
};