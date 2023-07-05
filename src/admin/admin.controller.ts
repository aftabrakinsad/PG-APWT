import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Post, Put, Query, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UserService } from 'src/user/user.service';
import { AdminDto } from 'src/DTOs/admin.dto';
import { UserDto } from 'src/DTOs/user.dto';
import { MessagingDto } from 'src/DTOs/message.dto';
import { MessageService } from 'src/message/message.service';

@Controller('admin')
export class AdminController {
    constructor(
        private adminService: AdminService,
        private userService: UserService,
        private messageService: MessageService
        ) { }

    @Get('admins')
    getAdmins() {
        // return admin;
        return this.adminService.getAdmins();
    }
    
    @Post('admin/AddAdmin')
    addAdmin(@Body() admindto: AdminDto) {
        // admin.push(admindto);
        return this.adminService.addAdmin(admindto);
    }

    @Get('admin/:a_id')
    getAdmin(@Param('a_id') a_id: number) {
    // return admin.find((admin) => admin.a_id == a_id);
        return this.adminService.getAdmin(a_id);
    }

    @Delete('admin/:a_id')
    deleteAdmin(@Param('a_id') a_id: number) {
        // admin = admin.filter((admin) => admin.a_id != a_id);
        return this.adminService.deleteAdmin(a_id);
    }

    @Put('admin/:a_id')
    updateAdmin(@Param('a_id') a_id: number, @Body() admindto: AdminDto) {
        // admin = admin.filter((admin) => admin.a_id != a_id);
        // admin.push(admin);
        return this.adminService.updateAdmin(+a_id, admindto);
    }

    @Post('/useradd')
    addUser(@Body() userDto: UserDto) {
        return this.userService.addUser(userDto);
    }

    @Get('/users')
    getUsers() {
        return this.userService.getUsers();
    }

    @Get('/user/:u_id')
    getUser(@Param('u_id') u_id: number) {
        return this.userService.getUser(+u_id);
    }

    @Delete('/user/:u_id')
    deleteUser(@Param('u_id') u_id: number) {
        return this.userService.deleteUser(+u_id);
    }

    @Put('/user/:u_id')
    updateUser(@Param('u_id') u_id: number, @Body() userDto: UserDto) {
        return this.userService.updateUser(+u_id, userDto);
    }

    @Post('/message')
    addMessage(@Body() messageDto: MessagingDto) {
        return this.messageService.addMessage(messageDto);
    }

    @Get('/messages')
    Messaging() {
        return this.messageService.Messaging();
    }

}
