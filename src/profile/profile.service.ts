import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Profile } from 'src/entities/profile.Entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProfileInput } from 'src/inputs/profile.input';
import { HouseService } from 'src/houses/houses.service';
import { House } from 'src/entities/house.Entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(Profile) private proflieRepository: Repository<Profile>,
  ) {}
  async findAllProfiles(): Promise<Profile[]> {
    const profiles = await this.proflieRepository.find();
    return profiles;
  }
  async findOneProfile(email: string, pass: string): Promise<Profile> {
    const profile = await this.proflieRepository.findOne({
      where: { email: email },
    });
    const isMatch = await bcrypt.compare(pass, profile.password);
    if (isMatch) {
      return profile;
    }
  }
  async findProfileById(user_id: number): Promise<Profile> {
    const profile = await this.proflieRepository.findOne({
      where: { id: user_id },
    });
    return profile;
  }
  async createProfile(profileInput: ProfileInput): Promise<Profile> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(profileInput.password, salt);
    const nwUser = {
      name: profileInput.name,
      email: profileInput.email,
      desc: profileInput.desc,
      password: hash,
      profImg: profileInput.profImg,
    };
    const newProfile = this.proflieRepository.create(nwUser);
    await this.proflieRepository.save(newProfile).catch((err) => {
      new InternalServerErrorException();
    });
    return newProfile;
  }
  /*
  async getUsersHouses(user_id: number): Promise<House[]> {
    const houses = await this.houseService.getUsersHouse(user_id);
    return houses;
  }
  */
}
