import { Customer } from "../../entities/Customer";
import { ICreateCustomerDTO, ICustomersRepository } from "../ICustomersRespositoy";
import { AppDataSource } from "../../../../database/data-source";
import { Repository } from "typeorm";

class CustomersRepository implements ICustomersRepository {
    
    private repository: Repository<Customer>;

    constructor() {
        this.repository = AppDataSource.getRepository(Customer);
    }
    
    async create({ name, cpf, email, phoneNumber, address }: ICreateCustomerDTO): Promise<void> {
        const customer = this.repository.create({
            name,
            cpf,
            email,
            phoneNumber,
            address,
        });

        await this.repository.save(customer);
    }
    
    async list(): Promise<Customer[]> {
        const customers = await this.repository.find();
        return customers;
    }
    
    async findByCpf(cpf: string): Promise<Customer> {
        const customer = await this.repository.findOne({ where: { cpf } });
        return customer;
    }
}
export { CustomersRepository };