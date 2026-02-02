import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const getJwtConfig = (
	configServise: ConfigService
): JwtModuleOptions => ({
	secret: configServise.get<string>('JWT_SECRET')
})
