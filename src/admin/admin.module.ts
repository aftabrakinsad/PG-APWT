import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { DatabaseModule } from 'src/Database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/Database/admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Admin]), DatabaseModule ],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
