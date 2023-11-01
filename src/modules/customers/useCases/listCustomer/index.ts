import { CustomersRepository } from "../../repositories/implementation/CustomersRepository";
import { ListCustomersController } from "./ListCustomersController";
import { ListCustomersUseCase } from "./ListCustomersUseCase";

export default (): ListCustomersController => {

    const customersRepository = new CustomersRepository();

    const listCustomersUseCase = new ListCustomersUseCase(customersRepository);

    const listCustomersController = new ListCustomersController(listCustomersUseCase);

    return listCustomersController;
}

