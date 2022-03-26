import { Factory, Seeder } from 'typeorm-seeding';

import { User } from '../../../user/entity/user.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    const users = await factory(User)().createMany(15);
  }
}
