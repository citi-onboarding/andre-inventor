import { Citi, Crud } from "src/global"
import { Request, Response } from "express"
import { AboutMe } from "@models/AboutMe"
import { isatty } from "tty"

export default class AboutMeController implements Crud{
//Create
    async create(req: Request, res: Response){
        const{ title, description, image } = req.body

        const isAnyUndefined = Citi.areValuesUndefined(title, description, image)
        if(isAnyUndefined) return res.status(400).send()

        const newAboutMe = {title , description, image}

        const { httpStatus, message } = await Citi.insertIntoDatabase(AboutMe, newAboutMe)

        return res.status(httpStatus).send({ message })
    }

    async get(req:Request, res:Response){
        const {httpStatus, values: AboutMes} = await Citi.getAll(AboutMe)
        return res.status(httpStatus).send({ AboutMes })
    }

    async delete(req:Request, res:Response){
        const { id } = req.params
        const{ value:AboutMeFound, message } = await Citi.findByID(AboutMe, id)

        if(!AboutMeFound) return res.status(400).send({ message })
        
        const { httpStatus, messageFromDelete } = await Citi.deleteValue(AboutMe, AboutMeFound)
        return res.status(httpStatus).send({ messageFromDelete })
    }

    async update(req:Request, res:Response){
        const { id } = req.params
        const { title, description, image } = req.body

        const isAnyUndefined = Citi.areValuesUndefined(title,description,image)

        if(isAnyUndefined) return res.status(400).send()

        const AboutMeAtualizada = { title, description, image }
        const{httpStatus, messageFromUpdate} = await Citi.updateValue(AboutMe,id,AboutMeAtualizada)

        return res.status(httpStatus).send({ messageFromUpdate })
    }
}