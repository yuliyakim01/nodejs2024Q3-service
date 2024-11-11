import { Module } from '@nestjs/common';
import { UsersController } from './userController';
import { UsersService } from './userService';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
