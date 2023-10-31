import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustomers1698754206864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( 
            new Table({
                name: "customers",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                        isNullable: false,
                    },
                    {
                        name: "name",
                        type: "varchar(50)",
                        isNullable: false,
                    },
                    {
                        name: "cpf",
                        type: "varchar(11)",
                        isNullable: false,
                    },
                    {
                        name: "email",
                        type: "varchar(50)",
                    },
                    {
                        name: "phoneNumber",
                        type: "varchar(11)",
                        isNullable: false,
                    },
                    {
                        name: "address",
                        type: "varchar(250)",
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers");
    }

}
