import { Router } from "express";
import moviesRoutes from "./moviesRoutes";



const routes = Router();

routes.use("/movies", moviesRoutes);
;


export default routes;