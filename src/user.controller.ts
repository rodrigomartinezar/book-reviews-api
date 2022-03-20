import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  findAll(): string {
    return 'This action returns all users';
  }

  @Post()
  create(): string {
    return 'This action adds a new user';
  }
}
