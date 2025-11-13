import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Param, 
  Body, 
  Query, 
  HttpCode, 
  HttpStatus 
} from '@nestjs/common';
import { GameService } from './game.service';

@Controller('games')
export class GameController { 
  
  constructor(private readonly gameService: GameService) {}

  // 1. GET /games (Liste & Pagination)
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(
    @Query('offset') offset?: string,
    @Query('limit') limit?: string,
  ): any[] {
    const skip = offset ? parseInt(offset, 10) : 0;
    const take = limit ? parseInt(limit, 10) : 10;
    return this.gameService.findAll(skip, take); 
  }

  // 2. GET /games/:id (Afficher un jeu)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string): any {
    return this.gameService.findOne(id);
  }

  // 3. POST /games (Ajouter un jeu)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createDto: any): any {
    return this.gameService.create(createDto);
  }

  // 4. PUT /games/:id (Mettre à jour un jeu)
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateDto: any): any {
    return this.gameService.update(id, updateDto);
  }

  // 5. DELETE /games/:id (Supprimer un jeu)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string): void {
    this.gameService.remove(id);
  }
}