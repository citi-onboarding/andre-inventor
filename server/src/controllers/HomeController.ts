import { Citi, Crud } from "src/global"
import { Request, Response } from "express"
import { Home } from "@models/Home"

export default class HomeController implements Crud {
//Create
    async create (req: Request, res : Response){
        const{title, subtitle} = req.body

        const isAnyUndefined = Citi.areValuesUndefined(title, subtitle)
        if(isAnyUndefined) return res.status(400).send()

        const newHome = {title, subtitle}

        const { httpStatus, message } = await Citi.insertIntoDatabase(Home, newHome)

        return res.status(httpStatus).send({ message })

    }
//Read
    async get(req:Request, res:Response){
        const{ httpStatus, values:Homes } = await Citi.getAll(Home)
        return Response.status(httpStatus).send({ Homes })
    }
//Update
    async update(req: Request, res: Response){

        const{ id } = req.params
        const{ title, subtitle } = req.body

        const isAnyUndefined = Citi.areValuesUndefined(title, subtitle, id)
        if(isAnyUndefined) return res.status(400).send()

        const HomeAtualizada = { title, subtitle }

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(Home, id, HomeAtualizada)
        return res.status(httpStatus).send({ messageFromUpdate })

    }
//Delete
    async delete(req:Request, res:Response){
        const{ id } = req.params
        const { value: HomeFound, message } = await Citi.findByID(Home, id)

        if(!HomeFound) return res.status(400).send({ message })

        const { httpStatus, messageFromDelete} = await Citi.deleteValue(Home, HomeFound)
        return res.status(httpStatus).send({ messageFromDelete })
    }
}
