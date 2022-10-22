const { getConnection } = require("../database/connection");
const { generateToken } = require("../helpers/handler.jwt");

validarUsuario = async (req, res) => {
  const login = req.body;

  //Consultar el usuario en la BD
  const connection = await getConnection();
  const response = await connection
    .request()
    .input("usuario", login.usuario)
    .input("password", login.password)
    .query("SELECT * FROM LoginUsuario WHERE Usuario = @usuario AND Password = @password");

  var resultado = response.recordset[0];

  //Si el usuario existe
  if (resultado) {
    const token = generateToken({
      id: resultado.Usuario,
      name: resultado.Rol,
      email: resultado.Email
    });

    res.send({ token });
  } else {
    res.status(403).send({ error: "Credenciales invalidas" });
  }
};

module.exports = {
  validarUsuario,
};
