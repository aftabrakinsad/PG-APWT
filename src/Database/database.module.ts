import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Admin } from "src/Database/admin.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'heil',
            database: 'APWTDB',
            entities: [Admin],
            synchronize: true,
        }),
    ],
})
export class DatabaseModule { }