import 'reflect-metadata';
import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => Date, { nullable: true })
  emailVerified: Date;

  @Field(() => String)
  password: string;

  @Field(() => String)
  role: string;

  @Field(() => String, { nullable: true })
  picture: string;
}
