import { Response, Request, NextFunction } from "express";
import httpStatus from "http-status";
import { MovieObject } from "protocols";
import moviesServices from "services/moviesServices";

async function create(req: Request, res: Response, next: NextFunction) {

    const movie = req.body as MovieObject

    try {

        await moviesServices.create(movie)
        return res.sendStatus(httpStatus.CREATED)

    } catch (err) {
        next(err);
    }

}

async function findAllMovies(req: Request, res: Response, next: NextFunction) {

    try {

        const allMovies = await moviesServices.findAllMovies()
        return res.send(allMovies).status(httpStatus.OK);

    } catch (err) {
        next(err);
    }

}


async function deleteMovie(req: Request, res: Response, next: NextFunction) {

    const id = req.params.id as string

    try {

        await moviesServices.deleteMovie(id)
        return res.sendStatus(httpStatus.OK);

    } catch (err) {
        next(err);
    }

}

async function tickMovie(req: Request, res: Response, next: NextFunction) {

    const id = req.params.id as string

    try {

        await moviesServices.tickMovie(id)
        return res.sendStatus(httpStatus.OK);

    } catch (err) {
        next(err);
    }

}

export default {
    create,
    findAllMovies,
    deleteMovie,
    tickMovie
}