import { hash } from 'argon2'
import { Injectable } from '@nestjs/common'
import type { Prisma } from 'prisma/generated/prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import type { UserUpdateInput } from 'prisma/generated/models/user'

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		return this.prisma.user.findMany()
	}

	async findById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				profile: true,
				measurements: true
			}
		})
	}

	async findByEmail(email: string) {
		return this.prisma.user.findFirst({
			where: {
				email: {
					equals: email,
					mode: 'insensitive'
				}
			}
		})
	}

	async updateProfile(id: string, input: UserUpdateInput) {
		const { profile, measurements, password, ...data } = input

		const updateProfile: Prisma.XOR<
			Prisma.UserUpdateInput,
			Prisma.UserUncheckedUpdateInput
		> = profile
			? {
					profile: {
						upsert: {
							create: profile as Prisma.ProfileCreateWithoutUserInput,
							update: profile as Prisma.ProfileUpdateWithoutUserInput
						}
					}
				}
			: {}

		const updateMeasurements: Prisma.XOR<
			Prisma.UserUpdateInput,
			Prisma.UserUncheckedUpdateInput
		> = measurements
			? {
					measurements: {
						upsert: {
							create: measurements,
							update: measurements
						}
					}
				}
			: {}

		const hashedPassword = 
        password && typeof password === 'string'
			? {
					password: await hash(password)
				}
			: {}

		return this.prisma.user.update({
			where: {
				id
			},
			data: {
				...hashedPassword,
				...updateProfile,
				...updateMeasurements,
				email: data.email
			},
            include: {
                profile: true,
                measurements: true
            }
		})
	}
}
