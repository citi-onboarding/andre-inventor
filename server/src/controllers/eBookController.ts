import { Citi, Crud } from "src/global"
import { Request, Response } from "express"
import { eBook } from "@models/eBook"

export default class eBookController implements Crud {
    //Create
    async create(req: Request, res: Response) {
        const { title, subtitle, description, buttonTitle, image } = req.body

        const isAnyUndefined = Citi.areValuesUndefined(title, subtitle, description, buttonTitle, image)
        if (isAnyUndefined) return res.status(400).send()

        const neweBook = { title, subtitle, description, buttonTitle, image }

        const { httpStatus, message } = await Citi.insertIntoDatabase(eBook, neweBook)

        return res.status(httpStatus).send({ message })
    }

    //Read
    async get(req: Request, res: Response) {
        const { httpStatus, values: eBooks } = await Citi.getAll(eBook)
        return res.status(httpStatus).send({ eBooks })
    }

    //Update
    async update(req: Request, res: Response) {
        const { id } = req.params
        const { title, subtitle, description, buttonTitle, image } = req.body

        const isAnyUndefined = Citi.areValuesUndefined(title, subtitle, description, buttonTitle, image, id)
        if (isAnyUndefined) return res.status(400).send()

        const eBookAtualizada = { title, subtitle, description, buttonTitle, image }

        const { httpStatus, messageFromUpdate } = await Citi.updateValue(eBook, id, eBookAtualizada)
        return res.status(httpStatus).send({ messageFromUpdate })
    }

    //Delete
    async delete(req: Request, res: Response) {
        const { id } = req.params
        const { value: eBookFound, message } = await Citi.findByID(eBook, id)

        if (!eBookFound) return res.status(400).send({ message })

        const { httpStatus, messageFromDelete } = await Citi.deleteValue(eBook, eBookFound)
        return res.status(httpStatus).send({ messageFromDelete })
    }
}
