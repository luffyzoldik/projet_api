import { Module } from '@nestjs/common';
import { GameService } from './game.service';
import { ListGamesController } from './list-games/list-games.controller';
import { GetGameController } from './get-game/get-game.controller';
import { CreateGameController } from './create-game/create-game.controller';
import { UpdateGameController } from './update-game/update-game.controller';
import { DeleteGameController } from './delete-game/delete-game.controller';

@Module({
  providers: [GameService],
  controllers: [ListGamesController, GetGameController, CreateGameController, UpdateGameController, DeleteGameController]
})
export class GameModule {}
