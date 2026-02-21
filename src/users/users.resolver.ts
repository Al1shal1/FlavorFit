import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UsersService } from './users.service'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { Role } from 'prisma/generated/prisma/enums'
import type { UserUpdateInput } from 'prisma/generated/models/user/user-update.input'
import { User } from 'prisma/generated/models/user'

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => User, { name: 'profile' })
	@Auth()
	getProfile(@CurrentUser('id') id: string) {
		return this.usersService.findById(id)
	}

	@Mutation(() => User)
	@Auth()
	updateProfile(
		@CurrentUser('id') id: string,
		@Args() input: UserUpdateInput
	) {
		return this.usersService.updateProfile(id, input)
	}

	@Query(() => [User], { name: 'users' })
	@Auth(Role.ADMIN)
	getUsers() {
		return this.usersService.findAll()
	}
}