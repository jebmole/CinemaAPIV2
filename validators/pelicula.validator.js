const { check, validationResult } = require('express-validator')

const insertarPeliculaValidator = [
    check("nombre")
        .exists()
            .withMessage("Debe especificar el campo: nombre")
        .notEmpty()
            .withMessage("El campo nombre es requerido")
        .isLength({ min: 3, max: 10})
            .withMessage("El nombre debe tener una longitud entre 3 y 10 caracteres"),

    check("sipnosis")
        .exists()
            .withMessage("Debe especificar el campo: sipnosis")
        .notEmpty()
            .withMessage("El campo sipnosis es requerido")
        .isLength({ min: 5, max: 20})
            .withMessage("La sipnosis debe tener una longitud entre 5 y 20 caracteres"),

    check("genero")
        .exists()
            .withMessage("Debe especificar el campo: genero")
        .notEmpty()
            .withMessage("El campo genero es requerido"),

    check("duracion")
        .exists()
            .withMessage("Debe especificar el campo: duracion")
        .isNumeric()
            .withMessage("El campo duracion debe ser un valor entero"),    

    (req, res, next) =>{

        try {
            validationResult(req).throw();
            next()
        } catch (err) {
            res.status(400);
            res.send({ error: err.errors })
        }
    }
]

module.exports = {
    insertarPeliculaValidator
}