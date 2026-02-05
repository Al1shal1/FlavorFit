import { Field, Int, ObjectType, registerEnumType } from '@nestjs/graphql'
import {
	ActivityLevel,
	Gender,
	NutritionGoal,
	Role
} from 'prisma/generated/prisma/enums'

registerEnumType(ActivityLevel, { name: 'ActivityLevel' })
registerEnumType(NutritionGoal, { name: 'NutritionGoal' })
registerEnumType(Gender, { name: 'Gender' })
registerEnumType(Role, { name: 'Role' })

export class BodyMeasurement {
	@Field(() => Int, { nullable: true })
	id: number

	@Field(() => Int, { nullable: true })
	heightCm: number

	@Field(() => Int, { nullable: true })
	weightKg: number

	@Field(() => Int, { nullable: true })
	goalWeightKg: number

	@Field(() => Int, { nullable: true })
	chestCm: number

	@Field(() => Int, { nullable: true })
	waistCm: number

	@Field(() => Int, { nullable: true })
	thighCm: number

	@Field(() => Int, { nullable: true })
	armCm: number

	@Field(() => ActivityLevel, { nullable: true })
	activityLevel?: ActivityLevel

	@Field(() => NutritionGoal, { nullable: true })
	nutritionGoal?: NutritionGoal

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}

@ObjectType()
export class UserProfileModel {
	@Field()
	id: string

	@Field()
	email: string

	@Field()
	fullName: string

	@Field(() => Int, { nullable: true })
	age: number

	@Field(() => Gender, { nullable: true })
	gender?: Gender

	@Field({ nullable: true })
	bio: string

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}

export class UserModel {
	@Field(() => String)
	id: string

	@Field(() => String)
	email: string

	@Field(() => Role)
	role?: Role

	@Field(() => UserProfileModel, { nullable: true })
	profile?: UserProfileModel

	@Field(() => BodyMeasurement, { nullable: true })
	measurements?: BodyMeasurement

	@Field()
	createdAt: Date

	@Field()
	updatedAt: Date
}
