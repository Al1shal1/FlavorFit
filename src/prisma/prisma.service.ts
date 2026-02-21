/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
	Injectable,
	Logger,
	OnModuleDestroy,
	OnModuleInit
} from '@nestjs/common'
import { PrismaClient } from 'prisma/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	private readonly pool: Pool
	constructor(logger: Logger, configService: ConfigService) {
		const connectionString = configService.get<string>('DATABASE_URL')

		if (!connectionString) {
			throw new Error('DATABASE_URL is not defined')
		}

		const pool = new Pool({ connectionString })
		const adapter = new PrismaPg(pool)
		super({ adapter })
		this.pool = pool
		this.logger = logger
		this.configService = configService
	}

	private readonly logger: Logger
	private readonly configService: ConfigService

	async onModuleInit() {
		await this.$connect()
		this.logger.log('Prisma connected to the PostgreSQL', PrismaService.name)
	}

	async onModuleDestroy() {
		await this.$disconnect()
		await this.pool.end()
		this.logger.log(
			'Prisma disconnected from the PostgreSQL',
			PrismaService.name
		)
	}
}
