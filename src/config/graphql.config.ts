import { type IGqlContext } from 'src/app.interface';
import { ApolloDriverConfig } from '@nestjs/apollo'
import { ConfigService } from '@nestjs/config'

export const getGraphQLConfig = (
	configService: ConfigService
): ApolloDriverConfig => ({
    autoSchemaFile: true,
    sortSchema: true,
    playground: configService.get<string>('MODE') === 'development',
    context: ({ req, res }: IGqlContext): IGqlContext => ({ req , res }),
})
