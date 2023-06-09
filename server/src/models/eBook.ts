import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class eBook {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    subtitle: string

    @Column()
    description: string

    @Column()
    buttonTitle: string

    @Column()
    image: string
}