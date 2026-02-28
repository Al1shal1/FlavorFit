import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { RecipesQueryInput } from './inputs/get-recipes-query.inputs'
import { Prisma } from 'prisma/generated/prisma/client'

@Injectable()
export class RecipesService {
	constructor(private readonly prisma: PrismaService) {}

	async getAll({ page, limit, searchItems, sort }: RecipesQueryInput) {
		const skip = (page - 1) * limit

		return this.prisma.recipe.findMany({
			skip,
			take: limit,

			where: {
				...(searchItems && {
					OR: [
						{ title: { contains: searchItems, mode: 'insensitive' } },
						{ description: { contains: searchItems, mode: 'insensitive' } },
						{
							recipeIngredients: {
								some: {
									ingredient: {
										name: { contains: searchItems, mode: 'insensitive' }
									}
								}
							}
						}
					]
				})
			},
			orderBy: this.getOrderBy(sort),
			include: {
				_count: {
					select: { likes: true }
				}
			}
		})
	}

	private getOrderBy(sort?: string) {
		switch (sort) {
			case 'recommended':
				return { likes: { _count: Prisma.SortOrder.desc } }

			case 'popular':
				return { views: Prisma.SortOrder.desc }

			default:
				return { createdAt: Prisma.SortOrder.desc }
		}
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
