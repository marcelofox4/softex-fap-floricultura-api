import { Router } from "express"
import createCustomerController from "../modules/customers/useCases/createCustomer";
import listCustomersController from "../modules/customers/useCases/listCustomer"

const customersRoutes = Router();

customersRoutes.post("/", (request, response) => {
    createCustomerController().handle(request, response);
});

customersRoutes.get("/", (request, response) => {
    listCustomersController().handle(request, response);
})

export { customersRoutes };