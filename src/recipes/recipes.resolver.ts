import { RecipesService } from './recipes.service';
// import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
// import { IngredientsService } from './ingredients/ingredients.service'
// import { IngredientModel } from './ingredients/models/indredient.model'
// import { Auth } from 'src/auth/decorators/auth.decorator'
// import { Role } from 'prisma/generated/prisma/enums'
// import { IngredientCreateInput } from './ingredients/inputs/create-ingredients.input'

// @Resolver()
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}
  
  //   @Query(() => [IngredientModel], {
  //     name: 'ingredients'
  //   })
  //   @Auth(Role.ADMIN)
  //   getAll() {
  //     return this.ingredientsService.getAll()
  //   }
  
  //   @Query(() => IngredientModel, {
  //     name: 'ingredientsById'
  //   })
  //   @Auth(Role.ADMIN)
  //   getById(@Args('id') id: string) {
  //     return this.ingredientsService.getById(id)
  //   }
  
  //   @Mutation(() => IngredientModel)
  //   @Auth(Role.ADMIN)
  //   createIngredient(@Args('input') input: IngredientCreateInput) {
  //     return this.ingredientsService.create(input)
  //   }
  
  //   @Mutation(() => IngredientModel)
  //   @Auth(Role.ADMIN)
  //   updateIngredient(
  //     @Args('id') id: string,
  //     @Args('input') input: IngredientCreateInput
  //   ) {
  //     return this.ingredientsService.update(id, input)
  //   }
  
  //   @Mutation(() => IngredientModel)
  //   @Auth(Role.ADMIN)
  //   deleteIngredientById(@Args('id') id: string) {
  //     return this.ingredientsService.deleteById(id)
  //   }
  // }
  
}
