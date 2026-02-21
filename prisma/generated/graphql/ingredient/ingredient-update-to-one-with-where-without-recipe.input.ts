import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutRecipeInput } from './ingredient-update-without-recipe.input';

@InputType()
export class IngredientUpdateToOneWithWhereWithoutRecipeInput {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => IngredientUpdateWithoutRecipeInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipeInput)
    data!: IngredientUpdateWithoutRecipeInput;
}
