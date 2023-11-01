import "reflect-metadata";
import { DataSource } from "typeorm";
import { CreateCustomers1698754206864 } from "./migrations/1698754206864-CreateCustomers";
import { Customer } from "../modules/customers/entities/Customer";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "dev-manager",
    password: "dev-manager",
    database: "floricultura",
    synchronize: true,
    logging: false,
    entities: [Customer],
    migrations: [CreateCustomers1698754206864],
    subscribers: [],
})