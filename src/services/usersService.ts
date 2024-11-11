import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import User from '../models/user';
import { CreateUserDto, UpdateUserDto } from '../dtos/usersDTO';

@Injectable()
export class UsersService {
  private users: User[] = []; // In-memory array for demonstration

  // Get all users
  findAll(): Omit<User, 'password'>[] {
    return this.users.map(({ password, ...user }) => user);
  }

  // Get a single user by ID
  findOne(id: string): Omit<User, 'password'> {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  // Create a new user
  create(createUserDto: CreateUserDto): Omit<User, 'password'> {
    const newUser = new User(createUserDto.login, createUserDto.password);
    this.users.push(newUser);
    const { password, ...userWithoutPassword } = newUser;
    return userWithoutPassword;
  }

  // Update an existing user's password
  update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): { success: boolean; user: Omit<User, 'password'> | null } {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!updateUserDto.oldPassword || !updateUserDto.newPassword) {
      throw new BadRequestException(
        'Both oldPassword and newPassword are required',
      );
    }

    if (user.password !== updateUserDto.oldPassword) {
      throw new ForbiddenException('Incorrect old password');
    }

    user.password = updateUserDto.newPassword;
    user.version += 1;
    user.updatedAt = Date.now();

    const { password, ...userWithoutPassword } = user;
    return { success: true, user: userWithoutPassword };
  }

  // Remove a user by ID
  remove(id: string): boolean {
    const index = this.users.findIndex((user) => user.id === id);
    if (index === -1) {
      throw new NotFoundException('User not found');
    }
    this.users.splice(index, 1);
    return true;
  }
}
