import { Module } from '@nestjs/common';
import { UsersController } from '../controllers/usersController';
import { UsersService } from '../services/usersService';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
