/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

const entitiesPath = __dirname + '/**/*.entity{.ts,.js}';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306, 
      username: 'root',
      password: '',
      database: 'masart_db',
      entities: [entitiesPath],
      synchronize: true,
      logging: false,

    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
