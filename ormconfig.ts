import { User } from './src/user/entity/user.entity';
import { ORMConfig } from './config/orm_config';

export default {
  type: 'mssql',
  host: ORMConfig.host,
  port: ORMConfig.port,
  username: ORMConfig.username,
  password: ORMConfig.password,
  database: ORMConfig.database,
  entities: [User],
  synchronize: true,
  options: {
    trustServerCertificate: true
  },
  seeds: ['src/db/seeding/seeds/**/*{.ts,.js}'],
  factories: ['src/db/seeding/factories/**/*{.ts,.js}'],
};
