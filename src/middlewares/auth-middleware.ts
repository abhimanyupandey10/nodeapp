import { NextFunction, Request, Response } from "express";

export class AuthMiddleWare {
  checkLogged(req: Request, res: Response, next: NextFunction) {
    console.log("Are you logged in");
    req.body = {};
    req.body.currentDate = new Date();
    next();
  }
}
