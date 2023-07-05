import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/DTOs/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('users')
    getUsers() {
        // return user;
        return this.userService.getUsers();
    }
    
    @Post('user/AddUser')
    adduser(@Body() userdto: UserDto) {
        // user.push(userdto);
        return this.userService.addUser(userdto);
    }

    @Get('user/:u_id')
    getAdmin(@Param('u_id') u_id: number) {
    // return admin.find((admin) => admin.a_id == a_id);
        return this.userService.getUser(u_id);
    }
    @Delete('user/:u_id')
    deleteuser(@Param('u_id') u_id: number) {
        // user = user.filter((user) => user.u_id != u_id);
        return this.userService.deleteUser(u_id);
    }

    @Put('user/:a_id')
    updateuser(@Param('u_id') u_id: number, @Body() userdto: UserDto) {
        // user = user.filter((user) => user.u_id != u_id);
        // user.push(user);
        return this.userService.updateUser(+u_id, userdto);
    }
}
