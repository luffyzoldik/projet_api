// src/game/get-game.controller.ts

import { Controller, Get, Param, HttpStatus, HttpCode } from '@nestjs/common';
import { GameService } from '../../src/game/game.service'; // Service pour l'accès au CSV/BDD

@Controller('games')
export class GetGameController {
  constructor(private readonly gameService: GameService) {}

  /**
   * Correspond à GET /games/:id
   * Affiche un jeu par son ID.
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK) // Statut 200
  findOne(@Param('id') id: string): any { //error 404 
    return this.gameService.findOne(id);
  }
}