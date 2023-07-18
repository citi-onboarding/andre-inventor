import { Request, Response } from 'express';
import { Projeto } from '@models/Projects';
import { Citi, Crud } from '../global'

export default class projectsController implements Crud{

    async create(req:Request, res:Response){
        const {title, description, image, link} = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image, link);
        if(isAnyUndefined) return res.status(400).send();

        const newProjeto = { title, description, image, link };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Projeto, newProjeto);

        return res.status(httpStatus).send({ message });
    }

    async get(req:Request, res:Response){
        const {httpStatus, values: Projetos} = await Citi.getAll(Projeto)
        return res.status(httpStatus).send({ Projetos })
    }

    async delete(req:Request, res:Response){
        const{ id } = req.params
        const{ value: projectFound, message } = await Citi.findByID(Projeto, id)

        if(!projectFound) return res.status(400).send({ message })

        const {httpStatus, messageFromDelete} = await Citi.deleteValue( Projeto,projectFound )
        return res.status(httpStatus).send({ messageFromDelete })
    }

    async update(req:Request, res:Response){
        const{ id } = req.params
        const{ title, description, image, link } = req.body

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image, link, id)
        if(isAnyUndefined) return res.status(400).send()

        const projectUpdated = {title, description, image, link}
        const{ httpStatus, messageFromUpdate } = await Citi.updateValue(Projeto, id, projectUpdated)

        return res.status(httpStatus).send({messageFromUpdate})
    }

}