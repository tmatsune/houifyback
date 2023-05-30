import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Profile } from 'src/entities/profile.Entity';
import { ProfileService } from './profile.service';
import { ProfileInput } from 'src/inputs/profile.input';
import { House } from 'src/entities/house.Entity';
import { ChildEntity } from 'typeorm';

@Resolver((of) => Profile)
export class ProfileResolver {
  constructor(private profileService: ProfileService) {}

  @Query((returns) => [Profile], { name: 'findAllHouses', nullable: true })
  async findAllProfiles(): Promise<Profile[]> {
    return await this.profileService.findAllProfiles();
  }

  @Query((returns) => Profile, { name: 'findOneProfile', nullable: true })
  async findOneProfile(
    @Args('email') email: string,
    @Args('pass') pass: string,
  ): Promise<Profile> {
    return await this.profileService.findOneProfile(email, pass);
  }

  @Mutation((returns) => Profile, { name: 'createProfile' })
  // eslint-disable-next-line prettier/prettier
  async craeteProfile(@Args('profileInput') profileInput: ProfileInput,): Promise<Profile> {
    return await this.profileService.createProfile(profileInput);
  }
  @Query((returns) => Profile)
  async findProfileById(
    @Args('profileId') profileId: number,
  ): Promise<Profile> {
    return await this.profileService.findProfileById(profileId);
  }
  /*
  @Query((returns) => [House], { name: 'getUsersHoueses' })
  getProfileHouses(@Args('id') user_id: number): Promise<House[]> {
    return this.profileService.getUsersHouses(user_id);
  }
  */
}
