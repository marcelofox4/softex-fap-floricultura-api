import { ICustomersRepository } from "../../repositories/ICustomersRespositoy";

interface IResquest {
    cpf: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
}

class UpdateCustomerUseCase {

    constructor(private customersRepository: ICustomersRepository) {}

    async execute({ cpf, email, phoneNumber, address }: IResquest) {

        const customerAlreadyExists = await this.customersRepository.findByCpf(cpf);

        if(!customerAlreadyExists) {
            throw new Error("Customer does not exist");
        }

        await this.customersRepository.update({ cpf, email, phoneNumber, address });
    }
}

export { UpdateCustomerUseCase }