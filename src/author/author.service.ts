import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Author } from './entity/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
  ) {}

  create(author: Author) {
    this.authorRepository.create(author);
  }

  findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  findOne(id: any): Promise<Author> {
    return this.authorRepository.findOne({
      where: {
        id: id,
      },
    });
  }
}
