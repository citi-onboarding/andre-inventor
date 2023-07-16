import { MailServer } from "src/services/MailServer";
import dotenv from 'dotenv';
import { Citi, Crud } from "src/global";
import { Request, Response } from "express";
import { Nodemailer } from "@models/nodemailer";

dotenv.config();

const SendMail = async (request: Request, response: Response) => {
  try {
    const {name, email, phone, message } = request.body;

    await MailServer({
      destinationUser: process.env.EMAIL_WILL_RECEIVE,
      subjectText: `Formulário de contato do site | ${name}`,
      htmlOption: `<p>
        Um usuário entrou em contato! Esse usuário tem o nome ${name}, email: ${email}, telefone ${phone}. 
        Esse usuário deixou a mensagem: ${message}
      </p>
      `
    })

    return response.status(200).send({
      answer: "Enviado."
    })

  } catch(error) {
    return response.status(500).send({
      answer: "Desculpe, houve um erro."
    })
  }
}

export {
  SendMail
}