// routes/correo.js
const express = require('express');
const router = express.Router(); //aplicacion ruta para poder ocupar defirente metodos (GET, POST, PUT DELETE)

const { enviarCorreo } = require('../controllers/correoController'); //importa el metodo exacto para ocupar de controller

router.post('/enviar', enviarCorreo); //ruta secuandaria para los metodos a utilizar (api/correo/enviar) en este caso, utilizando enviarCorreo

module.exports = router; //exportacion del metodo creado