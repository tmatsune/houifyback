import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { HouseService } from './houses.service';
import { House } from 'src/entities/house.Entity';
import { HouseInput } from 'src/inputs/house.input';
import { InternalServerErrorException } from '@nestjs/common';
import { Profile } from 'src/entities/profile.Entity';

@Resolver((of) => House)
export class HouseResolver {
  constructor(private houseService: HouseService) {}

  @Query(() => String, { name: 'houseTest' })
  public async houses() {
    return 'houses from database';
  }
  @Query((returns) => [House], { name: 'getHouses', nullable: true })
  async getHouses() {
    return await this.houseService.findAllHouses();
  }
  @Query((returns) => House, { name: 'getOneHouse', nullable: true })
  async getOneHouse(@Args('houseId') houseId: number): Promise<House> {
    return await this.houseService.getOneHouse(houseId);
  }
  @Mutation((returns) => House, { name: 'createHouse' })
  async createHouse(@Args('newHouseData') newHouseData: HouseInput) {
    return await this.houseService.createHouse(newHouseData).catch((err) => {
      new InternalServerErrorException();
    });
  }
  @Query((returns) => [House], { name: 'findUsersHouses' })
  async findUsersHouses(@Args('user_id') user_id: number) {
    return await this.houseService.getUsersHouse(user_id).catch((err) => {
      new InternalServerErrorException();
    });
  }
  @ResolveField((returns) => Profile, { name: 'getOwnerHouse' })
  getOwnerHouse(@Parent() house: House): Promise<Profile> {
    return this.houseService.getProflie(house.profileId);
  }
  @Query((returns) => [House], { name: 'getHouseCateg' })
  async getHouseCateg(
    @Args('houseCateg') houseCateg: string,
    @Args('minCost') minCost: number,
    @Args('maxCost') maxCost: number,
  ) {
    return await this.houseService.getHousesCategory(
      houseCateg,
      minCost,
      maxCost,
    );
  }
}
