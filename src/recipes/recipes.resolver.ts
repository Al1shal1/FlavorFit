import { AdminRecipesService } from './admin-recipes.service'
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { RecipesService } from './recipes.service'
import { Role } from 'prisma/generated/graphql/prisma'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { RecipeModel } from './models/recipe.model'
import { RecipeCreateInput } from './inputs/recipe.input'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'

@Resolver()
export class RecipesResolver {
	constructor(
		private readonly RecipesService: RecipesService,
		private readonly AdminRecipesService: AdminRecipesService
	) {}

	@Query(() => [RecipeModel], {
		name: 'recipes'
	})
	getAll() {
		return this.RecipesService.getAll()
	}

	@Query(() => RecipeModel, {
		name: 'recipesBySlug'
	})
	getBySlug(@Args('slug') slug: string) {
		return this.RecipesService.getBySlug(slug)
	}

	@Query(() => [RecipeModel], {
		name: 'admin-recipes'
	})
	@Auth(Role.ADMIN)
	getAllAdmin() {
		return this.AdminRecipesService.getAll()
	}

	@Query(() => RecipeModel, {
		name: 'recipesById'
	})
	@Auth(Role.ADMIN)
	getById(@Args('id') id: string) {
		return this.AdminRecipesService.getById(id)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	createRecipe(
		@CurrentUser() authorId: string,
		@Args('input') input: RecipeCreateInput
	) {
		return this.AdminRecipesService.create(authorId, input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	updateRecipe(
		@Args('id') id: string,
		@Args('input') input: RecipeCreateInput
	) {
		return this.AdminRecipesService.update(id, input)
	}

	@Mutation(() => RecipeModel)
	@Auth(Role.ADMIN)
	deleteRecipeById(@Args('id') id: string) {
		return this.AdminRecipesService.deleteById(id)
	}
}
