import { Field, InputType, Int } from '@nestjs/graphql'
import { NutritionFactUpdateInput } from './nutrition-fact.input'
import { RecipeStepInput } from './step.input'
import {RecipeDifficulty } from '../recipe.enum'
import { RecipeIngredientInput } from './recipe-ingredient.input'

@InputType()
export class RecipeCreateInput {
	@Field(() => String, { nullable: false })
	slug!: string

	@Field(() => String, { nullable: false })
	title!: string

	@Field(() => String, { nullable: false })
	description!: string

	@Field(() => Int, { nullable: false })
	calories!: number

	@Field(() => Int, { nullable: false })
	cookingTime!: number

	@Field(() => RecipeDifficulty, { nullable: false })
	difficulty!: `${RecipeDifficulty}`

	@Field(() => String, { nullable: true })
	tags?: string[]

	@Field(() => [RecipeStepInput], { nullable: true })
	recipeSteps?: RecipeStepInput[]

	@Field(() => NutritionFactUpdateInput, { nullable: true })
	nutritionFact?: NutritionFactUpdateInput

	@Field(() => [RecipeIngredientInput], { nullable: true })
	ingredients?: RecipeIngredientInput[]
}
