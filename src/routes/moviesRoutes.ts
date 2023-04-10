import moviesControllers from "controllers/moviesControllers.js";
import { Router } from "express";
import { validateSchema } from "middlewares/schemaValidationMiddleware";
import { moviesSchemma } from "schemas/moviesSchema.js";


const moviesRoutes = Router();

moviesRoutes.post('/',validateSchema(moviesSchemma),moviesControllers.create)
moviesRoutes.get('/',moviesControllers.findAllMovies)
moviesRoutes.delete('/:id',moviesControllers.deleteMovie)
moviesRoutes.patch('/:id',moviesControllers.tickMovie)



export default moviesRoutes