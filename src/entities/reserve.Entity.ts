import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';
import { Field, ObjectType, Int } from '@nestjs/graphql';
import { House } from './house.Entity';
import { Profile } from './profile.Entity';

@Entity({ name: 'reserve' })
@ObjectType()
export class Reserve {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column('int', { array: true })
  @Field((type) => [Int], { nullable: true })
  reserveDates: number[];

  @Column()
  @Field((type) => Int)
  profileId: number;

  @Column()
  @Field((type) => Int)
  houseId: number;

  @ManyToOne(() => House, (house) => house.reserve)
  @Field((type) => House)
  house: House;

  @ManyToOne(() => Profile, (profile) => profile.reserve)
  @Field((type) => Profile)
  profile: Profile;
}
