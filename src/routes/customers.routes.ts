import { Router } from "express"
import createCustomerController from "../modules/customers/useCases/createCustomer";
import listCustomersController from "../modules/customers/useCases/listCustomers";
import deleteCustomerController from "../modules/customers/useCases/deleteCustomer";
import updateCustomerController from "../modules/customers/useCases/updateCustomer";

const customersRoutes = Router();

customersRoutes.post("/", (request, response) => {
    createCustomerController().handle(request, response);
});

customersRoutes.get("/", (request, response) => {
    listCustomersController().handle(request, response);
})

customersRoutes.delete("/:cpf", (request, response) => {
    deleteCustomerController().handle(request, response);
})

customersRoutes.put("/", (request, response) => {
    updateCustomerController().handle(request, response);
})

export { customersRoutes };