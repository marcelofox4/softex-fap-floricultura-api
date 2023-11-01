import { Customer } from "../entities/Customer";

interface ICreateCustomerDTO {
    name: string;
    cpf: string;
    email?: string;
    phoneNumber: string;
    address: string;
}

interface ICustomersRepository {

    create({ name, cpf, email, phoneNumber, address }: ICreateCustomerDTO): Promise<void>;

    list(): Promise<Customer[]>;

    findByCpf(cpf: string): Promise<Customer>;

    delete(cpf: string): Promise<void>;

}

export { ICreateCustomerDTO, ICustomersRepository }