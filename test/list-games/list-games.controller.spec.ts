import { Test, TestingModule } from '@nestjs/testing';
import { ListGamesController } from './list-games.controller';

describe('ListGamesController', () => {
  let controller: ListGamesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListGamesController],
    }).compile();

    controller = module.get<ListGamesController>(ListGamesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
