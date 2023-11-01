import { Router } from "express"
import createCustomerController from "../modules/customers/useCases/createCustomer";



const customersRoutes = Router();

customersRoutes.post("/", (request, response) => {
    createCustomerController().handle(request, response);
});

export { customersRoutes };