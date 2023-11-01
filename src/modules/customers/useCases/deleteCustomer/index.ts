import { CustomersRepository } from "../../repositories/implementation/CustomersRepository";
import { DeleteCustomerController } from "./DeleteCustomerController";
import { DeleteCustomerUseCase } from "./DeleteCustomerUseCase";


export default (): DeleteCustomerController => {

    const customersRepository = new CustomersRepository();

    const deleteCustomerUseCase = new DeleteCustomerUseCase(customersRepository);

    const deleteCustomerController = new DeleteCustomerController(deleteCustomerUseCase);

    return deleteCustomerController;
}