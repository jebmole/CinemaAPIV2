const { Router } = require("express");
const {
  obtenerPeliculas,
  obtenerPeliculaPorId,
  insertarPelicula,
  actualizarPelicula,
  eliminarPelicula,
} = require("../controllers/pelicula.controller");

const routes = Router();

routes.get("/", obtenerPeliculas);
routes.get("/:id", obtenerPeliculaPorId);
routes.post("/", insertarPelicula);
routes.put("/:id", actualizarPelicula);
routes.delete("/:id", eliminarPelicula);

module.exports = routes;
