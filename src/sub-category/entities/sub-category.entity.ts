import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Category } from 'src/category/entities/category.entity';

@ObjectType()
export class SubCategory {
  @Field(() => ID, { description: 'Subcategory Id' })
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  slug: string;

  @Field(() => String)
  gender: string;

  // * Relations
  @Field(() => Category)
  category: string;
}
