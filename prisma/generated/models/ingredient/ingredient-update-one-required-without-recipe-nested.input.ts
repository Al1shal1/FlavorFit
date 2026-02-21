import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipeInput } from './ingredient-create-without-recipe.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipeInput } from './ingredient-create-or-connect-without-recipe.input';
import { IngredientUpsertWithoutRecipeInput } from './ingredient-upsert-without-recipe.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateToOneWithWhereWithoutRecipeInput } from './ingredient-update-to-one-with-where-without-recipe.input';

@InputType()
export class IngredientUpdateOneRequiredWithoutRecipeNestedInput {

    @Field(() => IngredientCreateWithoutRecipeInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipeInput)
    create?: IngredientCreateWithoutRecipeInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipeInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipeInput;

    @Field(() => IngredientUpsertWithoutRecipeInput, {nullable:true})
    @Type(() => IngredientUpsertWithoutRecipeInput)
    upsert?: IngredientUpsertWithoutRecipeInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientUpdateToOneWithWhereWithoutRecipeInput, {nullable:true})
    @Type(() => IngredientUpdateToOneWithWhereWithoutRecipeInput)
    update?: IngredientUpdateToOneWithWhereWithoutRecipeInput;
}
