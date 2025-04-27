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

@Controller('users')
export class UserController {
  @Post()
  create(@Body() { name, email, password }: CreateUserDTO) {
    return { name, email, password };
  }

  @Get()
  list() {
    return { users: [] };
  }

  @Get(':id')
  show(@Param() param: object) {
    return { user: {}, param };
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
