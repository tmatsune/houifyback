import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: 5032,
  host: process.env.HOST,
  database: process.env.DB,
  synchronize: true,
  entities: ['dist/**/entities/*{.ts,.js}'],
};
/*
export const pgConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  port: 5432,
  host: process.env.USERNAME,
  database: process.env.DB,
  synchronize: true,
};
*/
