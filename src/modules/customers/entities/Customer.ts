import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("customers")
class Customer {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 50, nullable: false })
    name: string;

    @Column("varchar", { length: 11, nullable: false })
    cpf: string

    @Column("varchar", { length: 50, nullable: true })
    email: string;

    @Column("varchar", { length: 11, nullable: false })
    phoneNumber: string;

    @Column("varchar", { length: 250, nullable: false })
    address: string;

    constructor() {};

}

export { Customer };