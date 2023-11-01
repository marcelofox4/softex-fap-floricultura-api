import { DeleteCustomerUseCase } from "./DeleteCustomerUseCase";
import { Request, Response } from "express";


class DeleteCustomerController {

    constructor(private deleteCustomerUseCase: DeleteCustomerUseCase) {}

    async handle(request: Request, response: Response): Promise<void> {

        const cpf = request.params.cpf;

        try {
            await this.deleteCustomerUseCase.execute(cpf);
        } catch (error) {
            console.log(error)
            response.status(400).json({message: "Customer does not exist"});
        }

        response.status(200).send();
    }
}

export { DeleteCustomerController };
