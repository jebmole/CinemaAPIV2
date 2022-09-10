const { getConnection } = require("../database/connection");

obtenerPeliculas = async (req, res) => {
  const connection = await getConnection();
  const response = await connection.request().query("SELECT * FROM Pelicula");
  res.send(response.recordset);
};

obtenerPeliculaPorId = async (req, res) => {
  const id = req.params.id;
  const connection = await getConnection();
  const response = await connection
    .request()
    .input("id", id)
    .query("SELECT * FROM Pelicula WHERE IdPelicula = @id");

  res.send(response.recordset[0]);
};

insertarPelicula = async (req, res) => {
  const pelicula = req.body;

  const connection = await getConnection();
  await connection
    .request()
    .input("nombre", pelicula.nombre)
    .input("sipnosis", pelicula.sipnosis)
    .input("genero", pelicula.genero)
    .input("duracion", pelicula.duracion)
    .query(
      "INSERT INTO Pelicula(Nombre, Sipnosis, Genero, Duracion) VALUES (@nombre, @sipnosis, @genero, @duracion)"
    );

  res.send(pelicula);
};

actualizarPelicula = async (req, res) => {
  const pelicula = req.body;
  const id = req.params.id;
  const connection = await getConnection();

  await connection
    .request()
    .input("id", id)
    .input("nombre", pelicula.nombre)
    .input("sipnosis", pelicula.sipnosis)
    .input("genero", pelicula.genero)
    .input("duracion", pelicula.duracion)
    .query(
      "UPDATE Pelicula SET Nombre= @nombre, Sipnosis=@sipnosis, Genero = @genero, Duracion = @duracion WHERE IdPelicula = @id"
    );

  res.send(pelicula);
};

eliminarPelicula = async (req, res) => {
  const id = req.params.id;
  const connection = await getConnection();
  await connection
    .request()
    .input("id", id)
    .query("DELETE FROM Pelicula WHERE IdPelicula = @id");

  res.send({ eliminado : true});
};

module.exports = {
  obtenerPeliculas,
  obtenerPeliculaPorId,
  insertarPelicula,
  actualizarPelicula,
  eliminarPelicula,
};
