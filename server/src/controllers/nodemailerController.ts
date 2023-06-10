import { Citi, Crud } from "src/global";
import { Request, Response } from "express";
import { Nodemailer } from "@models/nodemailer";

export default class NodemailerController implements Crud {
  // Create
  async create(req: Request, res: Response) {
    const { name, email, phone, subject } = req.body;

    const isAnyUndefined = Citi.areValuesUndefined(name, email, phone, subject);
    if (isAnyUndefined) return res.status(400).send();

    const newNodemailer = { name, email, phone, subject };

    const { httpStatus, message } = await Citi.insertIntoDatabase(
      Nodemailer,
      newNodemailer
    );

    return res.status(httpStatus).send({ message });
  }

  // Read
  async get(req: Request, res: Response) {
    const { httpStatus, values: nodemailers } = await Citi.getAll(Nodemailer);
    return res.status(httpStatus).send({ nodemailers });
  }

  // Update
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, phone, subject } = req.body;

    const isAnyUndefined = Citi.areValuesUndefined(
      name,
      email,
      phone,
      subject,
      id
    );
    if (isAnyUndefined) return res.status(400).send();

    const nodemailerAtualizada = { name, email, phone, subject };

    const { httpStatus, messageFromUpdate } = await Citi.updateValue(
      Nodemailer,
      id,
      nodemailerAtualizada
    );
    return res.status(httpStatus).send({ messageFromUpdate });
  }

  // Delete
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const { value: nodemailerFound, message } = await Citi.findByID(
      Nodemailer,
      id
    );

    if (!nodemailerFound) return res.status(400).send({ message });

    const { httpStatus, messageFromDelete } = await Citi.deleteValue(
      Nodemailer,
      nodemailerFound
    );
    return res.status(httpStatus).send({ messageFromDelete });
  }
}