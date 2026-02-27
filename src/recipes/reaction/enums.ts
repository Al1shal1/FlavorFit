import { registerEnumType } from '@nestjs/graphql'

export enum OrderStatus {
	PENDING = 'PENDING',
	PROCESSING = 'PROCESSING',
	COMPLETED = 'COMPLETED',
	CANCELED = 'CANCELED'
}

registerEnumType(OrderStatus, { name: 'OrderStatus', description: undefined })
