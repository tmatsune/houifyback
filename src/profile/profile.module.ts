import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/entities/profile.Entity';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { HousesModule } from 'src/houses/houses.module';
@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [ProfileService, ProfileResolver],
  exports: [ProfileService],
})
export class ProfileModule {}
