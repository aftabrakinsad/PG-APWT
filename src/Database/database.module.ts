import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Admin } from "src/Database/admin.entity";
import { User } from "./user.entity";

@Module({
    imports: [

        // Different ways to connect to database -1


        // TypeOrmModule.forRoot({
        //     type: 'postgres',
        //     host: 'localhost',
        //     port: 5432,
        //     username: 'postgres',
        //     password: 'heil',
        //     database: 'APWTDB',
        //     entities: [Admin],
        //     synchronize: true,
        // }),

        
        // Different ways to connect to database -2 (Most used way for production and local) 
        TypeOrmModule.forRootAsync({
        imports: [ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ".local.env",
            // envFilePath: ".production.env",
        })],
        useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('DB_HOST'),
            port: +configService.get('DB_PORT'),
            username: configService.get('DB_USERNAME'),
            password: configService.get('DB_PASSWORD'),
            database: configService.get('DB_DATABASE'),
            synchronize: configService.get<boolean>('DB_SYNC'),
            entities: [Admin, User],
            // logging: true
        }),
        inject: [ConfigService],
        })
    ],
    controllers: [],
    providers: [],
})
export class DatabaseModule { }