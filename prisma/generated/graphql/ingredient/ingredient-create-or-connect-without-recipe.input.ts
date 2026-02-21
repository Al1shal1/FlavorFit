import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipeInput } from './ingredient-create-without-recipe.input';

@InputType()
export class IngredientCreateOrConnectWithoutRecipeInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateWithoutRecipeInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipeInput)
    create!: IngredientCreateWithoutRecipeInput;
}
