const nodemailer = require("nodemailer"); //dependencia necesaria para poder enviar correos desde un email definido hacia un direccion definida

exports.enviarCorreo = async (req, res) =>{
     const { correo, object, texto } = req.body; //extraer del body los objetos con name=x

  try {
    const transporte = nodemailer.createTransport({ 
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS      
      }
    }); //se crea la direccion y la forma en la que se va a enviar el correo (mas bien llamado 'transport')

    const configuracionCorreo = {
      from: 'aharonalfaro5102@gmail.com',
      to: 'aharonalfaro5102@gmail.com', 
      subject: `Nuevo mensaje de ${object}`,
      text: `Correo del usuario: ${correo}\n\nMensaje:\n${texto}`,
      replyTo: correo
    }; //correo el cual va a llevar los datos extraidos del body.

    await transporte.sendMail(configuracionCorreo); //enviar correo con la configuracion creaada anteriormente
    // 'await' para asegurar que se envie el email antes de seguir con el codigo.

    res.json({ ok: true, mensaje: 'Correo enviado correctamente 🚀' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, mensaje: 'Error al enviar el correo' });
  }
}; //Verificacion de errores.