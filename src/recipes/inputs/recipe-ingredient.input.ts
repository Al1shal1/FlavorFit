import { Field, ID, InputType } from "@nestjs/graphql";
import { RecipeUnit } from "../recipe.enum";

@InputType()
export class RecipeIngredientInput {
    @Field(() => ID)
    ingredientId!: string;

    @Field(() => Number)
    quantity!: number;

    @Field(() => RecipeUnit)
    unit!: RecipeUnit;
}