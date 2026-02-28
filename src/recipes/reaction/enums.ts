import { registerEnumType } from '@nestjs/graphql'

export enum RecipeOrderStatus {
	PENDING = 'PENDING',
	PROCESSING = 'PROCESSING',
	COMPLETED = 'COMPLETED',
	CANCELED = 'CANCELED'
}

registerEnumType(RecipeOrderStatus, { name: 'RecipeOrderStatus', description: undefined })
