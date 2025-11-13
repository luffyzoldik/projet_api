// src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // 👈 Import nécessaire
import { GameModule } from './game/game.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Rendre le ConfigModule disponible globalement
    ConfigModule.forRoot({
      isGlobal: true, // Ceci rend le ConfigService disponible partout
    }),
    AuthModule,
    GameModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}