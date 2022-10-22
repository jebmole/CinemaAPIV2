const { Router } = require("express");
const { validarUsuario } = require("../controllers/login.controller");

const routes = Router();

routes.post("/", validarUsuario);

module.exports = routes;
