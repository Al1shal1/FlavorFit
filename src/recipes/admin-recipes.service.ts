import { Injectable, NotFoundException } from '@nestjs/common'
import type { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AdminRecipesService {
    constructor(private readonly prisma: PrismaService) {}

    getAll() {
        return this.prisma.ingredient.findMany()
    }

    async getById(id: string) {
        const recipe = await this.prisma.recipe.findUnique({
            where: {
                id: id
            }
        })
        if (!recipe) {
            throw new NotFoundException(`Ingredient with ID ${id} not found`)
        }
        return recipe
    }

    // create(data: IngredientCreateInput) {
    //     return this.prisma.ingredient.create({
    //         data
    //     })
    // }

    // update(id: string, data: IngredientCreateInput) {
    //     return this.prisma.ingredient.update({
    //         where: {
    //             id: id
    //         },
    //         data
    //     })
    // }

    deleteById(id: string) {
        return this.prisma.recipe.delete({
            where: {
                id: id
            }
        })
    }
}
