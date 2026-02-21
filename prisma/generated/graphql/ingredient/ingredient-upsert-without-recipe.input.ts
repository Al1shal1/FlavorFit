import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientUpdateWithoutRecipeInput } from './ingredient-update-without-recipe.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipeInput } from './ingredient-create-without-recipe.input';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientUpsertWithoutRecipeInput {

    @Field(() => IngredientUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipeInput)
    update!: IngredientUpdateWithoutRecipeInput;

    @Field(() => IngredientCreateWithoutRecipeInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipeInput)
    create!: IngredientCreateWithoutRecipeInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;
}
