import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Nodemailer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    subject: string;
}