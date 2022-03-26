import * as Faker from 'faker';
import { define } from 'typeorm-seeding';

import { Author } from '../../../author/entity/author.entity';

define(Author, (faker: typeof Faker) => {
  const author = new Author();
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  author.name = `${firstName} ${lastName}`;
  return author;
});
