import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class ReserveInput {
  @Field((type) => [Int])
  reserveDates: number[];

  @Field((type) => Int)
  profileId: number;

  @Field((type) => Int)
  houseId: number;
}
