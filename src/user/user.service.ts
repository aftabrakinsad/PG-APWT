import { Injectable } from '@nestjs/common';
import { User } from 'src/Database/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from 'src/DTOs/user.dto';

@Injectable()
export class UserService {
    constructor (@InjectRepository(User) private readonly userRepo : Repository<User>) {
    }

    addUser(userdto: UserDto) : Promise<User> {
        let user : User = new User();
        user.u_name = userdto.u_name;
        user.email = userdto.email;
        user.password = userdto.password;
        return this.userRepo.save(user);
    }

    getUsers() : Promise<User[]> {
        return this.userRepo.find();
    }

    //error here
    // findOne(u_id: number) {
    //     return this.userRepo.findOne(u_id);
    // }

    deleteUser(u_id : number) {
        return this.userRepo.delete(u_id);
    }

    updateUser(u_id : number, userdto : UserDto) {
        let user : User = new User();
        user.u_name = userdto.u_name;
        user.email = userdto.email;
        user.password = userdto.password;
        return this.userRepo.update(u_id, user);
    }

    adminadduser(userdto: UserDto) : any {
        let user : User = new User();
        user.u_name = userdto.u_name;
        user.email = userdto.email;
        user.password = userdto.password;
        return this.userRepo.save(userdto);
    }
}
