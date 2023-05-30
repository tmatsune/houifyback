import { Field, InputType, Int } from '@nestjs/graphql';
//imgUrl
@InputType()
export class HouseInput {
  @Field()
  name: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field((type) => Int)
  cost: number;

  @Field()
  imgUrl: string;

  @Field()
  simgUrl: string;

  @Field((type) => Int)
  profileId: number;

  @Field((type) => Int)
  bedrooms: number;

  @Field((type) => Int)
  bathrooms: number;

  @Field()
  desc: string;

  @Field((type) => Int)
  guests: number;

  @Field((type) => Int)
  maxNights: number;
}
