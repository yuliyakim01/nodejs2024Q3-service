import { Controller, Get, Post, Put, Delete, Param, Body, BadRequestException, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './userService';
import { CreateUserDto, UpdateUserDto } from './dto/usersDTO';
import  User  from './user';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    return this.usersService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createUserDto: CreateUserDto) {
    if (!createUserDto.login || !createUserDto.password) {
      throw new BadRequestException('Invalid request body');
    }
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    if (!updateUserDto.oldPassword || !updateUserDto.newPassword) {
      throw new BadRequestException('Invalid request body');
    }
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    if (!this.isValidUUID(id)) {
      throw new BadRequestException('Invalid ID format');
    }
    this.usersService.remove(id);
  }

  private isValidUUID(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(id);
  }
}
