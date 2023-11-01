import { Customer } from "../../entities/Customer";
import { ICustomersRepository } from "../../repositories/ICustomersRespositoy";

class ListCustomersUseCase {

    constructor(private costumersRepository: ICustomersRepository) {}

    async execute(): Promise<Customer[]> {
        
        const customers = await this.costumersRepository.list()
        
        return customers;
    }

}

export { ListCustomersUseCase };