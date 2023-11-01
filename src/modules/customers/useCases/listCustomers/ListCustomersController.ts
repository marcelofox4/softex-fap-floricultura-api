import { ListCustomersUseCase } from "./ListCustomersUseCase";
import { Request, Response } from "express";

class ListCustomersController {

    constructor(private listCustomersUseCase: ListCustomersUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        
        const customer = await this.listCustomersUseCase.execute();

        return response.status(200).json(customer);
    }

}

export { ListCustomersController };
