import { Module } from '@nestjs/common';
import 'reflect-metadata';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { Author } from './author/entity/author.entity';
import { ORMConfig } from 'config/orm_config';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: ORMConfig.host,
      port: ORMConfig.port,
      username: ORMConfig.username,
      password: ORMConfig.password,
      database: ORMConfig.database,
      entities: [User, Author],
      synchronize: true,
    }),
    UserModule,
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
