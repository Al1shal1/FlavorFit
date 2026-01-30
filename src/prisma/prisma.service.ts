/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from 'prisma/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	private readonly pool: Pool
	constructor() {
		const connectionString = process.env.DATABASE_URL

		if (!connectionString) {
			throw new Error('DATABASE_URL is not defined')
		}

		const pool = new Pool({ connectionString })
		const adapter = new PrismaPg(pool)
		super({ adapter })
		this.pool = pool
	}
	async onModuleInit() {
		await this.$connect()
		console.log('Prisma connected to the PostgreSQL')
	}

	async onModuleDestroy() {
		await this.$disconnect()
		await this.pool.end()
		console.log('Prisma disconnected from the PostgreSQL')
	}
}
