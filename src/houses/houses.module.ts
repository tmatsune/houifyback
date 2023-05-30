import { Module } from '@nestjs/common';
import { HouseService } from './houses.service';
import { HouseResolver } from './houses.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { House } from 'src/entities/house.Entity';
import { ProfileModule } from 'src/profile/profile.module';

@Module({
  imports: [TypeOrmModule.forFeature([House]), ProfileModule],
  providers: [HouseService, HouseResolver],
  exports: [HouseService],
})
export class HousesModule {}
