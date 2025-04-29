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
  update(@Param() params: object, @Body() body: UpdateUserDTO) {
    return {
      method: 'PUT',
      body,
      params,
    };
  }

  @Patch(':id')
  partialUpdate(@Param() params: object, @Body() body: UpdatePartialUserDTO) {
    return {
      method: 'PATCH',
      body,
      params,
    };
  }

  @Delete(':id')
  destroy(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }

}
