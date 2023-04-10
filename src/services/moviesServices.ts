import errors from "errors";
import { MovieObject } from "protocols";
import moviesRespositories from "repositories/moviesRespositories";

async function create( movie: MovieObject) {

    const { rowCount } = await moviesRespositories.findByName(movie.movie_name);
    if (rowCount) throw errors.duplicatedMovieError(movie.movie_name)

    await moviesRespositories.create(movie);
  }

  async function findAllMovies() {

    const { rowCount,rows:[allMovies] } = await moviesRespositories.findAllMovies();
    if (!rowCount) throw errors.notFoundError()

    return allMovies;
  }

  async function deleteMovie(id : string) {

    const { rowCount } = await moviesRespositories.findById(id);
    if (!rowCount) throw errors.notFoundError()

    await moviesRespositories.deleteMovie(id);
    
  }

  async function tickMovie(id : string) {

    const { rowCount } = await moviesRespositories.findById(id);
    if (!rowCount) throw errors.notFoundError()

    await moviesRespositories.tickMovie(id);
    
  }
  export default {
    create,
    findAllMovies,
    deleteMovie,
    tickMovie
  }