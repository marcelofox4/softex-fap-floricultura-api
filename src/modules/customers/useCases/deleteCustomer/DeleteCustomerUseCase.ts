import { ICustomersRepository } from "../../repositories/ICustomersRespositoy";

class DeleteCustomerUseCase {

    constructor(private customersRepository: ICustomersRepository) {}

    async execute( cpf : string): Promise<void> {

        const customerAlreadyExists = await this.customersRepository.findByCpf(cpf);

        if(!customerAlreadyExists) {
            throw new Error("Customer does not exist");
        }

        await this.customersRepository.delete(cpf);
    }
}

export { DeleteCustomerUseCase };