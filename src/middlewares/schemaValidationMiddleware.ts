import err from "../errors/index.js";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { ObjectSchema } from "joi";


export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (!error) {
      next();
    } else {
      res.status(httpStatus.BAD_REQUEST).send(err.invalidDataError(error.details.map((d) => d.message)));
    }
  };
}


