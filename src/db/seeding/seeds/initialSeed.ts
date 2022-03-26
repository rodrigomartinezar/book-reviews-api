import { Factory, Seeder } from 'typeorm-seeding';

import { User } from '../../../user/entity/user.entity';
import { Author } from '../../../author/entity/author.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const users = await factory(User)().createMany(15);
    const authors = await factory(Author)().createMany(15);
  }
}
