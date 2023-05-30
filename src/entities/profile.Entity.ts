import {
  Entity,
  Column,
  Unique,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { House } from './house.Entity';
import { Reserve } from './reserve.Entity';

@Entity({ name: 'profile' })
@ObjectType()
@Unique(['name'])
export class Profile {
  @PrimaryGeneratedColumn('increment')
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ unique: true })
  @Field()
  email: string;

  @Column()
  @Field()
  desc: string;

  @Column({ nullable: true })
  @Field()
  profImg: string;

  @Column()
  @Field()
  password: string;

  @OneToMany(() => House, (house) => house.profile)
  @Field((type) => [House], { nullable: true })
  house?: House[];

  @OneToMany(() => Reserve, (reserve) => reserve.profile)
  @Field((type) => [Reserve], { nullable: true })
  reserve?: Reserve[];
}
