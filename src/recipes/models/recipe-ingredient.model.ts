import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { IngredientModel } from '../ingredients/models/indredient.model';
import { RecipeUnit } from '../recipe.enum';

@ObjectType()
export class RecipeIngredientModel {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => RecipeUnit, {defaultValue:'GRAM',nullable:false})
    unit!: `${RecipeUnit}`;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => IngredientModel, {nullable:false})
    ingredient?: IngredientModel;
}
