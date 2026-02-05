import { ConfigService } from "@nestjs/config";

export const isDev = (ConfigService: ConfigService) => {
    return ConfigService.get('MODE') === 'development'
}