import { Resolver } from '@nestjs/graphql';
import { Reserve } from 'src/entities/reserve.Entity';
import { ReserveService } from './reserve.service';
import { ReserveInput } from 'src/inputs/reserve.input';
import { Query, Args, Mutation } from '@nestjs/graphql';
import { InternalServerErrorException } from '@nestjs/common';

@Resolver((of) => Reserve)
export class ReserveResolver {
  constructor(private reserveService: ReserveService) {}

  @Mutation((returns) => Reserve, { name: 'createReservation' })
  async createReservation(@Args('reserveData') reserveData: ReserveInput) {
    return await this.reserveService.createReservation(reserveData);
  }
  @Query((returns) => [Reserve], { name: 'getHouseReserve' })
  async getHouseReserve(@Args('houseId') houseId: number) {
    return await this.reserveService.getHousesReserve(houseId);
  }
  @Query((returns) => [Reserve], { name: 'getProfileReserve' })
  async getProfileReserve(@Args('profileId') profileId: number) {
    return await this.reserveService.getProfileReserve(profileId);
  }
}
