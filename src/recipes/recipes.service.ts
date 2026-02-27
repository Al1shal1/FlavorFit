import { Injectable, NotFoundException } from '@nestjs/common'
import type { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll() {
		const data = await this.prisma.recipe.findMany({
			include: {
				comments: true,
				likes: true,
		}})

		// const likesCount = data.

		return data
	}

	async getBySlug(slug: string) {
		const recipe = await this.prisma.recipe.findUnique({
			where: {
				slug
			},
			include: {
				recipeSteps: true,
				recipeIngredients: {
					include: {
						ingredient: true
					}
				}
			}
		})
		if (!recipe) {
			throw new NotFoundException(`Ingredient with slug ${slug} not found`)
		}
		return recipe
	}
}
