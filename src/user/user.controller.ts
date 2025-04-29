import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UpdatePartialUserDTO } from './dto/update-patch-user.dto';
import UserService from './user.service';
import { NotFoundError } from 'rxjs';

@Controller('users')
export class UserController {

  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.userService.create(data);
  }

  @Get()
  async list() {
    return this.userService.list();
  }

  @Get(':id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return this.userService.show(id);
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateUserDTO) {
    return this.userService.update(id, body);
  }

  @Patch(':id')
  async partialUpdate(@Param('id', ParseIntPipe) id: number, @Body() body: UpdatePartialUserDTO) {
    return this.userService.updatePartial(id, body);
  }

  @Delete(':id')
  async destroy(@Param('id', ParseIntPipe) id: number) {
    return this.userService.destroy(id);
  }

}
