import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { House } from 'src/entities/house.Entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThan, Repository } from 'typeorm';
import { HouseInput } from 'src/inputs/house.input';
import { ProfileService } from 'src/profile/profile.service';
import { Profile } from 'src/entities/profile.Entity';
import { max } from 'rxjs';
//injectable
@Injectable()
export class HouseService {
  constructor(
    @InjectRepository(House) private houseRepository: Repository<House>,
    private profileService: ProfileService,
  ) {}
  async findAllHouses(): Promise<House[]> {
    const houses = await this.houseRepository.find();
    return houses;
  }
  async getOneHouse(houseId: number): Promise<House> {
    const house = await this.houseRepository.findOne({
      where: { id: houseId },
    });
    return house;
  }
  async createHouse(houseData: HouseInput): Promise<House> {
    const newHouse = this.houseRepository.create(houseData);
    await this.houseRepository.save(newHouse).catch((err) => {
      new InternalServerErrorException();
    });
    return newHouse;
  }
  async getUsersHouse(user_id: number): Promise<House[]> {
    const usersHouses = await this.houseRepository.find({
      where: { profileId: user_id },
    });
    return usersHouses;
  }
  async getProflie(user_id: number): Promise<Profile> {
    const getProfile = await this.profileService.findProfileById(user_id);
    return getProfile;
  }
  async getHousesCategory(
    houseCateg: string,
    minCost: number,
    maxCost: number,
  ): Promise<House[]> {
    const categHouses = await this.houseRepository.find({
      where: { name: houseCateg, cost: LessThan(maxCost) },
    });
    return categHouses;
  }
}
