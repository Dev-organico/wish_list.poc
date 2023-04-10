import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export type Error = {
  name: string;
  message: string;
  email?: string;
  movie_name?: string

}

export function handleApplicationErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err.name === "ConflictError" || err.name === "DuplicatedEmailError") {
    return res
      .status(httpStatus.CONFLICT)
      .send({ message: err.message, email: err.email });
  }

  if (err.name === "DuplicatedMovieError") {
    return res
      .status(httpStatus.CONFLICT)
      .send({ message: err.message, movie_name: err.movie_name });
  }



  if (err.name === "InvalidCredentialsError") {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === "InvalidDataError") {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  if (err.name === "UnauthorizedError") {
    return res.status(httpStatus.UNAUTHORIZED).send({
      message: err.message,
    });
  }

  if (err.name === "NotFoundError") {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: "InternalServerError",
    message: "Internal Server Error",
  });
}