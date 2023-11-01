import { Request, Response } from "express"
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";


class UpdateCustomerController {

    constructor(private updateCustomerUseCase: UpdateCustomerUseCase) {}

    async handle(request:Request, response: Response): Promise<Response> {

        const { cpf, email, phoneNumber, address } = request.body;

        try {
            await this.updateCustomerUseCase.execute({ cpf, email, phoneNumber, address });
        } catch (error) {
            console.log(error);
            response.status(400).json({message: "Customer does not exist"});
        }
        
        return response.status(200).send();
    }
}

export { UpdateCustomerController }