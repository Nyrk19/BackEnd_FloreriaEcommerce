import nodemailer from "nodemailer";

// Email para el registro de usuario
export const emailRegistro = async (datos) => {
    const {email, nombre, token} = datos;

    const transport = nodemailer.createTransport({
        host: process.env.MASTER_H,
        port: 465,
        secure: true,
        auth: {
          user: process.env.MASTER_EM,
          pass: process.env.MASTER_P
        }
      });

    /*const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "4c0d1dd1a6ed41",
          pass: "efdba6d2e156a6"
        }
      }); */

    console.log(email);
    // Información del email
    const info = await transport.sendMail({
        from: '"Florería Ecommerce — Administrador de la Base de Datos" <demian.oder@gmail.com>',
        to: email,
        subject: "Florería Ecommerce — Confirma tu cuenta",
        text: "Comprueba tu cuenta en Florería Ecommerce",
        /*html: `
        <p>Hola, ${nombre}, comprueba tu cuenta en Florería Ecommerce.</p>
        <p>Tu cuenta está casi lista, sólo debes comprobarla en el siguiente enlace:
        <a href="${process.env.PROJECT_URL}/api/cliente/confirmar/${token}">Comprobar cuenta</a>
        <p>Si tu no creaste esta cuenta, puedes ignorar este email.</p>
        `*/
        html: `
        <p>Hola, ${nombre}, comprueba tu cuenta en Florería Ecommerce.</p>
        <p>Tu cuenta está casi lista, tu token de acceso es: ${token}</p>
        <p>Para finalizar este proceso, sólo debes colocar el token proporcionado en el siguiente enlace: 
        <! -- <a href="${process.env.PROJECT_URL}/api/cliente/confirmar/${token}">Comfirmar cuenta</a> --></p>
        <p>Si tú no creaste esta cuenta, puedes ignorar este correo electrónico.</p>
        `
    })
}

// Email para el registro de usuario
export const emailRestablecer = async (datos) => {
  const {email, nombre, token} = datos;

  const transport = nodemailer.createTransport({
      host: process.env.MASTER_H,
      port: 465,
      secure: true,
      auth: {
        user: process.env.MASTER_EM,
        pass: process.env.MASTER_P
      }
    });

  /*const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "4c0d1dd1a6ed41",
        pass: "efdba6d2e156a6"
      }
    }); */

  console.log(email);
  // Información del email
  const info = await transport.sendMail({
      from: '"Florería Ecommerce — Administrador de la Base de Datos" <demian.oder@gmail.com>',
      to: email,
      subject: "Florería Ecommerce — Restablecer contraseña",
      text: "Restablece tu contraseña en Florería Ecommerce",
      /*html: `
      <p>Hola, ${nombre}, comprueba tu cuenta en Florería Ecommerce.</p>
      <p>Tu cuenta está casi lista, sólo debes comprobarla en el siguiente enlace:
      <a href="${process.env.PROJECT_URL}/api/cliente/confirmar/${token}">Comprobar cuenta</a>
      <p>Si tu no creaste esta cuenta, puedes ignorar este email.</p>
      `*/
      html: `
      <p>Hola, ${nombre}, restablece tu constraseña en Florería Ecommerce.</p>
      <p>Para restablecer tu contraseña, necesitarás el siguiente token: ${token}</p>
      <p>Para continuar con este proceso, sólo debes colocar el token proporcionado en el siguiente enlace: 
      <! -- <a href="${process.env.PROJECT_URL}/api/cliente/confirmar/${token}">Comfirmar cuenta</a> --></p>
      <p>Si tú no estabas a la espera de este servicio, puedes ignorar este correo electrónico.</p>
      `
  })
}
