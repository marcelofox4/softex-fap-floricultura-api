import { CustomersRepository } from "../../repositories/implementation/CustomersRepository";
import { UpdateCustomerController } from "./UpdateCustomerController";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";


export default (): UpdateCustomerController => {

    const customersRepository = new CustomersRepository();

    const updateCustomerUseCase = new UpdateCustomerUseCase(customersRepository);

    const updateCustomerController = new UpdateCustomerController(updateCustomerUseCase);

    return updateCustomerController;
}