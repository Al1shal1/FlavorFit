import { registerEnumType } from "@nestjs/graphql";

export enum  RecipeDifficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD'
}

registerEnumType( RecipeDifficulty, { name: 'RecipeDifficulty', description: undefined })

export enum RecipeUnit {
    GRAM = "GRAM",
    MILLILITER = "MILLILITER",
    PIECE = "PIECE",
    TABLESPOON = "TABLESPOON",
    TEASPOON = "TEASPOON",
    CLOVES = "CLOVES"
}


registerEnumType(RecipeUnit, { name: 'RecipeUnit', description: undefined })
