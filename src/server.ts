import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/data-source";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";

import { router } from "./routes";


const app = express();
const port = 3333;

app.use(express.json());

app.use(router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

AppDataSource.initialize().then(async () => {
    console.log("Database Initialize!");
    app.listen(port, () => console.log(`Server is running in port: ${port}`));
})
