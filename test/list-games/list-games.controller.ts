// src/game/list-games.controller.ts

import { Controller, Get, Query, HttpStatus, HttpCode } from '@nestjs/common';
import { GameService } from '../../src/game/game.service'; // Service pour l'accès au CSV/BDD

@Controller('games')
export class ListGamesController {
  constructor(private readonly gameService: GameService) {}

  /**
   * Correspond à GET /games
   * Bonus : Supporte les query parameters 'offset' et 'limit'.
   */
  @Get()
  @HttpCode(HttpStatus.OK) // Statut 200
  findAll(
    @Query('offset') offset?: string,
    @Query('limit') limit?: string,
  ): any[] {
    // Conversion sécurisée des query parameters en nombres
    const skip = offset ? parseInt(offset, 10) : 0;
    const take = limit ? parseInt(limit, 10) : 10;
    
    // Le service effectue le tri et la pagination
    return this.gameService.findAll(skip, take); 
  }
}