import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminDto } from 'src/DTOs/admin.dto';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

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

    //error here
    // @Get('admin/:a_id')
    // findOne(@Param('a_id') a_id: number) {
    // return admin.find((admin) => admin.a_id == a_id);
    //     return this.adminService.findOne(+a_id);
    // }

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
}
