import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthorService } from './author.service';
import { Author } from './entity/author.entity';

@Controller('authors')
export class AuthorController {
  constructor(private authorService: AuthorService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.authorService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorService.findAll();
  }

  @Get('getAuthor')
  async findOne(@Query('authorId') id: number): Promise<Author> {
    return this.authorService.findOne(id);
  }
}
