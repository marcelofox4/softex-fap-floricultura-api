import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";


class CreateCustomerController {

    constructor(private createCustomerUseCase: CreateCustomerUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, cpf, email, phoneNumber, address } = request.body;

        try {
            await this.createCustomerUseCase.execute({ name, cpf, email, phoneNumber, address });
        } catch (error) {
            console.log(error)
            response.status(400).json({message: "Customer Already exists"});
        }
        
        return response.status(201).send();
    }

}

export { CreateCustomerController };