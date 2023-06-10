import { Request, Response } from 'express';
import { Project } from '@models/Projeto';
import { Citi, Crud } from '../global'

export default class projectController implements Crud{

    async create(req:Request, res:Response){
        const {title, description, image} = req.body;

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image);
        if(isAnyUndefined) return res.status(400).send();

        const newProject = { title, description, image };
        const {httpStatus, message} = await Citi.insertIntoDatabase(Project, newProject);

        return res.status(httpStatus).send({ message });
    }

    async get(req:Request, res:Response){
        const {httpStatus, values: Projects} = await Citi.getAll(Project)
        return res.status(httpStatus).send({ Projects })
    }

    async delete(req:Request, res:Response){
        const{ id } = req.params
        const{ value: projectFound, message } = await Citi.findByID(Project, id)

        if(!projectFound) return res.status(400).send({ message })

        const {httpStatus, messageFromDelete} = await Citi.deleteValue( Project,projectFound )
        return res.status(httpStatus).send({ messageFromDelete })
    }

    async update(req:Request, res:Response){
        const{ id } = req.params
        const{ title, description, image } = req.body

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image, id)
        if(isAnyUndefined) return res.status(400).send()

        const projectUpdated = {title, description, image}
        const{ httpStatus, messageFromUpdate } = await Citi.updateValue(Project, id, projectUpdated)

        return res.status(httpStatus).send({messageFromUpdate})
    }

}