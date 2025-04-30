import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Patch,
  Delete,
  // UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UpdatePartialUserDTO } from './dto/update-patch-user.dto';
import UserService from './user.service';
import { ParamId } from 'src/decorators/param-id.decorator';
// import { LogInterceptor } from 'src/interceptors/log.interceptor';

// @UseInterceptors(LogInterceptor)
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
  async show(@ParamId() id: number) {
    return this.userService.show(id);
  }

  @Put(':id')
  async update(@ParamId() id: number, @Body() body: UpdateUserDTO) {
    return this.userService.update(id, body);
  }

  @Patch(':id')
  async partialUpdate(@ParamId() id: number, @Body() body: UpdatePartialUserDTO) {
    return this.userService.updatePartial(id, body);
  }

  @Delete(':id')
  async destroy(@ParamId() id: number) {
    return this.userService.destroy(id);
  }

}
