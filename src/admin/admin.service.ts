import { Repository } from 'typeorm';
import { Admin } from 'src/Database/admin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminDto } from 'src/DTOs/admin.dto';
import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/DTOs/user.dto';
import { User } from 'src/Database/user.entity';

@Injectable()
export class AdminService {
    [x: string]: any;
    constructor (@InjectRepository(Admin) private readonly adminRepo : Repository<Admin>) {
    }

    addAdmin(admindto: AdminDto) : Promise<Admin> {
        let admin : Admin = new Admin();
        admin.a_name = admindto.a_name;
        admin.email = admindto.email;
        admin.password = admindto.password;
        return this.adminRepo.save(admin);
    }

    getAdmins() : Promise<Admin[]> {
        return this.adminRepo.find();
    }

    //error here
    // findOne(a_id: number) {
    //     return this.adminRepo.findOne(a_id);
    // }

    deleteAdmin(a_id : number) {
        return this.adminRepo.delete(a_id);
    }

    updateAdmin(a_id : number, admindto : AdminDto) {
        let admin : Admin = new Admin();
        admin.a_name = admindto.a_name;
        admin.email = admindto.email;
        admin.password = admindto.password;
        return this.adminRepo.update(a_id, admin);
    }

    // adminadduser(userdto: UserDto) : Promise<User> {
    //     let user : User = new User();
    //     user.u_name = userdto.u_name;
    //     user.email = userdto.email;
    //     user.password = userdto.password;
    //     return this.userRepo.save(user);
    // }
}
