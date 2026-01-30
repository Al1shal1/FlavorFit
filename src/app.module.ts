import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [AuthModule, UsersModule, RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
