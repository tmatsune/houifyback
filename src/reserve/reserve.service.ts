import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Reserve } from 'src/entities/reserve.Entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReserveInput } from 'src/inputs/reserve.input';
import { find } from 'rxjs';

@Injectable()
export class ReserveService {
  constructor(
    @InjectRepository(Reserve) private reserveRepository: Repository<Reserve>,
  ) {}
  async createReservation(reserveData: ReserveInput): Promise<Reserve> {
    const nwReserve = this.reserveRepository.create(reserveData);
    await this.reserveRepository.save(nwReserve);
    return nwReserve;
  }
  async getHousesReserve(houseId: number): Promise<Reserve[]> {
    const housesReserves = await this.reserveRepository.find({
      where: { houseId: houseId },
    });
    return housesReserves;
  }
  async getProfileReserve(profileId: number): Promise<Reserve[]> {
    const profileReserves = await this.reserveRepository.find({
      where: { profileId: profileId },
    });
    return profileReserves;
  }
}
