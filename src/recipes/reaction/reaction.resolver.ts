import { Mutation, Resolver, Args } from '@nestjs/graphql';
import { ReactionService } from './reaction.service';
import { CommentModel } from './models/comment.model';
import  { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import  { CommentCreateInput, CommentUpdateInput } from './inputs/comment.input';
import { Auth } from 'src/auth/decorators/auth.decorator';
import type { Role } from 'prisma/generated/graphql/prisma';

@Resolver()
export class ReactionResolver {
  constructor(private readonly reactionService: ReactionService) {}

  @Mutation(() => CommentModel)
  @Auth()
  createComment(
    @CurrentUser('id') userId: string,
    @Args('input') input: CommentCreateInput) {
      return this.reactionService.createComment(userId, input);
}

  @Mutation(() => CommentModel)
  @Auth()
  updateComment(
    @CurrentUser('id') userId: string,
    @CurrentUser('role') userRole: Role,
    @Args('input') input: CommentUpdateInput,
    @Args('commentId') commentId: string) {
      return this.reactionService.updateComment(userId, userRole , commentId, input);
}

  @Mutation(() => CommentModel)
  @Auth()
  deleteComment(
    @CurrentUser('id') userId: string,
    @CurrentUser('role') userRole: Role,
    @Args('commentId') commentId: string) {
      return this.reactionService.deleteComment(userId, userRole, commentId);
}

  @Mutation(() => Boolean)
  @Auth()
  toggleLike(
    @CurrentUser('id') userId: string,
    @Args('recipeId') recipeId: string) {
      return this.reactionService.toggleLike(userId, recipeId);
}
}