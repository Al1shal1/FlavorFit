import { Field } from '@nestjs/graphql'
import { ObjectType } from '@nestjs/graphql'
import { ID } from '@nestjs/graphql'
import { OrderItemModel } from 'src/orders/models/order-item.model'
import { RecipeOrderStatus } from 'src/recipes/reaction/enums'

@ObjectType()
export class OrderModel {
	@Field(() => ID, { nullable: false })
	id!: string

	@Field(() => String, { nullable: false })
	orderId!: string

	@Field(() => RecipeOrderStatus, { defaultValue: 'PENDING', nullable: false })
	status!: `${RecipeOrderStatus}`

	@Field(() => Date, { nullable: false })
	createdAt!: Date

	@Field(() => Date, { nullable: false })
	updatedAt!: Date

	@Field(() => [OrderItemModel], { nullable: false })
	items?: OrderItemModel[]
}
