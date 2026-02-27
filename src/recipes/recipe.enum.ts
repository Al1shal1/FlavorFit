import { registerEnumType } from "@nestjs/graphql";

export enum Difficulty {
    EASY = 'EASY',
    MEDIUM = 'MEDIUM',
    HARD = 'HARD'
}

registerEnumType(Difficulty, { name: 'Difficulty', description: undefined })

export enum Unit {
    GRAM = "GRAM",
    MILLILITER = "MILLILITER",
    PIECE = "PIECE",
    TABLESPOON = "TABLESPOON",
    TEASPOON = "TEASPOON",
    CLOVES = "CLOVES"
}


registerEnumType(Unit, { name: 'Unit', description: undefined })
