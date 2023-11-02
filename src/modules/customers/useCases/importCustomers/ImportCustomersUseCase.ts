import { parse } from "csv-parse";
import fs from "fs";
import { ICustomersRepository } from "../../repositories/ICustomersRespositoy";

interface IImportCustomers {
    name: string;
    cpf: string;
    email?: string;
    phoneNumber: string;
    address: string;
}

class ImportCustomersUseCase {

    constructor(private customersRepository: ICustomersRepository) {}

    loadCustomers(file: Express.Multer.File): Promise<IImportCustomers[]> {

        return new Promise((resolve, reject) => {

            const stream = fs.createReadStream(file.path);

            const customers: IImportCustomers[] = [];

            const parseFile = parse();
    
            stream.pipe(parseFile);
    
            parseFile.on("data", async (line) => {
                const  [name, cpf, email, phoneNumber, address] = line;

                customers.push({
                    name,
                    cpf,
                    email,
                    phoneNumber,
                    address
                });
            }).on("end", () => {
                fs.promises.unlink(file.path);
                resolve(customers);
            }).on("error", (err) => {
                reject(err);
            });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        
        const categories = await this.loadCustomers(file);

        categories.map(async (customer) => {

            const { name, cpf, email, phoneNumber, address } = customer;

            const existsCustomer = await this.customersRepository.findByCpf(cpf);

            if (!existsCustomer) {
                await this.customersRepository.create({
                    name,
                    cpf,
                    email,
                    phoneNumber,
                    address
                })
            }
        })
        
    }
}

export { ImportCustomersUseCase };