import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Projeto{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    link: string

    @Column()
    image: string

}