import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  RelationId,
  OneToMany,
} from 'typeorm';
import { Profile } from './profile.Entity';
import { Reserve } from './reserve.Entity';

@Entity({ name: 'house' })
@ObjectType()
//@Unique(['name'])
export class House {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field((type) => Int)
  cost: number;

  @Column() //{ default: '' }
  @Field()
  imgUrl: string;

  @Column()
  @Field()
  simgUrl: string;

  @Column()
  @Field((type) => Int)
  profileId: number;

  @ManyToOne(() => Profile, (profile) => profile.house)
  @Field((type) => Profile)
  profile: Profile;

  @OneToMany(() => Reserve, (reserve) => reserve.house)
  @Field((type) => [Reserve], { nullable: true })
  reserve?: Reserve[];

  @Column()
  @Field((type) => Int)
  bedrooms: number;

  @Column()
  @Field((type) => Int)
  bathrooms: number;

  @Column()
  @Field()
  desc: string;

  @Column()
  @Field((type) => Int)
  guests: number;

  @Column()
  @Field((type) => Int)
  maxNights: number;
}
