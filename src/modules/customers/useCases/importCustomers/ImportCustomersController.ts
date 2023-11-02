import { Request, Response } from "express";
import { ImportCustomersUseCase } from "./ImportCustomersUseCase";


class ImportCustomersController {

    constructor(private importCustomersUseCase: ImportCustomersUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        this.importCustomersUseCase.execute(file);

        return response.status(201).send();
    }
}

export { ImportCustomersController }