import { Field, Float, ID, InputType } from '@nestjs/graphql'
import { RecipeOrderStatus } from 'src/recipes/reaction/enums'

@InputType()
export class OrderItemInput {
	@Field(() => ID)
	recipeIngredientId!: string

	@Field(() => Float, { defaultValue: 1 })
	quantity!: number
}

@InputType()
export class OrderCreateInput {
	@Field(() => [OrderItemInput])
	items!: OrderItemInput[]
}

@InputType()
export class OrderUpdateStatusInput {
	@Field(() => RecipeOrderStatus)
	status!: RecipeOrderStatus
}
