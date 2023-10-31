import express  from "express";
import "reflect-metadata";
import "./database/index";


const app = express();
const port = 3333;




app.listen(port, () => console.log(`Server is running in port: ${port}`));