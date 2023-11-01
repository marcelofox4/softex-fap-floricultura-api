import { ICustomersRepository } from "../../repositories/ICustomersRespositoy";

interface IResquest {
    name: string;
    cpf: string;
    email?: string;
    phoneNumber: string;
    address: string;
}

class CreateCustomerUseCase {

    constructor(private customersRepository: ICustomersRepository) {}

    async execute({ name, cpf, email, phoneNumber, address }: IResquest): Promise<void> {
        
        const customerAlreadyExists = await this.customersRepository.findByCpf(cpf);

        if (customerAlreadyExists) {
            throw new Error("Customer Already exists");
        }

        this.customersRepository.create({
            name,
            cpf,
            email,
            phoneNumber,
            address
        });
    }

}

export { CreateCustomerUseCase };