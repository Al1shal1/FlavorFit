import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipeInput } from './ingredient-create-without-recipe.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipeInput } from './ingredient-create-or-connect-without-recipe.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientCreateNestedOneWithoutRecipeInput {

    @Field(() => IngredientCreateWithoutRecipeInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipeInput)
    create?: IngredientCreateWithoutRecipeInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipeInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
