//dependencias
const express = require("express");
const router = require("./router/correo");
const path = require("path");
require('dotenv').config() //Para poder guardar contraseñas, TOKEN, datos privados, etc, y hacer uso de ellas indirectamente

const app = express(); //Crea una aplicacion express
app.use(express.urlencoded({ extended: false})); //permite leer formularios simples del Frontend
app.use(express.json()); //permite que la aplicacion lea en formato json del body

app.use(express.static(path.join(__dirname, '../Frontend')));//Especifica de donde se van a leer los datos (index.html)

app.use("/api/correo", router); //ruta principal para cualquier metodo (api/correo/xxx)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`)); //hace que la app escuche un puerto especifico;