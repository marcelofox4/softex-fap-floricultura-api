import { ImportCustomersUseCase } from "./ImportCustomersUseCase";
import { ImportCustomersController } from "./ImportCustomersController";
import { CustomersRepository } from "../../repositories/implementation/CustomersRepository";


export default (): ImportCustomersController => {

    const customersRepository = new CustomersRepository();

    const importCustomersUseCase = new ImportCustomersUseCase(customersRepository);

    const importCustomersController = new ImportCustomersController(importCustomersUseCase);
    
    return importCustomersController;
}

