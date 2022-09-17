const { Router } = require("express");
const { generateToken } = require("../helpers/handler.jwt");

const routes = Router();

routes.post("/", (req, res)=> {
    const login = req.body;
    if(login.usuario === "admin" && login.password === "abc123"){
        const token = generateToken({
            id: 1,
            name: "Administrador"
        });

        res.send({ token });
    }
    else{
        res.status(403).send({ error: "Credenciales invalidas"});
    }

});

module.exports = routes;
