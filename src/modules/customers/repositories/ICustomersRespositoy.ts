import { Customer } from "../entities/Customer";

interface ICreateCustomerDTO {
    name: string;
    cpf: string;
    email?: string;
    phoneNumber: string;
    address: string;
}

interface IUpdateCustomerDTO {
    cpf: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
}

interface ICustomersRepository {

    create({ name, cpf, email, phoneNumber, address }: ICreateCustomerDTO): Promise<void>;

    list(): Promise<Customer[]>;

    findByCpf(cpf: string): Promise<Customer>;

    delete(cpf: string): Promise<void>;

    update({ cpf, email, phoneNumber, address }: IUpdateCustomerDTO): Promise<void>;

}

export { ICreateCustomerDTO, IUpdateCustomerDTO, ICustomersRepository }