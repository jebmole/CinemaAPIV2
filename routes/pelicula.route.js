const { Router } = require("express");
const {
  obtenerPeliculas,
  obtenerPeliculaPorId,
  insertarPelicula,
  actualizarPelicula,
  eliminarPelicula,
} = require("../controllers/pelicula.controller");
const { insertarPeliculaValidator } = require('../validators/pelicula.validator')

const routes = Router();

routes.get("/", obtenerPeliculas);
routes.get("/:id", obtenerPeliculaPorId);
routes.post("/", insertarPeliculaValidator, insertarPelicula);
routes.put("/:id", actualizarPelicula);
routes.delete("/:id", eliminarPelicula);

module.exports = routes;
