import { registerEnumType } from '@nestjs/graphql';

export enum NutritionFactScalarFieldEnum {
    id = "id",
    proteins = "proteins",
    fats = "fats",
    carbonydrates = "carbonydrates",
    fiber = "fiber",
    recipeId = "recipeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(NutritionFactScalarFieldEnum, { name: 'NutritionFactScalarFieldEnum', description: undefined })
