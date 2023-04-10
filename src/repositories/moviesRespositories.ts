import { QueryResult } from "pg";
import { db } from "config/database";
import { MovieObject, MovieObjectEnti } from "protocols";

async function findByName(movie_name: string): Promise<QueryResult> {
  return await db.query(
    `    
      SELECT * FROM movies WHERE movie_name =$1
    `,
    [movie_name]
  );
}

async function findById(id: string): Promise<QueryResult> {
  return await db.query(
    `    
      SELECT * FROM movies WHERE id =$1
    `,
    [id]
  );
}

async function create(movie: MovieObject) {
  await db.query(
    `
          INSERT INTO movies (movie_name, director, year)
          VALUES ($1, $2, $3)
      `
    [movie.movie_name, movie.director, movie.year]
  );
}

async function findAllMovies(): Promise<QueryResult<MovieObjectEnti>> {
  return await db.query(
    `    
      SELECT * FROM movies
    `
  );
}

async function deleteMovie(id: string): Promise<QueryResult> {
  return await db.query(
    `    
      DELETE FROM movies WHERE id =$1
    `,
    [id]
  );
}

async function tickMovie(id: string): Promise<QueryResult> {
  return await db.query(
    `    
      UPDATE movies
      SET watched = 'true'
      WHERE id = $1;
    `,
    [id]
  );
}

export default {
  findByName,
  findById,
  create,
  findAllMovies,
  deleteMovie,
  tickMovie
}