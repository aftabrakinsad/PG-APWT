import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { DatabaseModule } from 'src/Database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/Database/admin.entity';
import { User } from 'src/Database/user.entity';
import { UserService } from 'src/user/user.service';
import { UserController } from 'src/user/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Admin, User]), DatabaseModule ],
  controllers: [AdminController, UserController],
  providers: [AdminService, UserService]
})
export class AdminModule {}