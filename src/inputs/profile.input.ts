import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProfileInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  desc: string;

  @Field()
  password: string;

  @Field()
  profImg: string;
}
