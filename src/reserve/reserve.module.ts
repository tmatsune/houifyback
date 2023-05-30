import { Module } from '@nestjs/common';
import { Reserve } from 'src/entities/reserve.Entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReserveService } from './reserve.service';
import { ReserveResolver } from './reserve.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Reserve])],
  providers: [ReserveService, ReserveResolver],
  exports: [ReserveService],
})
export class ReserveModule {}
