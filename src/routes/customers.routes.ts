import { Router } from "express";
import multer from "multer";
import createCustomerController from "../modules/customers/useCases/createCustomer";
import listCustomersController from "../modules/customers/useCases/listCustomers";
import deleteCustomerController from "../modules/customers/useCases/deleteCustomer";
import updateCustomerController from "../modules/customers/useCases/updateCustomer";
import importCustomersController from "../modules/customers/useCases/importCustomers";

const customersRoutes = Router();
const upload = multer({dest: "./temp"});

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

customersRoutes.post("/import", upload.single("file"), (request, response) => {
    importCustomersController().handle(request, response);
})

export { customersRoutes };