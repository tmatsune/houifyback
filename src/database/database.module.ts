import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from '../orm.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forRootAsync(pgConfig), ConfigModule.forRoot()],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
