import { Request, NextFunction, Response } from "express";

// Define an error handler middleware
export const NotFound = (err: any, req:Request, res:Response, next:NextFunction) => {
    if (err.status === 404) {
      res.status(404).json({ error: 'Not Found' });
    } else {
      next(err);
    }
}