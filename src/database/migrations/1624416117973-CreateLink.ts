import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLink1624416117973 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "links",
                columns: [{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }, {
                    name: "shrinked",
                    type: "varchar"
                }, {
                    name: "original",
                    type: "varchar"
                }, {
                    name: "redirections",
                    type: "int",
                    default: 0
                }, {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("links");
    }

}
