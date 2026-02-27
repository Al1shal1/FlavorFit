import { registerEnumType } from '@nestjs/graphql';

export enum OrderItemScalarFieldEnum {
    id = "id",
    recipeIngredientid = "recipeIngredientid",
    quantity = "quantity",
    price = "price",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderItemScalarFieldEnum, { name: 'OrderItemScalarFieldEnum', description: undefined })
